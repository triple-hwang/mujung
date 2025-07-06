import { css } from '@emotion/react';
import { LinkIcon, CheckIcon } from '../assets';
import { colors, typography, spacing, sizes, borderRadius, shadows, layout } from '../styles/tokens';

interface SongItemProps {
  title: string;
  showRadio?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const SongItem = ({
  title,
  showRadio = false,
  selected = false,
  onSelect,
}: SongItemProps) => {
  return (
    <div
      css={[item, selected && selectedItemStyle]}
      onClick={showRadio ? onSelect : undefined}
    >
      <div css={itemContent}>
        <div css={leftContent}>
          {showRadio && (
            <div css={radioContainer}>
              {selected ? (
                <img src={CheckIcon} alt="체크" css={checkIcon} />
              ) : (
                <div css={radioButton} />
              )}
            </div>
          )}
          <span css={songTitle}>{title}</span>
        </div>
        <button css={linkButton}>
          <img src={LinkIcon} alt="링크" css={linkIconStyle} />
        </button>
      </div>
    </div>
  );
};

export default SongItem;

const item = css`
  width: 100%;
  padding: ${spacing.sm} ${spacing.md};
  background: ${colors.background.white};
  border-radius: ${borderRadius.small};
  cursor: pointer;
`;

const selectedItemStyle = css`
  background: ${colors.background.gray};
  outline: ${shadows.outline};
  outline-offset: ${shadows.outlineOffset};
`;

const itemContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const leftContent = css`
  display: flex;
  align-items: flex-end;
  gap: ${spacing.xl};
`;

const radioContainer = css`
  width: ${sizes.radio};
  height: ${sizes.radio};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const radioButton = css`
  width: ${sizes.radio};
  height: ${sizes.radio};
  border-radius: ${borderRadius.full};
  border: 1px solid ${colors.border.radio};
  background: ${colors.background.white};
`;

const checkIcon = css`
  width: ${sizes.radio};
  height: ${sizes.radio};
`;

const songTitle = css`
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize.small};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  word-wrap: break-word;
`;

const linkButton = css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
`;

const linkIconStyle = css`
  width: 20px;
  height: 20px;
`;
