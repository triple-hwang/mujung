import { useEffect, useState } from 'react';
import SongItem from './SongItem';
import { SpotifytopSongs } from '../lib/api'; // 경로는 실제 위치에 맞게

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
                const data = await SpotifytopSongs(); // ✅ 이 함수 사용
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
        <div>
            {songs.map((item) => (
                <SongItem
                    key={item.rank}
                    title={`${item.track_name} - ${item.artists}`}
                    songName={item.track_name}
                    songArtist={item.artists}
                    linkId={`${item.rank}-${item.track_name}`}
                />
            ))}
        </div>
    );
};

export default SpotifyRankList;