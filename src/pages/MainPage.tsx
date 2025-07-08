import { useNavigate } from 'react-router-dom';
import { VoteImg, SubmitImg } from '../assets';
import Section from '../components/Section';
import SongItem from '../components/SongItem';
import { pageStyles, sectionStyles, cardStyles } from '../styles/utils';
import { useEffect, useState } from 'react';
import { fetchSongs } from '../lib/api';
import { Song } from '../types/song';
import { useAuth } from '../store/useAuth';

const MainPage = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState<Song[]>([]);
  /*const [message, setMessage] = useState('');*/

  const handleCardClick = (path: string) => {
    const email = localStorage.getItem('email');
    if (!email) {
      window.location.href =
          `${import.meta.env.VITE_BACKEND_URL}/oauth/google`; // ← 이 부분만 변경긔!
      return;
    }
    navigate(path);
  };

 /* const handleCheck = () => {
    const email = localStorage.getItem('email');
    if (email) {
      setMessage(`로그인됨: ${email}`);
    } else {
      setMessage('아직 로그인되지 않았어요.');
    }
  };
*/
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const email = params.get('email');
    const userId = params.get('user_id');

    if (token) {
      localStorage.setItem('access_token', token);
      if (email) localStorage.setItem('email', email);
      if (userId) localStorage.setItem('user_id', userId);
      window.history.replaceState({}, '', '/');
    }

    const savedEmail = localStorage.getItem('email');
    const savedUserId = localStorage.getItem('user_id');
    if (savedEmail && savedUserId) {
      useAuth.getState().setAuth(savedEmail, savedUserId);
    }

    fetchSongs().then(setSongs);
  }, []);

  const handleKeyDown = (path: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
      <div css={pageStyles.container}>
        {/* 현재 순위 섹션 */}
        <Section title="현재 순위" noPadding>
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
                />
            ))}
          </div>
        </Section>

        {/* 투표하기 섹션 */}
        <button
            type="button"
            css={cardStyles.section}
            onClick={() => handleCardClick('/votes')}
            onKeyDown={handleKeyDown('/votes')}
        >
          <div css={cardStyles.wrapper}>
            <div css={cardStyles.textWrapper}>
              <h3>투표하기</h3>
              <p>
                현재 투표를
                <br />
                확인하고 투표해보세요!
              </p>
            </div>
            <div css={cardStyles.imageWrapper}>
              <img src={VoteImg} alt="투표하기" css={cardStyles.image} />
            </div>
          </div>
        </button>

        {/* 투표 등록 섹션 */}
        <button
            type="button"
            css={cardStyles.section}
            onClick={() => handleCardClick('/submit')}
            onKeyDown={handleKeyDown('/submit')}
        >
          <div css={cardStyles.wrapper}>
            <div css={cardStyles.imageWrapper}>
              <img src={SubmitImg} alt="투표 등록" css={cardStyles.image} />
            </div>
            <div css={cardStyles.textWrapper}>
              <h3>투표 등록</h3>
              <p>
                원하는 노래로
                <br />
                투표를 만들어보세요!
              </p>
            </div>
          </div>
        </button>

        {/*<div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={handleCheck}>로그인 상태 확인</button>
          {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
        </div>*/}
      </div>
  );
};

export default MainPage;