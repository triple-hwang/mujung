import { css } from '@emotion/react';
import type { ButtonHTMLAttributes } from 'react';
import { colors, typography, borderRadius, sizes } from '../styles/tokens';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;

const buttonStyle = css`
  width: ${sizes.button.small.width};
  height: ${sizes.button.small.height};
  padding: 0;
  background: ${colors.primary};
  border-radius: ${borderRadius.medium};
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${colors.text.white};
  font-size: ${typography.fontSize.medium};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
`;
