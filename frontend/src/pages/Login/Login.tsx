import {
  Box,
  Link,
  Text,
  Stack,
  Input,
  Button,
  useToast,
  FormLabel,
  FormControl
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const { token, signIn } = useAuth();
  const toast = useToast();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const onSubmit = async () => {
    console.error('hello');
    setIsLoginLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        signIn(data.token);
        navigate('/');
      } else {
        setErrors({ email: 'Invalid email', password: 'Invalid password' });
        toast({
          title: 'Error',
          description: data.message,
          status: 'error',
          duration: 2500
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An internal error occurred',
        status: 'error',
        duration: 2500
      });
    } finally {
      setIsLoginLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Stack
      w={['100%', '30em']}
      p={['1em']}
      display={'flex'}
      flexDir={'column'}
      spacing={'1em'}
    >
      <Box
        position={'absolute'}
        right={'1em'}
        top={'1em'}
      >
        {/* Additional JSX if needed */}
      </Box>
      <Text
        fontSize={['2em']}
        fontWeight={['bold']}
      >
        Login
      </Text>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel mt={'0.5em'} htmlFor='email'>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* Display errors.email if it exists */}
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
          {/* Display errors.password if it exists */}
        </FormControl>

        <Button
          type="submit"
          colorScheme={'green'}
          isLoading={isLoginLoading}
        >
          Login
        </Button>
      </form>

      <Text textAlign={'center'}>
        Don't have an account? {' '}
        <Link as={RouterLink} to="/signUp">
          Create here
        </Link>
      </Text>
    </Stack>
  );
};
