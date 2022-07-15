import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { mainNavbarItems } from "./consts/navbarItems";
import { navbarStyles } from "./styles";
import { useParams, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem key={item.id} button onClick={() => navigate(item.route)} sx={{'& .MuiListItem-root': {color: 'red'}}}>
            <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} sx={navbarStyles.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;
