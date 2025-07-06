import { css } from '@emotion/react';
import { VoteImg, SubmitImg, LinkIcon } from '../assets';

const MainPage = () => {
  return (
    <div css={containerStyle}>
      {/* 현재 순위 섹션 */}
      <section css={rankingSection}>
        <h2>현재 순위</h2>
        <div css={rankingListWrapper}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} css={rankingItemWrapper}>
              <div css={rankingItem}>
                <div css={rankingItemContent}>
                  <span>루시 - 여름</span>
                  <button css={linkButton}>
                    <img src={LinkIcon} alt="링크" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 투표하기 섹션 */}
      <section css={cardSection}>
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
      </section>

      {/* 투표 등록 섹션 */}
      <section css={cardSection}>
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
      </section>
    </div>
  );
};

export default MainPage;

const containerStyle = css`
  padding: 8px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const rankingSection = css`
  padding: 20px;
  background: #ebefff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    color: #000920;
    font-size: 20px;
    font-family: 'Freesentation';
    font-weight: 700;
  }
`;

const rankingListWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const rankingItemWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const rankingItem = css`
  padding: 8px 10px;
  background: white;
  border-radius: 7px;
`;

const rankingItemContent = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #575757;
    font-size: 14px;
    font-family: 'Freesentation';
    font-weight: 400;
  }
`;

const linkButton = css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const cardSection = css`
  cursor: pointer;
`;

const cardWrapper = css`
  width: 100%;
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
`;

const cardImage = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
