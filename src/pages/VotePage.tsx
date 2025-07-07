import { useEffect, useState } from 'react';
import { fetchSongs, submitVote } from '../lib/api';
import { Song } from '../types/song';
import SongItem from '../components/SongItem';
import Section from '../components/Section';
import Button from '../components/Button';
import { pageStyles, sectionStyles } from '../styles/utils';
import { useAuth } from '../store/useAuth';
import { useNavigate } from 'react-router-dom';

const VotePage = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const { email, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSongs().then(setSongs);
  }, []);

  const handleSubmit = async () => {
    console.log('📍handleSubmit 시작됨');
    console.log('selectedSong:', selectedSong);
    console.log('userId:', userId);

    if (!email) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!selectedSong) return;

    try {
      if (!selectedSong || !userId) {
        alert('선택된 곡이나 사용자 정보가 없습니다.');
        return;
      }
      console.log('🔥 submitVote 호출 직전', {selectedSong, userId});
      const res = await submitVote(selectedSong, userId);
      alert(res.data.message);
      navigate('/');
    } catch (err: any) {
      console.error('❌ 에러 발생', err);
    }
  }

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