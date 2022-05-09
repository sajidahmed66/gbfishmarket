import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
function DrawerLists() {
  return (
    <List>
      <ListItemButton
        onClick={() => {
          console.log("inbox clicked");
        }}
      >
        <ListItemIcon>
          <DashboardCustomizeIcon
            sx={{
              color: "blue",
            }}
          />
        </ListItemIcon>
        <ListItemText primary={"Generals"} />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          console.log("inbox clicked");
        }}
      >
        <ListItemIcon>
          <InboxIcon
            sx={{
              color: "blue",
            }}
          />
        </ListItemIcon>
        <ListItemText primary={"Inbox"} />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          console.log("inbox clicked");
        }}
      >
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary={"Products"} />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          console.log("inbox clicked");
        }}
      >
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary={"Company"} />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          console.log("inbox clicked");
        }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={"Clients"} />
      </ListItemButton>
      <Divider />
      <ListItemButton
        onClick={() => {
          console.log("inbox clicked");
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={"Logout"} />
      </ListItemButton>
    </List>
  );
}

export default DrawerLists;
