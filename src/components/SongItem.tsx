import { css } from '@emotion/react';
import { useState } from 'react';
import { LinkIcon, CheckIcon } from '../assets';
import { colors, typography, spacing, sizes, borderRadius, shadows, layout, animations } from '../styles/tokens';
import { useModalStore } from '../store/useModalStore';
import SongLinkModal from './SongLinkModal';
import { searchTrackLinks } from '../lib/api';

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

const SongItem = ({
                    title,
                    songName,
                    songArtist,
                    linkId,
                    showRadio = false,
                    selected = false,
                    onSelect,
                  }: SongItemProps) => {
  const { openId, setOpenId } = useModalStore();
  const isOpen = openId === linkId;
  const [links, setLinks] = useState<{ spotify_url: string; youtube_search_url: string } | null>(null);

  const handleClick = () => {
    if (showRadio && onSelect) {
      onSelect();
    }
  };

  const handleLinkClick = async (e) => {
    e.stopPropagation();
    try {
      const result = await searchTrackLinks(songName, songArtist);
      setLinks(result);
      setOpenId(linkId);
    } catch {
      alert('링크를 찾을 수 없습니다.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
          <button
              css={linkButtonStyle}
              type="button"
              aria-label="링크 열기"
              onClick={handleLinkClick}
          >
            <img src={LinkIcon} alt="링크" css={linkIconStyle} />
          </button>
        </div>

        {isOpen && links && (
            <SongLinkModal
                spotifyUrl={links.spotify_url}
                youtubeUrl={links.youtube_search_url}
                onClose={() => setOpenId(null)}
            />
        )}
      </div>
  );
};

export default SongItem;

const itemStyle = css`
  width: 100%;
  padding: ${layout.padding.item};
  background: ${colors.background.white};
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

const linkButtonStyle = css`
  width: ${sizes.icon.large};
  height: ${sizes.icon.large};
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  border-radius: ${borderRadius.small};
  transition: ${animations.transition.fast};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

const linkIconStyle = css`
  width: ${sizes.icon.medium};
  height: ${sizes.icon.medium};
`;
