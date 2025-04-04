import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import {
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    Box,
    IconButton,
} from '@mui/material';
import {
    People,
    Inventory,
    AccountBalance,
    Receipt,
} from '@mui/icons-material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

// داده‌های نمونه برای نمودارها
const salesData = [
    { name: 'فروردین', فروش: 4000, سود: 2400 },
    { name: 'اردیبهشت', فروش: 3000, سود: 1398 },
    { name: 'خرداد', فروش: 2000, سود: 9800 },
    { name: 'تیر', فروش: 2780, سود: 3908 },
    { name: 'مرداد', فروش: 1890, سود: 4800 },
    { name: 'شهریور', فروش: 2390, سود: 3800 },
];

const StatCard = ({ title, value, icon, color }) => (
    <Card sx={{ height: '100%', bgcolor: `${color}.light` }}>
        <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h4" component="div" color={`${color}.dark`}>
                        {value}
                    </Typography>
                </Box>
                <IconButton sx={{ bgcolor: `${color}.main`, color: 'white', '&:hover': { bgcolor: `${color}.dark` } }}>
                    {icon}
                </IconButton>
            </Box>
        </CardContent>
    </Card>
);

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                    <StatCard
                        title="تعداد مشتریان"
                        value="1,254"
                        icon={<People />}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <StatCard
                        title="تعداد محصولات"
                        value="523"
                        icon={<Inventory />}
                        color="secondary"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <StatCard
                        title="فاکتورهای امروز"
                        value="48"
                        icon={<Receipt />}
                        color="success"
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <StatCard
                        title="گردش مالی"
                        value="12,543,000"
                        icon={<AccountBalance />}
                        color="warning"
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 3, height: '400px' }}>
                        <Typography variant="h6" gutterBottom>
                            آمار فروش و سود
                        </Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="فروش" fill="#1976d2" />
                                <Bar dataKey="سود" fill="#2e7d32" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 3, height: '400px' }}>
                        <Typography variant="h6" gutterBottom>
                            روند درآمد
                        </Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <LineChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="سود" stroke="#1976d2" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </DashboardLayout>
    );
}