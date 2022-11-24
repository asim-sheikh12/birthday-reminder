import '../../App.css';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import * as React from 'react';

import Logo from '../../assets/images/Logo.svg';
import BgVideo from '../../assets/videos/banner.mp4';
import { CustomInput } from '../../components/Input/Input';

export const Login = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      email,
      password,
    });
  };

  return (
    <>
      <div className="mainDiv">
        <video className="videoTag" autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </video>
        <CssBaseline />
        <div className="d-flex align-items-center flex-column loginCard">
          <img src={Logo} alt="Logo" />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: 500 }}
          >
            <CustomInput
              label="Email Address"
              type={'text'}
              state={email}
              setState={setEmail}
            />
            <CustomInput
              label="Password"
              type={'password'}
              state={password}
              setState={setPassword}
            />
            <Grid container>
              <Grid item xs>
                <div className="d-flex justify-content-end mt-2">
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </div>
              </Grid>
            </Grid>
            <div className="w-100 d-flex justify-content-center">
              <button type="button" className="btn btn mt-3">
                Sign In
              </button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};
