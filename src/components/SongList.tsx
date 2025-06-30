/** @jsxImportSource @emotion/react */
import color from "../styles/color";
import styled from '@emotion/styled';
import Song from './Song';

const SongList =() =>{
    return (
        <StyledDashBoardList>
            <Song/>
        </StyledDashBoardList>
    )

}

export default SongList;

const StyledDashBoardList = styled.div`
    background-color:${color.secondary};
    display:flex;
    flex-direction:column;
`;