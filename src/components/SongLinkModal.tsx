/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SpotifyIcon from '../assets/spotify.svg';
import YoutubeIcon from '../assets/youtube.svg';
import styled from "@emotion/styled";

interface SongLinkModalProps {
    spotifyUrl: string;
    youtubeUrl: string;
    onClose: () => void;
}

const SongLinkModal = ({ spotifyUrl, youtubeUrl, onClose }: SongLinkModalProps) => {
    return (
        <div css={overlayStyle} onClick={onClose}>
            <div css={modalStyle} onClick={(e) => e.stopPropagation()}>
                <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
                    <img src={SpotifyIcon} alt="Spotify로 이동" css={iconStyle} />
                </a>
                <Hr></Hr>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={YoutubeIcon} alt="YouTube로 이동" css={iconStyle} />
                </a>
            </div>
        </div>
    );
};

export default SongLinkModal;

const overlayStyle = css`
  position: absolute;
  inset: 0;
    top: calc(100% + 2px);
    right:0;
    background: transparent;
  z-index: 100;
`;

const modalStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -8px;
  margin-right: -8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: flex;
  gap: 8px;
`;

const iconStyle = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const Hr = styled.hr`
border: none;
border-top: 1px solid #666
    `;