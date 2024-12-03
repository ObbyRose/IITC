import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Add-Pokemon", "Custom-Pokemons"];

function DrawerAppBar(props) {
    const { window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", backgroundColor: "rgb(42,42,42)", height: "100%" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src="../../src/assets/pngegg.png" alt="Logo" srcSet="" style={{ width: "15rem" }} />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link key={item} to={`/${item.toLowerCase()}`}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: "center", color: "white" }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component="nav" sx={{ backgroundColor: "rgb(39, 39, 39)" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        <Link to={"/home"}><img src="../../src/assets/pngegg.png" alt="Logo" srcSet="" style={{ width: "15rem" }} /> </Link> 
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Link key={item} to={`/${item.toLowerCase()}`}>
                                <Button sx={{ color: "#fff" }}>
                                    {item}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
