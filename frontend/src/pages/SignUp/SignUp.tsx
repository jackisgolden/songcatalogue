import {
    Text,
    Stack,
    Input,
    Button,
    useToast,
    FormLabel,
    FormControl,
    Center
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link as RouterLink, useNavigate } from 'react-router-dom';
  
  type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  
  export const SignUp = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [formData, setFormData] = useState<FormData>({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  
    const validateForm = () => {
      const newErrors: { [key: string]: string } = {};
  
      if (!formData.username) {
        newErrors.username = 'Username is required';
      }
  
      if (!formData.email) {
        newErrors.email = 'Email is required';
      }
  
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
  
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const onSubmit = async () => {
      if (!validateForm()) {
        toast({
            title: 'Failure',
            description: 'invalid form entry',
            status: 'error',
            duration: 2500,
          });
        return;
      }
  
      setIsSignUpLoading(true);
      console.log("about to fetch");
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // If registration is successful, you can handle it accordingly.
          toast({
            title: 'Success',
            description: 'Registration successful!',
            status: 'success',
            duration: 2500,
          });
          navigate('/login'); // Redirect to login page after successful registration.
        } else {
            toast({
                title: 'Failure',
                description: 'Uhhhh',
                status: 'error',
                duration: 2500,
              });
          // Handle registration error messages here.
          console.log("failre", data.message);
          setErrors({ email: data.message }); // Assuming the API returns an error message for email validation.
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failure Request',
          status: 'error',
          duration: 2500,
        });
      } finally {
        setIsSignUpLoading(false);
      }
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <Center>
      <Stack
        w={['100%', '30em']}
        p={['1em']}
        display={'flex'}
        flexDir={'column'}
        spacing={'1em'}
      >
        <Text
          fontSize={['2em']}
          fontWeight={['bold']}
        >
          Sign Up
        </Text>
  
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <FormControl isInvalid={!!errors.username}>
            <FormLabel mt={'0.5em'} htmlFor='username'>Username</FormLabel>
            <Input
              placeholder="Enter your username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl isInvalid={!!errors.email}>
            <FormLabel mt={'0.5em'} htmlFor='email'>Email</FormLabel>
            <Input
              placeholder="Enter your email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl isInvalid={!!errors.password}>
            <FormLabel mt={'0.5em'} htmlFor='password'>Password</FormLabel>
            <Input
              placeholder="Enter your password"
              type='password'
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
  
          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel mt={'0.5em'} htmlFor='confirmPassword'>Confirm Password</FormLabel>
            <Input
              placeholder="Confirm your password"
              type='password'
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormControl>
  
          <Button
            type="submit"
            colorScheme={'blue'}
            isLoading={isSignUpLoading}
          >
            Sign Up
          </Button>
        </form>
  
        <Text textAlign={'center'}>
          Already have an account?{' '}
          <RouterLink to="/login">Login here</RouterLink>
        </Text>
      </Stack>
      </Center>
    );
  };
  