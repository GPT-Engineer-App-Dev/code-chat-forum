import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormHelperText } from '@chakra-ui/react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle successful registration (redirect logic can be added here)
      console.log('Form submitted successfully');
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl id="username" isRequired isInvalid={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input name="username" value={formData.username} onChange={handleChange} />
          <FormHelperText>{errors.username}</FormHelperText>
        </FormControl>
        <FormControl id="email" isRequired isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          <FormHelperText>{errors.email}</FormHelperText>
        </FormControl>
        <FormControl id="password" isRequired isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} />
          <FormHelperText>{errors.password}</FormHelperText>
        </FormControl>
        <FormControl id="confirmPassword" isRequired isInvalid={!!errors.confirmPassword}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          <FormHelperText>{errors.confirmPassword}</FormHelperText>
        </FormControl>
        <Button type="submit" mt={4}>Register</Button>
      </form>
    </Box>
  );
};

export default RegisterForm;