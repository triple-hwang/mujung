import { useState } from 'react';
import Section from '../components/Section';
import SongItem from '../components/SongItem';
import Button from '../components/Button';
import { pageStyles, sectionStyles } from '../styles/utils';

const VotePage = () => {
  const [selectedSong, setSelectedSong] = useState<number | null>(null);

  const songs = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    title: '루시 - 여름',
  }));

  const handleSongSelect = (songId: number) => {
    setSelectedSong(songId);
  };

  const handleSubmit = () => {
    if (selectedSong !== null) {
      console.log('Selected song:', songs[selectedSong]);
      // TODO: 투표 제출 로직
    }
  };

  return (
    <div css={pageStyles.container}>
      {/* 투표 목록 섹션 */}
      <Section title="투표하러 가기" noPadding>
        <div css={sectionStyles.listWrapper}>
          {songs.map((song) => (
            <SongItem
              key={song.id}
              title={song.title}
              showRadio
              selected={selectedSong === song.id}
              onSelect={() => handleSongSelect(song.id)}
            />
          ))}
        </div>
      </Section>

      {/* 제출 버튼 */}
      <div css={pageStyles.buttonWrapper}>
        <Button onClick={handleSubmit} disabled={selectedSong === null}>
          제출
        </Button>
      </div>
    </div>
  );
};

export default VotePage;
