import React, {useEffect, createContext, useState} from 'react';

const ContextVar = createContext();
const MusicContext = (props) => {
    const [trending, setTrendingSongs] = useState([]);
    const [week20, setWeek20] = useState([]);
    const [month50, setMonth50] = useState([]);
    const [evergreen, setEvergreen] = useState([]);
    const [happy, setHappy] = useState([]);
    const [romantic, setRomantic] = useState([]);
    const [excited, setExcited] = useState([]);
    const [sad, setSad] = useState([]);

    useEffect(() => {
        fetchVideos1();
        fetchVideos2();
        fetchVideos3();
        fetchVideos4();
        fetchVideos5();
        fetchVideos6();
        fetchVideos7();
        fetchVideos8();
    }, []);

    const fetchVideos1 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Trending%20songs', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setTrendingSongs(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos2 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 20 of this week', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setWeek20(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos3 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Top 50 of this month', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setMonth50(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos4 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?featured=Evergreen melodies', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setEvergreen(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos5 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=happy', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setHappy(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos6 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=romantic', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setRomantic(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos7 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=excited', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setExcited(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchVideos8 = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/musicx/song?mood=sad', {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk'
                }
            });
            const data = await response.json();
            setSad(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <ContextVar.Provider
            value={{
                trending:trending,
                top20:week20,
                top50:month50,
                evergreen:evergreen,
                happy:happy,
                romantic:romantic,
                excited:excited,
                sad:sad,
            }}
        >
            {props.children}
        </ContextVar.Provider>
    );
};
export {ContextVar};

export default MusicContext;