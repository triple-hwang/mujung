type Props = {
    width?: number | string;
    height?: number | string;
};

const VoteMake = ({width=105, height=108}: Props) => (
    <svg width={width} height={height} viewBox="0 0 105 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" width="100" height="108" rx="12" fill="white"/>
<path d="M49.4211 79L89 79" stroke="#EDEDED" stroke-width="3" stroke-linecap="round"/>
<path d="M27.4211 62L88.9211 62" stroke="#EDEDED" stroke-width="3" stroke-linecap="round"/>
<rect y="13" width="41" height="41" rx="8" fill="#00CD7E"/>
<path d="M19 35H10V32H19V23H22V32H31V35H22V44H19V35Z" fill="white"/>
    </svg>
);
export default VoteMake;