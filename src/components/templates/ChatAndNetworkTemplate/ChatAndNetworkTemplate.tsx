import { Box, Button, styled, TextField } from "@mui/material";
import UserList from "../../organisms/ChatAndNetwork/UserList";
import { SendAndArchiveTwoTone } from "@mui/icons-material";

export const LayoutWrapper = styled("div")({
  display: "flex",
  height: "100vh",
  maxWidth: "100%",
});

export const ListOfUserWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  padding: "10px",
});

export const ChatWrapper = styled("div")({
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  flex: '1'
});

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
        <Box
          sx={{
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            padding: "5px 10px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></div>
        </Box>
        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
              paddingBlock: "10px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            ></div>
          </div>
        </div>
        {/* submit form for sending file*/}
        <ChatBox
          render={() => (
            <Box
              sx={{
                display: "flex",
                maxWidth: '100%'
              }}
            >
              <TextField
                variant="outlined"
                focused
                sx={{
                  minWidth: "100%",
                }}
              />
              <Button variant="outlined" endIcon={<SendAndArchiveTwoTone />}>Send</Button>
            </Box>
          )}
        />
      </ChatWrapper>
    </LayoutWrapper>
  );
}

export default ChatAndNetworkTemplate;
