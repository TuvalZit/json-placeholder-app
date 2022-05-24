import { Flex, Image, Text, Link } from "theme-ui";
const Footer = () => {
  return (
    <Flex
      sx={{
        width: "100%",
        bg: "#764abc ",
        height: "8.188rem",
        alignItems: "center",
        px: "7rem",
        justifyContent: "space-between",
      }}
    >
      <Flex id="Footer-Container">
        <Flex
          id="Left-Side-Footer-Container"
          sx={{
            flexDirection: "column",
            width: "194px",
          }}
        >
          <Flex
            id="Text-Container"
            sx={{
              flexDirection: "column",
            }}
          >
            <Text
              sx={{
                color: "#7392BB",
                font: "normal normal 600 30px/35px Raleway",
                letterSpacing: "0px",
                opacity: "1",
              }}
            >
              Give Us a Call
            </Text>
            <Text
              sx={{
                textAlign: "left",
                font: "normal normal 300 20px/24px Roboto",
                letterSpacing: "0px",
                color: "#48C0B6",
              }}
            >
              +123-4567-89
            </Text>
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: "column",
            width: "11.688rem",
            ml: "88px",
          }}
        >
          <Text
            sx={{
              color: "#7392BB",
              font: "normal normal 600 30px/35px Raleway",
              letterSpacing: "0px",
              opacity: "1",
            }}
          >
            Pay Us a Visit
          </Text>
          <Text
            sx={{
              textAlign: "left",
              font: "normal normal 300 20px/24px Roboto",
              letterSpacing: "0px",
              color: "#48C0B6",
            }}
          >
            www.jsonplaceholder.typicode.com
          </Text>
        </Flex>
      </Flex>

      <Link
        href="www.google.com"
        sx={{
          textDecoration: "underline",
          textAlign: "left",
          font: "normal normal 300 20px/24px Roboto",
          letterSpacing: "0px",
          color: "#48C0B6",
          opacity: 1,
          mt: "38px",
        }}
      >
        Terms Of Use
      </Link>
    </Flex>
  );
};

export default Footer;
