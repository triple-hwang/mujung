type Props = {
    width?: number | string;
    height?: number | string;
};

const voteDefault = ({ width = 16, height = 16 }: Props) => (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#B5BDF4"/>
        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="black" stroke-opacity="0.2"/>
    </svg>
);
export default voteDefault;