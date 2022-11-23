/* eslint-disable unused-imports/no-unused-vars */
import styled from '@emotion/styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  handleInputChange?: React.ChangeEventHandler;
  showIcon?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  variant?: 'standard' | 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  placeholder?: string;
  state?: string;
  setState: React.Dispatch<React.SetStateAction<any>>;
}
const StyledInput = styled(TextField)`
  border-radius: 0px;
`;
export const CustomInput = ({
  label,
  type,
  className,
  variant,
  showIcon,
  setState,
  showPassword,
  setShowPassword,
}: InputProps) => {
  const [isPassword, setIsPassword] = React.useState<boolean>(false);
  const handleClickShowPassword = () => {
    if (setShowPassword) {
      setIsPassword(!isPassword);
      setShowPassword(!showPassword);
    }
  };
  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleInputChange = (value: string) => {
    setState(value);
  };
  return (
    <>
      <StyledInput
        label={label}
        type={isPassword ? 'text' : type}
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant={variant}
        onChange={(event) => handleInputChange(event.target.value)}
        InputProps={{
          endAdornment: showIcon && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        // value={state}
        autoComplete="off"
        className={className}
        size="medium"
        margin="normal"
        sx={{
          borderRadius: 0,
        }}
      />
      {/* <p>{'error'}</p> */}
    </>
  );
};
