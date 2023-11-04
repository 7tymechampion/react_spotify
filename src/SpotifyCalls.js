import axios from 'axios';
import { useEffect, useState } from 'react';



export const getSpotifyToken = () => {

    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        console.log('setting token from hash:', hash);
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }
    return token;
};

export function SpotifyLink() {

    const [token, setToken] = useState("")

    useEffect(() => {
        let token = getSpotifyToken();
        setToken(token)
    
    
    }, []);

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const CLIENT_ID = "3efd274a853b4e569687768e1732c494"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    let tokenSwitch = !token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button onClick={logout}>Logout</button>;

    return tokenSwitch;

    /*
    curl -X POST "https://accounts.spotify.com/api/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
    */
}


async function fetchWebApi(endpoint, method, body, token) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body:JSON.stringify(body)
    });
    return await res.json();
  }




export const SearchArtists = (props) => {

    const [searchKey, setSearchKey] = useState("")
    const [data, setData] = useState([])


    useEffect(() => {
        const SearchArtistsDat = async () => {

        console.log('line 144: searchKey', searchKey);
        //console.log('line 144: token', props.token);
        const res = await axios.get("https://api.spotify.com/v1/search", {
        //axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${props.token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        });

        setData(res);
        console.log('line 172 results:', data);
    }
    SearchArtistsDat();
    }, []);


    if (data && data.length>0) {
        console.log('line 172 dataResults:', data)
    }

    let dataResults = data ?
    
    <div>{data}</div>
        /*data.map(dat => (
                <div key={dat.id}>
                    {dat.images.length ? <img width={"100%"} src={dat.images[0].url} alt=""/> : <div>No Image</div>}
                    {dat.name}
                </div>))*/
             : <div><h2>NO RESULTS</h2></div>

    return (
    <>
    <form onSubmit={Execute}>
        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        <button type="submit">Search</button>
    </form>

    <div>
        {dataResults}
    </div>
    </>
    );


    //setArtists(data.artists.items)
}


const searchArtistsAlbums = async (e, token, searchKey) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "album"
            //type: "artist"
        }
    })
    console.log(data.albums.items)
    return data;

    //setAlbums(data.albums.items)
}

export const renderArtists = (props) => {
    let artists = props.artists;
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}



const renderAlbums = (albums) => {
    return albums.map(album => (
        <div key={album.id}>
            {album.images.length ? <img width={"100%"} src={album.images[0].url} alt=""/> : <div>No Image</div>}
            {album.name}
        </div>
    ))
}