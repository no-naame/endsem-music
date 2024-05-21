import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {useAuth} from "@/components/context/AuthContext.jsx";

export default function SongDiv() {
    const [song, setSong] = useState({ data: {}, artist: [''] });
    const [isPlaying, setIsPlaying] = useState(false);
    const user = localStorage.getItem('token');
    const fetchId = useParams();
    const audioRef = useRef(null);


    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await fetch(`https://academics.newtonschool.co/api/v1/musicx/song/${fetchId.songId}`, {
                    headers: {
                        'accept': 'application/json',
                        'projectID': 'bng7dtu7whwk',
                        'Authorization': `Bearer ${user}`
                    }
                });
                const data = await response.json();
                setSong(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchSong();
    }, []);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-[300px] ">
                <div className="text-center space-y-2">
                    <div className="text-sm text-gray-500">Musica</div>
                    <div className="text-2xl font-bold">{song.title}</div>
                    <div className="text-sm text-gray-500">{song.artist.map(i => i.name).join(', ')}</div>
                </div>
                <div className="mt-4 mb-8 flex justify-center">
                    <Avatar>
                        <AvatarImage alt="Album Cover" className="rounded-full w-56" src={song.thumbnail} />
                    </Avatar>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">00:00</div>
                    <Progress className="w-[60%]" value={0} />
                    <div className="text-sm text-gray-500">04:38</div>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                    <Button variant="ghost" onClick={handlePlayPause}>
                        {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                    </Button>
                </div>
                <audio ref={audioRef} src={song.audio_url}></audio>
            </div>
        </div>
    );
}

function PlayIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    );
}

function PauseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
        </svg>
    );
}

function SkipBackIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="19 20 9 12 19 4 19 20" />
            <line x1="5" x2="5" y1="19" y2="5" />
        </svg>
    );
}

function SkipForwardIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="5 4 15 12 5 20 5 4" />
            <line x1="19" x2="19" y1="5" y2="19" />
        </svg>
    );
}
