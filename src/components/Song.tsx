/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTopCandidates } from '../hooks/useTopCandidates';

const Song = () => {
    const candidates = useTopCandidates();

    return (
        <div css={listStyle}>
            {candidates.map((c: any, idx: number) => (
                <div key={c.link_id} css={itemStyle}>
                    <span css={rankStyle}>{idx + 1}.</span>
                    <span css={textStyle}>{c.song_name} - {c.song_artist}</span>
                </div>
            ))}
        </div>
    );
};
export default Song;

const listStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`;

const itemStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8f9fb;
  border-radius: 10px;
  padding: 12px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

const rankStyle = css`
  font-weight: bold;
  font-size: 16px;
  color: #6171ff;
`;

const textStyle = css`
  font-size: 15px;
  color: #333;
`;