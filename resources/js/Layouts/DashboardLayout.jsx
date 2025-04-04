import React, { useState } from 'react';
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Avatar,
    Menu,
    MenuItem,
} from '@mui/material';
import {
    Menu as MenuIcon,
    ChevronRight as ChevronRightIcon,
    Dashboard,
    People,
    Inventory,
    Receipt,
    AccountBalance,
    Settings,
    Logout,
} from '@mui/icons-material';
import { Link } from '@inertiajs/react';

const drawerWidth = 240;

export default function DashboardLayout({ children }) {
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { text: 'داشبورد', icon: <Dashboard />, route: 'dashboard' },
        { text: 'اشخاص', icon: <People />, route: 'persons.index' },
        { text: 'محصولات', icon: <Inventory />, route: 'products.index' },
        { text: 'فاکتورها', icon: <Receipt />, route: 'invoices.index' },
        { text: 'حسابداری', icon: <AccountBalance />, route: 'accounting.index' },
        { text: 'تنظیمات', icon: <Settings />, route: 'settings.index' },
    ];

    return (
        <Box sx={{ display: 'flex', direction: 'rtl' }}>
            <AppBar position="fixed" sx={{ width: `calc(100% - ${open ? drawerWidth : 0}px)`, mr: open ? `${drawerWidth}px` : 0 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ ml: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                        سیستم حسابداری حسبینو
                    </Typography>
                    <IconButton onClick={handleMenuClick} sx={{ p: 0 }}>
                        <Avatar alt="Sara-vanaga" src="/images/avatar.png" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        sx={{ mt: '45px' }}
                    >
                        <MenuItem onClick={handleMenuClose}>پروفایل</MenuItem>
                        <MenuItem component={Link} href={route('logout')} method="post" as="button">
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            خروج
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <Toolbar />
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                component={Link}
                                href={route(item.route)}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: 8
                }}
            >
                {children}
            </Box>
        </Box>
    );
}