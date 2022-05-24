import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "theme-ui";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { getDateWithoutTime, isEmpty } from "../../common/Utilities";
import { FormattedMessage, useIntl } from "react-intl";
import OpenTroubleTicket from "../../components/OpenTroubleTicket";
import { BrandingContext } from "../../contexts/BrandingContext";
import NavMenu from "../../components/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountMessage,
  postAccountMessage,
  getAccount,
  getAccountList,
  setMaster,
  setAccountStatus,
  setIsSAUser,
} from "../../Redux/Slices/userSlice";
import PhoneDrop from "../../components/PhoneDrop/PhoneDrop";
import WelcomeSkeleton from "../../components/Header/WelcomeSkeleton";

const Layout = ({
  children,
  mobileTabSubMenu,
  disableNavMenuDefaultLocation,
  //isMasterAccount,
  displayOnlyBurgerMenu = false,
}) => {
  const dispatch = useDispatch();

  const { accountCode: rootAccountCode } = useSelector(state => state.auth);
  const location = useLocation();
  const history = useHistory();
  const { accountCode: accountCodePath } = useParams();
  const accountCode = accountCodePath ? accountCodePath : rootAccountCode;
  const [isOpenTroubleTicketModal, setOpenTroubleTicketModal] = useState(false);
  const { config } = useContext(BrandingContext);
  const {
    navigationDisplay,
    account,
    master,
    account_status,
    serviceAgreements,
    account_list_status,
    isSAUser,
    accountMessage,
    account_message_status,
    totalNumAccounts,
  } = useSelector(state => state.user);
  const intl = useIntl();
  const [isLoading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("error")) {
      setError(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!master && !account && account_status !== "loading" && !isLoading) {
      dispatch(getAccount(rootAccountCode));
      setLoading(true);
    }
  }, [account, account_status, dispatch, isLoading, master, rootAccountCode]);

  useEffect(() => {
    if (account_status === "failed") {
      history.push("/error");
    }

    if (account_status === "success" && !master) {
      const isMaster =
        account.masterAccount !== undefined && account.masterAccount !== null
          ? account.masterAccount
          : !account.serviceAgreement;

      if (isLoading) {
        dispatch(setAccountStatus(null));
        setLoading(false);
      }

      if (account && account.accountCode === rootAccountCode) dispatch(setIsSAUser(!isMaster));
      if (!master && !isMaster) {
        history.push("/account/" + account.accountCode + "/overview");
      }
      if (!master && isMaster) {
        dispatch(setMaster(account));
      }
    }
  }, [account, account_status, dispatch, history, isLoading, master, rootAccountCode]);

  useEffect(() => {
    const SA_INITIAL_CHUNK_SIZE = 50;
    if (!serviceAgreements && !account_list_status) {
      dispatch(getAccountList({ accountCode: rootAccountCode, chunkSize: SA_INITIAL_CHUNK_SIZE }));
      setInitialLoad(true);
    }
    if (
      initialLoad &&
      account_list_status === "success" &&
      totalNumAccounts &&
      totalNumAccounts > SA_INITIAL_CHUNK_SIZE
    ) {
      dispatch(getAccountList({ accountCode: rootAccountCode, chunkSize: totalNumAccounts }));
      setInitialLoad(false);
    }
  }, [
    account_list_status,
    dispatch,
    initialLoad,
    rootAccountCode,
    serviceAgreements,
    totalNumAccounts,
  ]);

  /**
   * Commercial messages logic
   */
  const [acctMsgDismissed, setAcctMsgDismissed] = useState(false);

  const isValidForDisplay = (message, expirationDate) => {
    return (
      !isEmpty(message) &&
      getDateWithoutTime(new Date()).getTime() <= getDateWithoutTime(expirationDate).getTime()
    );
  };

  // Get the commercial message for root
  useEffect(() => {
    if (!displayOnlyBurgerMenu && !accountMessage) {
      dispatch(getAccountMessage(rootAccountCode));
    }
  }, [accountMessage, dispatch, displayOnlyBurgerMenu, rootAccountCode]);

  // Get the commercial message for descendant MAs
  /*useEffect(() => {
    if (!displayOnlyBurgerMenu && isSubAccount && isMasterAccount) {
      dispatch(getAccountMessage(accountCodePath));
    }
  }, [accountCodePath, dispatch, displayOnlyBurgerMenu, isMasterAccount, isSubAccount]);*/

  // Get the commercial message for SAs
  /*useEffect(() => {
    if (!displayOnlyBurgerMenu && isSubAccount && !isMasterAccount && currentAccountDetails) {
      dispatch(getAccountMessage(currentAccountDetails.parentAccountCode));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    displayOnlyBurgerMenu,
    isSubAccount,
    currentAccountDetails,
    getAccountMessage,
    isMasterAccount,
    dispatch,
  ]);*/

  // Dismiss displayed commercial message
  const onDismissAccountMessage = () => {
    /*const code = !isSubAccount
      ? rootAccountCode
      : isMasterAccount
      ? accountCode
      : currentAccountDetails.parentAccountCode;*/

    dispatch(postAccountMessage(rootAccountCode));

    setAcctMsgDismissed(true);
  };

  const [displayCommercialMessage, setDisplayCommercialMessage] = useState(false);
  useEffect(() => {
    if (account_message_status === "success") {
      setDisplayCommercialMessage(
        !acctMsgDismissed &&
          isValidForDisplay(accountMessage.messageBody, accountMessage.messageExpirationDate)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account_message_status, acctMsgDismissed]);

  const WelcomeMessage = ({ name = null }) => {
    return (
      <Flex
        sx={{
          maxWidth: "layoutContentMaxWidth",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        display={["none", "flex", "flex"]}
        mt={["small", "small", "default"]}
        //mx="auto"
        px={["default", "default", "huge", "mobileModalExtraOffset"]}>
        {account_status === "loading" ? (
          <WelcomeSkeleton width="20rem" />
        ) : (
          <Heading
            sx={{
              fontSize: [8, 8, 11, 11],
              color: "primary",
            }}>
            {name === null
              ? intl.formatMessage({ id: "lbl.welcome" })
              : intl.formatMessage({ id: "lbl.welcome_user" }, { name: name })}
          </Heading>
        )}
      </Flex>
    );
  };

  const ServiceDropDown = () => {
    return (
      <Flex
        sx={{
          alignItems: "center",
        }}
        mt={["tiny", "small", "default"]}
        px={["default", "default", "huge", "mobileModalExtraOffset"]}>
        <Heading>
          <FormattedMessage id="lbl.line" />:
        </Heading>

        <PhoneDrop />
      </Flex>
    );
  };

  const SubHeader = () => {
    if (isError) return <></>;
    else {
      return (
        <Box
          mt={["4rem", "4rem", "8.2rem"]}
          mb={["small", "small", "default"]}
          sx={{ width: "100%" }}>
          <Flex sx={{ maxWidth: "headerContentMaxWidth" }} mx="auto">
            {navigationDisplay === "default" ? (
              <WelcomeMessage name={master && master.firstName} />
            ) : isSAUser ? (
              <WelcomeMessage name={account && account.firstName} />
            ) : (
              <ServiceDropDown />
            )}
          </Flex>
        </Box>
      );
    }
  };

  return (
    <Flex
      bg="contentBg"
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}>
      <Header />

      <SubHeader />

      <NavMenu
        accountCode={accountCode}
        disableNavMenuDefaultLocation={disableNavMenuDefaultLocation}
      />

      <Flex
        sx={{
          width: "100%",
          maxWidth: "headerContentMaxWidth",
          flexDirection: "column",
          //maxHeight: "10rem",
        }}
        marginLeft="auto"
        marginRight="auto"
        px={["default", "default", "huge", "mobileModalExtraOffset"]}
        py="large">
        {displayCommercialMessage && (
          <Box
            mb="default"
            sx={{
              backgroundImage: `url(${require(`../../resources/images/banner.png`)})`,
              backgroundSize: "100%",
            }}>
            <Flex sx={{ justifyContent: "flex-end" }}>
              <Text
                as="span"
                mx="default"
                mt="small"
                sx={{
                  color: "textLight",
                  float: "right",
                  fontSize: 8,
                  lineHeight: "solid",
                  fontWeight: "bold",
                  ":hover": {
                    cursor: "pointer",
                    opacity: "70%",
                  },
                }}
                onClick={onDismissAccountMessage}>
                &times;
              </Text>
            </Flex>
            <Heading
              mx="default"
              color="textLight"
              sx={{
                fontSize: 8,
                textAlign: "center",
              }}>
              <FormattedMessage id="lbl.important_message" />
            </Heading>
            <Text
              mx="default"
              mt="default"
              color="textLight"
              sx={{ fontSize: 4, textAlign: "center" }}>
              {accountMessage.messageBody}
            </Text>

            {config.troubleTicket && config.troubleTicket.service && (
              <Flex sx={{ justifyContent: "center" }} my="default">
                <Button
                  type="button"
                  sx={{
                    outline: "none",
                    px: "default",
                    border: "1px solid",
                    borderRadius: "default",
                    borderColor: "textLight",
                    cursor: "pointer",
                    fontSize: 4,
                    bg: "secondary",
                    "&:hover": {
                      color: "secondary",
                      bg: "windowBg",
                      borderColor: "inactive",
                    },
                  }}
                  onClick={() => {
                    setOpenTroubleTicketModal(true);
                  }}>
                  <FormattedMessage id="lbl.make_inquiry" />
                </Button>
                <OpenTroubleTicket
                  config={config.troubleTicket.service}
                  title={<FormattedMessage id="lbl.make_inquiry" />}
                  placeholderMessage={intl.formatMessage({
                    id: "lbl.trouble_ticket_inquiry_comments_placeholder",
                  })}
                  commercialMessage={accountMessage.messageBody}
                  isOpenModal={isOpenTroubleTicketModal}
                  setOpenModal={setOpenTroubleTicketModal}
                />
              </Flex>
            )}
          </Box>
        )}
        <Flex sx={{ flexDirection: "column" }}>{children}</Flex>
      </Flex>
      <Footer />

      {mobileTabSubMenu}
      {/* <MobileNavigationMenu menuItems={items} isLoading={!master} /> */}
    </Flex>
  );
};

export default Layout;
