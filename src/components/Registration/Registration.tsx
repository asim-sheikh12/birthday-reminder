import { Box, Button, Container, CssBaseline } from '@mui/material';
import React from 'react';

import { CustomInput } from '../Input';

export const Registration = () => {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    dob: '',
    department: '',
    doj: '',
    branch: '',
  });
  return (
    <Box>
      <h2>Employee Registration</h2>
      <Box>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <form>
              <CustomInput
                name="name"
                label="Name"
                value={formValues.name}
                //   state={formValues}
                setState={setFormValues}
              />
              <CustomInput
                name="email"
                label="Email"
                value={formValues.email}
                //   state={formValues}
                setState={setFormValues}
              />

              <CustomInput
                name="department"
                label="Department"
                value={formValues.department}
                //   state={formValues}
                setState={setFormValues}
              />
              <div className="row">
                <div className="col">
                  <CustomInput
                    name="dob"
                    type="date"
                    label="Date Of Birth"
                    value={formValues.dob}
                    //   state={formValues}
                    setState={setFormValues}
                  />
                </div>
                <div className="col">
                  <CustomInput
                    name="doj"
                    type="date"
                    label="Date of Joining"
                    value={formValues.doj}
                    //   state={formValues}
                    setState={setFormValues}
                  />
                </div>
              </div>
              <CustomInput
                name="branch"
                label="Branch"
                value={formValues.branch}
                //   state={formValues}
                setState={setFormValues}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
