/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../styles/color';
import font from '../styles/font';
import Vote from "../assets/dashboard/Vote";
import { useNavigate } from 'react-router-dom';
const DashBoardVote = ()=>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/vote');
    };
    return (
        <StyledDashboardVote onClick={handleClick}>
            <SortText>
                <p css={font.H1}>투표하기</p>
                <p css={font.H3}>현재 투표를 <br/>확인하고 투표해보세요</p>
            </SortText>
            <Vote/>
        </StyledDashboardVote>
    )
}

export default DashBoardVote;

const StyledDashboardVote = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    padding: 4%;
    justify-content: space-between;
    background-color: ${color.secondary};
    border-radius: 20px;
`;
const SortText= styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
`;