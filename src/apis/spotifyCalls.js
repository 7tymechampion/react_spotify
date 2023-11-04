import axios from 'axios';
import { SpotifyLink, getSpotifyToken, SearchArtists } from '../SpotifyCalls';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.spotify.com/v1/search';


export default function CreateAxios() {
    const [token, setToken] = useState("")
    useEffect(() => {
        let token = getSpotifyToken();
        console.log('token line 21:', token);
        setToken(token)
        //searchArtists(props)
    }, []);

    return axios.create({
        baseUrl: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`
            //'Content-Type': 'application/json',
            //'Accept': 'application/json',
        }
    })
}

//export default CreateAxios