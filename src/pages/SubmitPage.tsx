import { useState } from 'react';
import Button from '../components/Button';
import { pageStyles, formStyles } from '../styles/utils';

const SubmitPage = () => {
  const [songUrl, setSongUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidSpotifyUrl = (url: string) => {
    return url.includes('spotify.com') || url.includes('open.spotify.com');
  };

  const handleSubmit = async () => {
    if (!songUrl.trim()) return;
    
    if (!isValidSpotifyUrl(songUrl)) {
      alert('스포티파이 링크만 입력 가능합니다.');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Submitting song URL:', songUrl);
      // TODO: 노래 등록 로직
      setSongUrl('');
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSongUrl(e.target.value);
  };

  const isSubmitDisabled = !songUrl.trim() || isSubmitting;

  return (
    <div css={pageStyles.container}>
      {/* 입력 폼 */}
      <div css={formStyles.wrapper}>
        <h2 css={formStyles.title}>노래 투표 등록</h2>
        <p css={formStyles.description}>스포티파이 링크만 가능합니다</p>
        <input
          css={formStyles.input}
          type="url"
          placeholder="링크 입력"
          value={songUrl}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
      </div>

      {/* 등록 버튼 */}
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
