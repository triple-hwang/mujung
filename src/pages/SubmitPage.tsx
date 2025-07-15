import { useState } from 'react';
import Button from '../components/Button';
import { pageStyles, formStyles } from '../styles/utils';
import { createSong } from '../lib/api';
import color from '../styles/color';
import { useNavigate } from 'react-router-dom';
import SpotifyRankList from "../components/SpotifyRankList.tsx";

const SubmitPage = () => {
  const [songUrl, setSongUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();정

  const isValidSpotifyUrl = (url: string) => {
    return url.includes('spotify.com');
  };

  const handleSubmit = async () => {
    if (!songUrl.trim()) return;

    if (!isValidSpotifyUrl(songUrl)) {
      setErrorMessage('스포티파이 링크만 입력 가능합니다.');
      return;
    }

    const email = localStorage.getItem('email');
    if (!email) {
      alert('로그인이 필요합니다.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const res = await createSong(songUrl, email);
      alert(res.message || '노래 등록 성공!');
      setSongUrl('');
      navigate('/');
    } catch (error: any) {
      const status = error.response?.status;
      if (status === 400) setErrorMessage('유효하지 않은 스포티파이 링크입니다.');
      else if (status === 403) setErrorMessage('bssm 이메일만 등록할 수 있습니다.');
      else if (status === 409) setErrorMessage('이미 존재하는 투표입니다.');
      else setErrorMessage('이미 존재하는 투표입니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSongUrl(e.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const isSubmitDisabled = !songUrl.trim() || isSubmitting;

  return (
      <div css={pageStyles.container}>
        <div css={formStyles.wrapper}>
          <h2 css={formStyles.title}>노래 투표 등록</h2>
          <p css={formStyles.description}>스포티파이 링크만 가능합니다</p>
          <input
              css={[
                formStyles.input,
                errorMessage && {
                  border: `2px solid ${color.red}`,
                  color: color.red,
                },
              ]}
              type="url"
              placeholder="링크 입력"
              value={songUrl}
              onChange={handleInputChange}
              disabled={isSubmitting}
          />
          {errorMessage && (
              <p css={{ color: color.red, fontSize: '14px', marginTop: '8px' }}>
                ! {errorMessage}
              </p>
          )}
        </div>
        <SpotifyRankList/>
        <div css={pageStyles.buttonWrapper}>
          <Button
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
          >
            {isSubmitting ? '등록 중...' : '등록'}
          </Button>
        </div>
      </div>
  );
};

export default SubmitPage;