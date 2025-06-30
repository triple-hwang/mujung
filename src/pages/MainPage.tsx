/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import SongList from "../components/SongList.tsx";
import DashBoardVoteMake from "../components/DashboardVoteMake";
import DashBoardVote from "../components/DashBoardVote";

const MainPage = () => {
  return (
    <StyledMainPage>
        <SongList/>
        <DashBoardVote/>
        <DashBoardVoteMake/>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    gap: 1rem;
`