import { useEffect, useState } from 'react';
import { fetchSongs, submitVote } from '../lib/api';
import { Song } from '../types/song';
import SongItem from '../components/SongItem';
import Section from '../components/Section';
import Button from '../components/Button';
import { pageStyles, sectionStyles } from '../styles/utils';

const VotePage = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  useEffect(() => {
    fetchSongs().then(setSongs);
  }, []);

  const handleSubmit = async () => {
    if (selectedSong) {
      const res = await submitVote(selectedSong);
      console.log('투표 결과:', res);
      alert('투표가 완료되었습니다!');
    }
  };

  return (
      <div css={pageStyles.container}>
        <Section title="투표하러 가기" noPadding>
          <div css={sectionStyles.listWrapper}>
            {songs.map((song) => (
                <SongItem
                    key={song.id}
                    title={song.title}
                    spotifyUrl={song.spotify_url}
                    youtubeUrl={song.youtube_url}
                    linkId={song.id}
                    showRadio
                    selected={selectedSong === song.id}
                    onSelect={() => setSelectedSong(song.id)}
                />
            ))}
          </div>
        </Section>

        <div css={pageStyles.buttonWrapper}>
          <Button onClick={handleSubmit} disabled={!selectedSong}>
            제출
          </Button>
        </div>
      </div>
  );
};

export default VotePage;