import { useEffect, useState } from 'react';
import supabase from '../lib/SupabaseClient';

export interface Candidate {
    link_id: string;
    song_name: string;
    song_artist: string;
    vote_count: number;
}

interface RawCandidate {
    link_id: string;
    vote_count: number;
    spotify_information: {
        song_name: string;
        song_artist: string;
    }[];
}

export function useTopCandidates(limit = 5) {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            const { data, error } = await supabase
                .from('vote_aggregate')
                .select(`link_id, vote_count, spotify_information (song_name, song_artist)`)
                .order('vote_count', { ascending: false })
                .limit(limit);

            if (error) {
                console.error('Supabase error:', error);
            } else if (data) {
                const parsed = (data as RawCandidate[]).map((item) => ({
                    link_id: item.link_id,
                    vote_count: item.vote_count,
                    song_name: item.spotify_information?.[0]?.song_name ?? '',
                    song_artist: item.spotify_information?.[0]?.song_artist ?? '',
                }));
                setCandidates(parsed);
                console.log('parsed:', parsed);
            }
        };
        fetchCandidates();
    }, [limit]);

    return candidates;
}