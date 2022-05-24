import { Box, Flex, Text } from "theme-ui";
const PostView = ({ id, title, body, ...props }) => {
  return (
    <Flex
      id="post-container"
      sx={{
        flexDirection: "column",
        width: "20rem",
        height: "20rem",
        alignItems: "center",
        border: "1px solid #8E8D8D",
        borderRadius: "9px",
      }}
    >
      <Flex
        id="post-header-container"
        sx={{
          justifyContent: "space-between",
          width: "100%",
          my: "1rem",
          px: "1rem",
          alignItems: "center",
        }}
      >
        <Flex
          id="id-container"
          sx={{
            background: "#CBFFE5 0% 0% no-repeat padding-box",
            borderRadius: "10rem",
            padding: "0.5rem",
          }}
        >
          <Text>Post ID:{id}</Text>
        </Flex>
        <Flex id="View-details-container">
          <Text
            sx={{
              color: "#48C0B6",
            }}
          >
            View Details
          </Text>
        </Flex>
      </Flex>
      <Flex id="Title-container">
        <Text
          sx={{
            fontWeight: "Bold",
            textAlign: "center",
          }}
        >
          {" "}
          {title}
        </Text>
      </Flex>
      <Flex
        id="Body-Container"
        sx={{
          px: "3rem",
          py: "2rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Text> {body}</Text>
      </Flex>
    </Flex>
  );
};
export default PostView;
