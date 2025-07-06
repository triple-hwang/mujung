import { css } from '@emotion/react';
import { colors, layout, spacing, sizes } from './tokens';

// 페이지 공통 스타일
export const pageStyles = {
  container: css`
    height: calc(812px - 100px); /* 전체 프레임 높이 - 헤더 높이 */
    padding: 8px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    overflow: hidden;
    position: relative;
  `,
  
  buttonWrapper: css`
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 60px; /* 프레임 내부에서 낮게 */
    display: flex;
    justify-content: center;
  `,
};

// 섹션 내부 스타일
export const sectionStyles = {
  listWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 -4px;
  `,
};

// 폼 스타일
export const formStyles = {
  wrapper: css`
    width: 100%;
    padding: 14px;
    background: #EBEFFF;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  
  title: css`
    color: #000920;
    font-size: 20px;
    font-family: 'Freesentation';
    font-weight: 700;
    line-height: 1.2;
    margin: 0 10px;
  `,
  
  description: css`
    color: #575757;
    font-size: 16px;
    font-family: 'Freesentation';
    font-weight: 400;
    line-height: 1.2;
    margin: 0 10px 12px 10px;
  `,
  
  input: css`
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 8px 10px;
    background: white;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #575757;
    font-size: 14px;
    font-family: 'Freesentation';
    font-weight: 400;
    outline: none;

    &::placeholder {
      color: #B4B4B4;
    }
    
    &:focus {
      border-color: #6B7CE9;
    }
  `,
};

// 카드 스타일
export const cardStyles = {
  section: css`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 100%;
    text-align: left;
    transition: transform 0.15s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
    
    &:focus-visible {
      outline: 2px solid ${colors.primary};
      outline-offset: 2px;
      border-radius: 16px;
    }
  `,
  
  wrapper: css`
    padding: ${layout.padding.card};
    background: ${colors.primaryLight};
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${spacing.md};
  `,
  
  textWrapper: css`
    padding: ${layout.padding.cardText};
    display: flex;
    flex-direction: column;
    gap: ${spacing.xs};

    h3 {
      color: ${colors.text.primary};
      font-size: 20px;
      font-family: 'Freesentation';
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
    }

    p {
      color: ${colors.text.secondary};
      font-size: 16px;
      font-family: 'Freesentation';
      font-weight: 400;
      line-height: 1.4;
      margin: 0;
    }
  `,
  
  imageWrapper: css`
    width: ${sizes.cardImage.width};
    height: ${sizes.cardImage.height};
    background: ${colors.background.white};
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  
  image: css`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `,
};
