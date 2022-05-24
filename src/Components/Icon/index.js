import React from "react";
import { IconButton, useThemeUI } from "theme-ui";
import ToDo from "./ToDo";
import MyInvoices from "./MyInvoices";
import Posts from "./Posts";
import Home from "./Home";
import Logo from "./EastLinkLogo";
import Arrow from "./Arrow";
import Search from "./Search";
import ReduxIcon from "./ReduxIcon";
import Plus from "./Plus";
import RoundCheckbox from "./RoundCheckbox";
const BaseIcon = ({ name, ...props }) => {
  const { theme } = useThemeUI();

  switch (name) {
    case "arrow":
      return <Arrow stroke={theme.colors.login} {...props} />;
    case "home":
      return <Home color={theme.colors.primary} {...props} />;
    case "logo":
      return <Logo stroke={theme.colors.login} {...props} />;

    case "myInvoices":
      return <MyInvoices color={theme.colors.primary} {...props} />;
    case "plus":
      return <Plus color="#764abc" />;
    case "Posts":
      return <Posts color={theme.colors.primary} {...props} />;
    case "ReduxIcon":
      return <ReduxIcon color="#764ABC" {...props} />;
    case "round-checkbox":
      return (
        <RoundCheckbox color="svgStrokePrimary" size="iconMedium" {...props} />
      );
    case "search":
      return <Search {...props} />;
    case "ToDo":
      return <ToDo color={theme.colors.primary} {...props} />;

    default:
      return null;
  }
};

// const SelfcareIcon = styled(BaseIcon)(space, layout);
const SelfcareIcon = ({ name, ...props }) => {
  return (
    <IconButton
      disabled={props.disabled}
      onClick={props.onClick}
      sx={{ ...props.sx }}
    >
      <BaseIcon name={name} {...props} />
    </IconButton>
  );
};
export { BaseIcon, SelfcareIcon };
