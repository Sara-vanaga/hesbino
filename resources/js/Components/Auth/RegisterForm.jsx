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
    Alert,
    Stepper,
    Step,
    StepLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from '@inertiajs/react';
import { LoadingButton } from '@mui/lab';

const steps = ['اطلاعات کاربری', 'اطلاعات شخصی', 'اطلاعات تکمیلی'];

export default function RegisterForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        company_name: '',
        phone: '',
        address: ''
    });

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <TextField
                            fullWidth
                            label="نام کاربری"
                            variant="outlined"
                            margin="normal"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            error={!!errors.name}
                            helperText={errors.name}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="ایمیل"
                            variant="outlined"
                            margin="normal"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
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
                            helperText={errors.password}
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
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="تکرار رمز عبور"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            margin="normal"
                            value={data.password_confirmation}
                            onChange={e => setData('password_confirmation', e.target.value)}
                            error={!!errors.password_confirmation}
                            helperText={errors.password_confirmation}
                            sx={{ mb: 2 }}
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <TextField
                            fullWidth
                            label="نام شرکت"
                            variant="outlined"
                            margin="normal"
                            value={data.company_name}
                            onChange={e => setData('company_name', e.target.value)}
                            error={!!errors.company_name}
                            helperText={errors.company_name}
                            sx={{ mb: 2 }}
                        />

                        <TextField
                            fullWidth
                            label="شماره تماس"
                            variant="outlined"
                            margin="normal"
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            sx={{ mb: 2 }}
                        />
                    </>
                );
            case 2:
                return (
                    <TextField
                        fullWidth
                        label="آدرس"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={data.address}
                        onChange={e => setData('address', e.target.value)}
                        error={!!errors.address}
                        helperText={errors.address}
                        sx={{ mb: 2 }}
                    />
                );
            default:
                return null;
        }
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
            <Card sx={{ maxWidth: 600, width: '100%', mx: 2 }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography 
                        variant="h4" 
                        component="h1" 
                        gutterBottom 
                        textAlign="center"
                        sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}
                    >
                        ثبت‌نام در سیستم
                    </Typography>

                    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <Box component="form" onSubmit={handleSubmit}>
                        {renderStepContent(activeStep)}

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                قبلی
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep === steps.length - 1 ? (
                                <LoadingButton
                                    variant="contained"
                                    type="submit"
                                    loading={processing}
                                >
                                    ثبت‌نام
                                </LoadingButton>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                >
                                    بعدی
                                </Button>
                            )}
                        </Box>
                    </Box>

                    <Button
                        fullWidth
                        variant="text"
                        href={route('login')}
                        sx={{ mt: 2, textAlign: 'center' }}
                    >
                        قبلاً ثبت‌نام کرده‌اید؟ وارد شوید
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}