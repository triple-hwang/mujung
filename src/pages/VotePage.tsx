import { useEffect, useState } from 'react';
import { fetchSongs, submitVote } from '../lib/api';
import { Song } from '../types/song';
import SongItem from '../components/SongItem';
import Section from '../components/Section';
import Button from '../components/Button';
import { pageStyles, sectionStyles } from '../styles/utils';
import { useAuth } from '../store/useAuth';

const VotePage = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const { email } = useAuth();

  useEffect(() => {
    fetchSongs().then(setSongs);
  }, []);

  const handleSubmit = async () => {
    if (!email) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!selectedSong) return;

    try {
      const res = await submitVote(selectedSong, email);
      alert(res.message);
    } catch (err: any) {
      const status = err.response?.status;
      if (status === 400) alert('link_id 누락');
      else if (status === 403) alert('bssm 이메일만 허용됩니다.');
      else if (status === 404) alert('유저 정보가 없습니다.');
      else if (status === 409) alert('이미 투표했습니다.');
      else alert('서버 오류');
    }
  };

  return (
      <div css={pageStyles.container}>
        <Section title="투표하러 가기" noPadding>
          <div css={sectionStyles.listWrapper}>
            {songs.map((song) => (
                <SongItem
                    key={song.link_id}
                    title={`${song.song_name} - ${song.song_artist}`}
                    songName={song.song_name}
                    songArtist={song.song_artist}
                    linkId={song.link_id}
                    spotifyUrl={song.link}
                    youtubeUrl=""
                    showRadio
                    selected={selectedSong === song.link_id}
                    onSelect={() => setSelectedSong(song.link_id)}
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