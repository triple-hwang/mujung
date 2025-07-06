// 색상 토큰
export const colors = {
  // Primary Colors
  primary: '#6B7CE9',
  primaryLight: '#EBEFFF',
  
  // Background Colors
  background: {
    white: '#FFFFFF',
    gray: '#F9F9F9',
    section: '#EBEFFF',
  },
  
  // Text Colors
  text: {
    primary: '#000920',
    secondary: '#575757',
    white: '#FFFFFF',
  },
  
  // Border Colors
  border: {
    light: 'rgba(0, 0, 0, 0.08)',
    radio: 'rgba(0, 0, 0, 0.2)',
  },
} as const;

// 타이포그래피 토큰
export const typography = {
  fontFamily: {
    primary: 'Freesentation',
  },
  
  fontSize: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
  },
} as const;

// 간격 토큰
export const spacing = {
  xs: '2px',
  sm: '8px',
  md: '10px',
  lg: '14px',
  xl: '16px',
  xxl: '20px',
  xxxl: '32px',
} as const;

// 크기 토큰
export const sizes = {
  radio: '16px',
  icon: {
    small: '16px',
    medium: '20px',
    large: '24px',
    xlarge: '32px',
  },
  button: {
    small: {
      width: '90px',
      height: '40px',
    },
  },
} as const;

// 반지름 토큰
export const borderRadius = {
  small: '7px',
  medium: '8px',
  large: '12px',
  xlarge: '16px',
  full: '10000px', // 완전한 원형
} as const;

// 그림자 토큰
export const shadows = {
  outline: '2px #6B7CE9 solid',
  outlineOffset: '-1px',
} as const;

// 레이아웃 토큰
export const layout = {
  container: {
    mobile: {
      width: '375px',
      height: '812px',
    },
  },
  padding: {
    container: '8px 20px 20px 20px',
    section: '14px',
    item: '8px 10px',
    text: '10px',
  },
  gap: {
    small: '8px',
    medium: '14px',
    large: '16px',
  },
  button: {
    bottomOffset: '256px', // 프레임 바닥에서 버튼까지의 거리 (128px + 128px)
  },
} as const;
