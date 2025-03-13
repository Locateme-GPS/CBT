import React, { useState } from 'react';
import { 
    Card, 
    Typography, 
    FormGroup, 
    Button,
    Box,
    Container,
    TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './Register.css';

export default function Register() {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        // Username validation
        if (!formData.username) {
            formIsValid = false;
            errors['username'] = 'Username cannot be empty';
        }

        // Email validation
        if (!formData.email) {
            formIsValid = false;
            errors['email'] = 'Email cannot be empty';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors['email'] = 'Email is not valid';
        }

        // Password validation
        if (!formData.password) {
            formIsValid = false;
            errors['password'] = 'Password cannot be empty';
        } else if (formData.password.length < 6) {
            formIsValid = false;
            errors['password'] = 'Password must be at least 6 characters long';
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form is valid, send data to server:', formData);
            // Proceed with submitting the data to your server or API endpoint
        }
    };

    return (
        <Box className="register-container">
            <Container maxWidth="md">
                <Card className="styled-card">
                    <Typography className="register-title">
                        <b>Create Your Account</b>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Card className="styled-form-card">
                            <FormGroup>
                                <TextField
                                    className="styled-text-field"
                                    label="Username"
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.username}
                                    helperText={errors.username}
                                />
                                
                                <TextField
                                    className="styled-text-field"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                                
                                <TextField
                                    className="styled-text-field"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    fullWidth
                                    variant="outlined"
                                    error={!!errors.password}
                                    helperText={errors.password}
                                />
                            </FormGroup>
                        </Card>
                        <Button className="styled-button" type="submit" variant="contained" fullWidth>
                            Register
                        </Button>
                    </form>
                </Card>
            </Container>
        </Box>
    );
}