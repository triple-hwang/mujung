import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import {
  colors,
  typography,
  spacing,
  borderRadius,
  layout,
} from '../styles/tokens';

interface SectionProps {
  title: string;
  children: ReactNode;
  noPadding?: boolean;
}

const Section = ({ title, children, noPadding = false }: SectionProps) => {
  return (
    <section css={[sectionStyle, noPadding && noPaddingStyle]}>
      <h2 css={titleStyle}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;

const sectionStyle = css`
  padding: ${spacing.xxl};
  background: ${colors.background.section};
  border-radius: ${borderRadius.medium};
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const noPaddingStyle = css`
  padding: ${layout.padding.section};
`;

const titleStyle = css`
  color: ${colors.text.primary};
  font-size: ${typography.fontSize.large};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.tight};
`;
