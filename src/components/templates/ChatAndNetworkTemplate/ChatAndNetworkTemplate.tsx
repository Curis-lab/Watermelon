import {
  Avatar,
  Box,
  Button,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import UserList from "../../organisms/ChatAndNetwork/UserList";
import { SendAndArchiveTwoTone } from "@mui/icons-material";

export const LayoutWrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down('md')]:{
    padding:'10px'  
  },
  minHeight: "90vh",
}));

export const ListOfUserWrapper = styled('div')(({ theme }) => ({
  minWidth: "16rem",
  [theme.breakpoints.down("md")]: {
    height: "3rem",
  },
}));

export const ChatWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "100%",
  [theme.breakpoints.down("md")]: {
    height: "53rem",
  },
}));

function ChatBox({ render }) {
  return render();
}

const MessageDisplay = () => (
  <Box
    sx={{
      display: "flex",
      gap: "10px",
      marginBlock: '1rem'
    }}
  >
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5NWATYB-uSmqEX3f5rhBLHfYU3xrg1DPhjzwIw0fSzQ2jzWo95WgQ6cVQQuIHPAiydI&usqp=CAU" />
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Jhon
        </Typography>
        <Typography variant="caption"> — 5/14/25, 2:10 PM</Typography>
      </Box>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        animi praesentium necessitatibus sunt quaerat nobis ad rem similique
        quasi eaque sequi sint voluptatibus obcaecati, delectus iure in odit!
        Nemo, voluptate.
      </Typography>
    </Box>
  </Box>
);
function ChatAndNetworkTemplate() {
  return (
    <LayoutWrapper>
      <ListOfUserWrapper>
        <UserList />
      </ListOfUserWrapper>
      <ChatWrapper>
        <Box sx={{ 
          height: "100%", 
          width: "100%", 
          marginInline: '5px',
          marginBlock: '5px',
          maxHeight: "calc(100vh - 150px)",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px"
          }
        }}>
          {Array.from({length: 99}).map((_, idx)=><MessageDisplay  key={idx}/>)}
        </Box>
        <ChatBox
          render={() => (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                minWidth: "100%",
                display: "flex",
                gap:'10px'
              }}
            >
              <TextField
                sx={{
                  flex: 1,
                }}
                variant="outlined"
                focused
              />
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
