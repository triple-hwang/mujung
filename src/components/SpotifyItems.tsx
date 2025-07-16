import { css } from '@emotion/react';
import { CheckIcon } from '../assets';
import { colors, typography, spacing, sizes, borderRadius, shadows, layout, animations } from '../styles/tokens';

interface SongItemProps {
    title: string;
    songName: string;
    songArtist: string;
    linkId: string;
    spotifyUrl?: string;
    youtubeUrl?: string;
    showRadio?: boolean;
    selected?: boolean;
    onSelect?: () => void;
}

const SpotifyItems = ({
                      title,
                      songName,
                      songArtist,
                      showRadio = false,
                      selected = false,
                      onSelect,
                  }: SongItemProps) => {

    const handleClick = () => {
        const encodedTitle = encodeURIComponent(`${songName} ${songArtist}`);
        const url = `https://open.spotify.com/search/${encodedTitle}`;
        window.open(url, '_blank');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (showRadio && onSelect && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onSelect();
        }
    };

    return (
        <div
            css={[itemStyle, selected && selectedStyle, { position: 'relative' }]}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role={showRadio ? 'radio' : undefined}
            aria-checked={showRadio ? selected : undefined}
            tabIndex={showRadio ? 0 : undefined}
        >
            <div css={contentStyle}>
                <div css={leftContentStyle}>
                    {showRadio && (
                        <div css={radioContainerStyle}>
                            {selected ? (
                                <img src={CheckIcon} alt="선택됨" css={checkIconStyle} />
                            ) : (
                                <div css={radioButtonStyle} />
                            )}
                        </div>
                    )}
                    <span css={titleStyle}>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default SpotifyItems;

const itemStyle = css`
  width: 100%;
  padding: ${layout.padding.item};
  background:#FFFFFF;
  border-radius: ${borderRadius.small};
  cursor: pointer;
  transition: ${animations.transition.fast};

  &:hover {
    background: ${colors.background.gray};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

const selectedStyle = css`
  background: ${colors.background.gray};
  outline: ${shadows.outline};
  outline-offset: ${shadows.outlineOffset};
`;

const contentStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const leftContentStyle = css`
  display: flex;
  align-items: flex-end;
  gap: ${spacing.xl};
  flex: 1;
  min-width: 0;
`;

const radioContainerStyle = css`
  width: ${sizes.radio};
  height: ${sizes.radio};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const radioButtonStyle = css`
  width: ${sizes.radio};
  height: ${sizes.radio};
  border-radius: ${borderRadius.full};
  border: 1px solid ${colors.border.radio};
  background: ${colors.background.white};
  transition: ${animations.transition.fast};
`;

const checkIconStyle = css`
  width: ${sizes.radio};
  height: ${sizes.radio};
`;

const titleStyle = css`
  color: ${colors.text.secondary};
  font-size: ${typography.fontSize.small};
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  line-height: ${typography.lineHeight.tight};
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;