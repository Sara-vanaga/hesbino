import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from '@inertiajs/react';
import { LoadingButton } from '@mui/lab';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

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
                    <Box component="form" onSubmit={handleSubmit}>
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            gutterBottom 
                            textAlign="center"
                            sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}
                        >
                            ورود به سیستم
                        </Typography>

                        {errors.email && (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {errors.email}
                            </Alert>
                        )}

                        <TextField
                            fullWidth
                            label="ایمیل"
                            variant="outlined"
                            margin="normal"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            error={!!errors.email}
                            autoComplete="email"
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="رمز عبور"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            margin="normal"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            error={!!errors.password}
                            autoComplete="current-password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mb: 3 }}
                        />

                        <LoadingButton
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            loading={processing}
                            sx={{
                                mb: 2,
                                height: 48,
                                bgcolor: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'primary.dark',
                                },
                            }}
                        >
                            ورود
                        </LoadingButton>

                        <Button
                            fullWidth
                            variant="text"
                            href={route('register')}
                            sx={{ textAlign: 'center' }}
                        >
                            ثبت‌نام نکرده‌اید؟ اینجا کلیک کنید
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}