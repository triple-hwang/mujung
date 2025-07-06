import { css } from '@emotion/react';
import { useState } from 'react';
import { Logo } from '../assets';
import Section from '../components/Section';
import SongItem from '../components/SongItem';
import Button from '../components/Button';
import { spacing, layout } from '../styles/tokens';

const VotePage = () => {
  const [selectedSong, setSelectedSong] = useState<number | null>(null);

  const songs = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    title: '루시 - 여름',
  }));

  return (
    <div css={containerStyle}>
      {/* 로고 */}
      <img src={Logo} alt="무중" css={logoStyle} />

      {/* 투표 목록 섹션 */}
      <Section title="투표하러 가기" noPadding>
        <div css={listWrapper}>
          {songs.map((song) => (
            <SongItem
              key={song.id}
              title={song.title}
              showRadio
              selected={selectedSong === song.id}
              onSelect={() => setSelectedSong(song.id)}
            />
          ))}
        </div>
      </Section>

      {/* 제출 버튼 */}
      <div css={buttonWrapper}>
        <Button>제출</Button>
      </div>
    </div>
  );
};

export default VotePage;

const containerStyle = css`
  min-height: 100%;
  padding: 40px ${spacing.xxl} ${spacing.xxl};
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 21px; /* 로고와 섹션 사이 간격 */
`;

const logoStyle = css`
  width: 120px;
  align-self: center;
`;

const listWrapper = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  margin: 0 -4px; /* 14px - 4px = 10px 여백 */
`;

const buttonWrapper = css`
  position: fixed;
  left: 0;
  right: 0;
  bottom: ${layout.button.bottomOffset};
  display: flex;
  justify-content: center;
`;
