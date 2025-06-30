/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import YoutubeLogo from "../assets/icons/YoutubeLogo.tsx";
import SpotifyLogo from "../assets/icons/SpotifyLogo.tsx";
interface Props {
    onClose: () => void;
    onSelect: (platform: 'spotify' | 'youtube') => void;
}

export default function SelectPlatformModal({ onClose, onSelect }: Props) {
    return (
        <div css={backdropStyle} onClick={onClose}>
            <div css={modalStyle} onClick={(e) => e.stopPropagation()}>
                <div css={pointerStyle}></div>
                <div css={contentStyle}>
                    <button onClick={() => onSelect('spotify')} css={btnStyle}>
                        <YoutubeLogo />
                    </button>
                    <div css={dividerStyle}/>
                    <button onClick={() => onSelect('youtube')} css={btnStyle}>
                        <SpotifyLogo />
                    </button>
                </div>
            </div>
        </div>
    );
}


const backdropStyle = css`
  position: fixed;
  inset: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalStyle = css`
  position: relative;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
`;

const pointerStyle = css`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid white;
`;

const contentStyle = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const btnStyle = css`
  background: none;
  border: none;
  cursor: pointer;
`;

const dividerStyle = css`
  width: 1px;
  height: 28px;
  background-color: #e0e0e0;
`;