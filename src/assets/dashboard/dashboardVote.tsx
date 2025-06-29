type Props = {
    width?: number | string;
    height?: number | string;
};

const dashboardVote = ({ width=114, height=108 }: Props) => (
    <svg width={width} height={height} viewBox="0 0 114 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="7" width="100" height="108" rx="16" fill="white"/>
<path d="M25 89L95 89" stroke="#EDEDED" stroke-width="3" stroke-linecap="round"/>
<rect x="22" y="58" width="15" height="15" rx="7.5" stroke="#EDEDED" stroke-width="3"/>
<path d="M45 68L95 68" stroke="#EDEDED" stroke-width="3" stroke-linecap="round"/>
<rect y="14" width="114" height="37" rx="8" fill="#3F5CFF"/>
<path d="M15.2699 38.42L8.35999 31.4046L10.0875 29.6508L15.2699 34.9123L26.3925 23.62L28.12 25.3738L15.2699 38.42Z" fill="white"/>
    </svg>
);

export default dashboardVote;