import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';
import { colors, typography, borderRadius, sizes, animations } from '../styles/tokens';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'small',
  disabled,
  ...props 
}: ButtonProps) => {
  return (
    <button 
      css={[
        baseButtonStyle, 
        variantStyles[variant],
        sizeStyles[size],
        disabled && disabledStyle
      ]} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// Base Styles
const baseButtonStyle = css`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: ${typography.fontFamily.primary};
  cursor: pointer;
  transition: ${animations.transition.fast};
  
  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

// Variant Styles
const variantStyles = {
  primary: css`
    background: ${colors.primary};
    color: ${colors.text.white};
    border-radius: ${borderRadius.medium};
    
    &:hover:not(:disabled) {
      background: #5a6bd8;
    }
    
    &:active:not(:disabled) {
      background: #4a5bc8;
    }
  `,
  
  secondary: css`
    background: ${colors.background.white};
    color: ${colors.text.primary};
    border: 1px solid ${colors.border.radio};
    border-radius: ${borderRadius.medium};
    
    &:hover:not(:disabled) {
      background: ${colors.background.gray};
    }
  `,
};

// Size Styles
const sizeStyles = {
  small: css`
    width: ${sizes.button.small.width};
    height: ${sizes.button.small.height};
    padding: 0;
    font-size: ${typography.fontSize.medium};
    font-weight: ${typography.fontWeight.medium};
  `,
  
  medium: css`
    padding: 12px 24px;
    font-size: ${typography.fontSize.medium};
    font-weight: ${typography.fontWeight.medium};
  `,
};

// Disabled Style
const disabledStyle = css`
  opacity: 0.5;
  cursor: not-allowed;
`;
