import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mujung-back-vercel.vercel.app',
});

export const fetchSongs = async () => {
    const res = await api.get('/songs');
    return res.data;
};

export const submitVote = async (linkId: string, email: string) => {
    const res = await axios.post('https://mujung-back-vercel.vercel.app/votes', {
        link_id: linkId,
        email: email,
    });
    return res.data;
};

export const searchTrackLinks = async (title: string, artist: string) => {
    const res = await axios.get('/search', {
        baseURL: 'https://mujung-back-vercel.vercel.app',
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
    return axios.post('https://mujung-back-vercel.vercel.app/songs', {
        link,
        email,
    }).then(res => res.data);
};

