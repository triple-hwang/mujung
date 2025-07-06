import { css } from '@emotion/react';
import { useState } from 'react';
import { Logo } from '../assets';
import Button from '../components/Button';
import { colors, typography, borderRadius, spacing, layout } from '../styles/tokens';

const SubmitPage = () => {
  const [songTitle, setSongTitle] = useState('');

  return (
    <div css={containerStyle}>
      {/* 로고 */}
      <img src={Logo} alt="무중" css={logoStyle} />

      {/* 입력 폼 */}
      <div css={formWrapper}>
        <h2 css={titleStyle}>노래 투표 등록</h2>
        <p css={descriptionStyle}>스포티파이 링크만 가능합니다</p>
        <input
          css={inputStyle}
          type="text"
          placeholder="링크 입력"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
      </div>

      {/* 등록 버튼 */}
      <div css={buttonWrapper}>
        <Button>등록</Button>
      </div>
    </div>
  );
};

export default SubmitPage;

const containerStyle = css`
  min-height: 100%;
  padding: 40px ${spacing.xxl} ${spacing.xxl};
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 21px; /* 로고와 폼 사이 간격 */
`;

const logoStyle = css`
  width: 120px;
  align-self: center;
`;

const formWrapper = css`
  width: 100%;
  padding: ${spacing.lg}; /* 내부 패딩 줄임 */
  background: ${colors.background.section};
  border-radius: ${borderRadius.medium};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const titleStyle = css`
  color: ${colors.text.primary};
  font-size: ${typography.fontSize.large};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.tight};
  margin: 0 ${spacing.md}; /* 좌우 10px 여백 */
`;

const descriptionStyle = css`
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize.medium};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  line-height: ${typography.lineHeight.tight};
  margin-bottom: 12px;
  margin-left: ${spacing.md};
  margin-right: ${spacing.md}; /* 좌우 10px 여백 */
`;

const inputStyle = css`
  width: calc(100% - ${spacing.xxl}); /* 좌우 10px 여백 */
  margin: 0 ${spacing.md};
  padding: ${spacing.sm} ${spacing.md};
  background: ${colors.background.white};
  border-radius: ${borderRadius.small};
  border: 1px solid ${colors.border.radio};
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize.small};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  outline: none;

  &::placeholder {
    color: #b4b4b4;
  }
`;

const buttonWrapper = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: ${layout.button.bottomOffset};
  display: flex;
  justify-content: center;
`;
