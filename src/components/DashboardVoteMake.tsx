/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import color from '../styles/color';
import VoteMake from "../assets/dashboard/VoteMake.tsx";
import font from "../styles/font.ts";
import {useNavigate} from "react-router-dom";
const DashBoardVote = ()=>{
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/vote');
    };

    return (
        <StyledDashboardVoteMake onClick={handleClick}>
            <VoteMake/>
            <SortText>
                <p css={font.H1}>투표 등록 하기</p>
                <p css={font.H3}>원하는 노래로 <br/>투표를 만들어보세요!</p>
            </SortText>
        </StyledDashboardVoteMake>
    )
}

export default DashBoardVote;

const StyledDashboardVoteMake = styled.div`
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
    justify-content:flex-end;
    align-items: flex-end;
`;