type Props = {
    width?: number | string;
    height?: number | string;
};

const youtubeLogo = ({width=24, height=18}: Props) => (
    <svg width={width} height={height} viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_154_213)">
            <g clip-path="url(#clip1_154_213)">
                <path d="M23.4982 3.15475C23.2217 2.10925 22.4096 1.28763 21.3764 1.00776C19.5055 0.5 12 0.5 12 0.5C12 0.5 4.49458 0.5 2.62364 1.00776C1.59039 1.28763 0.778402 2.10925 0.501813 3.15475C1.50211e-07 5.04786 0 9 0 9C0 9 1.50211e-07 12.9522 0.501813 14.8453C0.778402 15.8908 1.59039 16.7124 2.62364 16.9922C4.49458 17.5 12 17.5 12 17.5C12 17.5 19.5055 17.5 21.3764 16.9922C22.4096 16.7124 23.2217 15.8908 23.4982 14.8453C24.0001 12.9522 24.0001 9 24.0001 9C24.0001 9 23.9981 5.04786 23.4982 3.15475Z" fill="#FF0000"/>
                <path d="M9.59766 12.6426L15.8328 9.00034L9.59766 5.35803V12.6426Z" fill="white"/>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_154_213">
                <rect width="24" height="17" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            <clipPath id="clip1_154_213">
                <rect width="24" height="17" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
        </defs>
    </svg>

);

export default youtubeLogo;