import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { VoteImg, SubmitImg, Logo } from '../assets';
import Section from '../components/Section';
import SongItem from '../components/SongItem';

const MainPage = () => {
  const navigate = useNavigate();

  const handleKeyDown = (path: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <div css={containerStyle}>
      {/* 로고 */}
      <img src={Logo} alt="뮤중" css={logoStyle} />

      {/* 현재 순위 섹션 */}
      <Section title="현재 순위" noPadding>
        <div css={listWrapper}>
          {/* biome-ignore lint/suspicious/noArrayIndexKey: 임시 데이터 */}
          {Array.from({ length: 5 }).map((_, index) => (
            <SongItem key={index} title="루시 - 여름" />
          ))}
        </div>
      </Section>

      {/* 투표하기 섹션 */}
      <button
        type="button"
        css={cardSection}
        onClick={() => navigate('/vote')}
        onKeyDown={handleKeyDown('/vote')}
      >
        <div css={cardWrapper}>
          <div css={textWrapper}>
            <h3>투표하기</h3>
            <p>
              현재 투표를
              <br />
              확인하고 투표해보세요!
            </p>
          </div>
          <div css={imageWrapper}>
            <img src={VoteImg} alt="투표하기" css={cardImage} />
          </div>
        </div>
      </button>

      {/* 투표 등록 섹션 */}
      <button
        type="button"
        css={cardSection}
        onClick={() => navigate('/submit')}
        onKeyDown={handleKeyDown('/submit')}
      >
        <div css={cardWrapper}>
          <div css={imageWrapper}>
            <img src={SubmitImg} alt="투표 등록" css={cardImage} />
          </div>
          <div css={textWrapper}>
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

const containerStyle = css`
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const logoStyle = css`
  width: 120px;
  margin-bottom: 21px;
  align-self: center;
`;

const listWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 -4px; /* 14px - 4px = 10px 여백 */
`;

const cardSection = css`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  text-align: left;
`;

const cardWrapper = css`
  padding: 20px;
  background: #ebefff;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
`;

const textWrapper = css`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    color: #000920;
    font-size: 20px;
    font-family: 'Freesentation';
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    color: #575757;
    font-size: 16px;
    font-family: 'Freesentation';
    font-weight: 400;
    line-height: 1.4;
  }
`;

const imageWrapper = css`
  width: 100px;
  height: 108px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const cardImage = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
