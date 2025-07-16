import { useEffect, useState } from 'react';
import { SpotifytopSongs } from '../lib/api';
import SpotifyRank from '../assets/spotifyrank.svg';
import {borderRadius, layout} from "../styles/index";
import styled from "@emotion/styled";
import SpotifyItems from "../components/SpotifyItems.tsx";
import color from "@/styles/color.ts";
interface SongData {
    rank: number;
    track_name: string;
    artists: string;
}

const SpotifyRankList = () => {
    const [songs, setSongs] = useState<SongData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSongs = async () => {
            try {
                const data = await SpotifytopSongs();
                setSongs(data);
            } catch (error) {
                console.error('곡 목록을 불러오지 못했습니다.', error);
            } finally {
                setLoading(false);
            }
        };

        loadSongs();
    }, []);

    if (loading) return <div>로딩 중...</div>;

    return (
        <StyledSpotifyRank>
            <img src={SpotifyRank} alt="Spotify Rank Logo" style={{ width: '20px' }} />

            {songs.map((item) => (
                <SpotifyItems
                    key={item.rank}
                    title={`${item.track_name} - ${item.artists}`}
                    songName={item.track_name}
                    songArtist={item.artists}
                    linkId={`${item.rank}-${item.track_name}`}
                />
            ))}
        </StyledSpotifyRank>
    );
};

export default SpotifyRankList;

const StyledSpotifyRank=styled.div`
    padding: ${layout.padding.sectionFull};
    background: ${color.white};
    border-radius: ${borderRadius.medium};
    display: flex;
    flex-direction: column;
    gap: ${layout.gap.medium};
`