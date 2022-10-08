import { Button, Typography } from '@mui/material';
import React, { ElementType } from 'react';

type RoundedButtonProps = {
  icon?: ElementType,
  label?: string,
  onClick?: (e: React.FormEvent) => void,
  size?: "small" | "medium" | "large",
  backgroundColour?: string,
  style?: any,
  endIcon?: boolean,
  sx?: any,
  variant?: string,
  color?: "inherit" | "primary" | "secondary",
  fullWidth?: boolean,
  disabled?: boolean,
  iconColour?: string,
}

const RoundedButton = ({ icon: Icon, label, onClick, size, style, endIcon, sx, color, fullWidth, disabled, iconColour, ...rest }: RoundedButtonProps) => {
  const sizeStyles = {
    small: { borderRadius: 12, padding: 8 },
    medium: { borderRadius: 16, padding: 10 },
    large: { borderRadius: 20, padding: 12 },
  }

  return (
    <Button
      fullWidth={fullWidth}
      disabled={disabled}
      color={color ?? 'primary'}
      size={size || 'small'}
      type={'submit'}
      //@ts-ignore
      variant={label ? 'contained' : 'text'}
      sx={{ verticalAlign: 'center', ...sx }}
      style={{
        ...size ? sizeStyles[size] : sizeStyles['small'],
        ...style || {}
      }}
      onClick={onClick}
      {...rest}
    >
      {
        Icon && !endIcon && <Icon sx={ iconColour ? {color: iconColour} : {} } />
      }
      {
        label && <Typography sx={Icon ? { marginLeft: 1, marginRight: 1 } : {}}>{label}</Typography>
      }
      {
        Icon && endIcon && <Icon sx={ iconColour ? {color: iconColour} : {} }/>
      }
    </Button>
  )
}

export default RoundedButton;
