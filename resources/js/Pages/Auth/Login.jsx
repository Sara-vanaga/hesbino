import React from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
} from '@mui/material';

export default function Login() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                direction: 'rtl'
            }}
        >
            <Card sx={{ maxWidth: 400, width: '100%', mx: 2 }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography 
                        variant="h4" 
                        component="h1" 
                        gutterBottom 
                        textAlign="center"
                        sx={{ mb: 4 }}
                    >
                        ورود به سیستم
                    </Typography>
                    
                    <TextField
                        fullWidth
                        label="ایمیل"
                        variant="outlined"
                        margin="normal"
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        fullWidth
                        label="رمز عبور"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        sx={{ mb: 3 }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{ mb: 2 }}
                    >
                        ورود
                    </Button>

                    <Button
                        fullWidth
                        variant="text"
                        href={route('register')}
                    >
                        ثبت‌نام نکرده‌اید؟ اینجا کلیک کنید
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}