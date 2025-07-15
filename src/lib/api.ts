import axios from 'axios';
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'https://mujung-back-fastapi.onrender.com',
    withCredentials: true,
});

export const fetchSongs = async () => {
    const res = await api.get('/songs');
    return res.data;
};

export const submitVote = async (link_id: string, user_id: string) => {
    return api.post('/votes', {
        link_id,
        user_id,
    });
};

export async function searchTrackLinks(title: string, artist: string) {
    const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/search?title=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}`
    );
    if (!res.ok) throw new Error("검색 실패");
    return await res.json();
}

export const createSong = (link: string, email: string) => {
    return axios.post('https://mujung-back-fastapi.onrender.com/songs', {
        link,
        email,
    }).then(res => res.data);
};

export const SpotifytopSongs = async () => {
    const res = await api.get('/spotify');
    return res.data;
};

export const topSongs= async () => {
    const res = await api.get('/topsongs');
    return res.data;
}