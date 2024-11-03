import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import { RiMailFill, RiLockFill } from '@remixicon/react';
import { Link } from 'react-router-dom';
import axios from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

type FormValues = {
  email: string;
  password: string;
};

interface ErrorResponse {
  message: string;
}

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async data => {
    console.log(data);
    try {
      const res = await axios.post('/user/login', data);
      console.log(res.data);
      navigate('/', { state: { user: res.data.data } });
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "An unexpected error occurred";

      alert(errorMessage);
    }
  };

  return (
    <Box className='flex flex-col items-center' component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <h2 className='text-slate-800 font-semibold text-2xl mb-2'>Welcome back</h2>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: 'Email is required', pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid email' } }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            variant="outlined"
            required={true}
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <RiMailFill size={20} />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: 'Password is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            variant="outlined"
            required={true}
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <RiLockFill size={20} />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
      <Button
        size='large'
        type="submit" 
        variant="contained" 
        color="primary"
        fullWidth
      >
        Login
      </Button>
      <p className='text-slate-800'>Don't have an account? 
        <Link to='/signup'>
          <span className='font-medium text-primary'> Register</span>
        </Link>
      </p>
    </Box>
  );
};

export default Login;
