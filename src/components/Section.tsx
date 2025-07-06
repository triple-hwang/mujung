import { css } from '@emotion/react';
import type { ReactNode } from 'react';
import { colors, typography, borderRadius, layout } from '../styles/tokens';

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

// Styles
const sectionStyle = css`
  padding: ${layout.padding.sectionFull};
  background: ${colors.background.section};
  border-radius: ${borderRadius.medium};
  display: flex;
  flex-direction: column;
  gap: ${layout.gap.medium};
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
  margin: 0;
`;
