import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mujung-back-vercel.vercel.app/api',
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

export const searchTrackLinks = async (title: string, artist: string) => {
    const res = await axios.get('/search', {
        baseURL: 'https://mujung-back-vercel.vercel.app/api',
        params: {
            title,
            artist,
        },
    });
    return res.data as {
        spotify_url: string;
        youtube_search_url: string;
    };
};

export const createSong = (link: string, email: string) => {
    return axios.post('https://mujung-back-vercel.vercel.app/api/songs', {
        link,
        email,
    }).then(res => res.data);
};
