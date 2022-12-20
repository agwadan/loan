import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import UserTable from "../components/UserTable";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import AllUsersTable from "../components/AllUsersTable";
const drawerWidth = 240;

function Admin(props) {
  const [users, setUsers] = useState([]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    axios
      .get("https://superloan.onrender.com/api/auth/admin/getallusers", {})
      .then(function (response) {
        console.log(response.data.data);
        setUsers(response.data.data);
      });
  });
  const drawer = (
    <div>
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography
            variant="h6"
            color="initial"
            style={{ textAlign: "center", padding: "16px" }}>
            Admin Dashboard
          </Typography>
        </Link>
      </div>
      <Divider />
      <List>
        <ul style={{ listStyle: "none" }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <li>All Users</li>{" "}
          </Link>
          {/*   <Link
            to="/Loan"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <li>Loan</li>{" "}
          </Link> */}

          {/* <Link
            to="/Loan_Histry"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <li>Loan History</li>{" "}
          </Link> */}

          {/*  <Link
            to="/Loan_Payment"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <li>Loan Payment</li>{" "}
          </Link> */}

          {/* <Link
            to="/Profile"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <li>Profile</li>{" "}
          </Link> */}

          <Link
            to="/SignOut"
            style={{ textDecoration: "none", color: "black", padding: "10px" }}>
            <li>Sign Out</li>{" "}
          </Link>
        </ul>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}>
            <Typography variant="h6" noWrap component="div">
              SuperLoan
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: "10px" }}>{user}</p>
              <Avatar alt="Remy Sharp" src="\Assets\man.jpg" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <AllUsersTable users={users} />
      </Box>
    </Box>
  );
}
Admin.propTypes = {
  window: PropTypes.func,
};

export default Admin;
