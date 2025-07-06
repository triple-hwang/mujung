import { useNavigate } from 'react-router-dom';
import { VoteImg, SubmitImg } from '../assets';
import Section from '../components/Section';
import SongItem from '../components/SongItem';
import { pageStyles, sectionStyles, cardStyles } from '../styles/utils';

const MainPage = () => {
  const navigate = useNavigate();

  const mockSongs = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    title: '루시 - 여름',
  }));

  const handleCardClick = (path: string) => {
    navigate(path);
  };

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
          {mockSongs.map((song) => (
            <SongItem key={song.id} title={song.title} />
          ))}
        </div>
      </Section>

      {/* 투표하기 섹션 */}
      <button
        type="button"
        css={cardStyles.section}
        onClick={() => handleCardClick('/vote')}
        onKeyDown={handleKeyDown('/vote')}
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
    </div>
  );
};

export default MainPage;
