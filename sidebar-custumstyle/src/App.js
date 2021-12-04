import "./styles.css";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
const Drawer = styled.div`
  border: 1px solid grey;
  width: 300px;
`;
const DrawerItem = styled.div`
  text-align: left;
  width: 200px;
  margin: 10px;
  padding: 10px;
`;

export default function App() {
  return (
    <div className="App">
      <Drawer>
        <DrawerItem>
          <MoveToInboxIcon style={{ marginRight: "30px" }} />
          Inbox
        </DrawerItem>
        <DrawerItem>
          <EmailIcon style={{ marginRight: "30px" }} />
          Starred
        </DrawerItem>
        <DrawerItem>
          <MoveToInboxIcon style={{ marginRight: "30px" }} />
          Send email
        </DrawerItem>
        <DrawerItem>
          <EmailIcon style={{ marginRight: "30px" }} /> Drafts
        </DrawerItem>
        <DrawerItem>
          <MoveToInboxIcon style={{ marginRight: "30px" }} />
          All mail
        </DrawerItem>
        <DrawerItem>
          <EmailIcon style={{ marginRight: "30px" }} />
          Trash
        </DrawerItem>
      </Drawer>
    </div>
  );
}
