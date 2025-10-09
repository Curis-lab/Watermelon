import { Box, Button, styled, TextField } from "@mui/material";
import UserList from "../../organisms/ChatAndNetwork/UserList";
import { SendAndArchiveTwoTone } from "@mui/icons-material";

export const LayoutWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const ListOfUserWrapper = styled("div")({});

export const ChatWrapper = styled("div")({});

function ChatBox({ render }) {
  return render();
}
function ChatAndNetworkTemplate() {
  return (
    <LayoutWrapper>
      <ListOfUserWrapper>
        <UserList />
      </ListOfUserWrapper>
      <ChatWrapper>
        {/* submit form for sending file*/}
        <ChatBox
          render={() => (
            <Box>
              <TextField variant="outlined" focused />
              <Button
                sx={{}}
                variant="outlined"
                endIcon={<SendAndArchiveTwoTone />}
              >
                Send
              </Button>
            </Box>
          )}
        />
      </ChatWrapper>
    </LayoutWrapper>
  );
}

export default ChatAndNetworkTemplate;
