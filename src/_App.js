import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { SpotifyLink, getSpotifyToken, SearchArtists } from './SpotifyCalls';





const App = () => {


    const [artists, setArtists] = useState([])
    const [albums, setAlbums] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        let token = getSpotifyToken();
        //console.log('token line 21:', token);
        setToken(token)
        //searchArtists(props)
    }, []);



    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {SpotifyLink()}
                {/*!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>*/}
            </header>
            {/*
            <form onSubmit={searchArtists({token, searchKey}) }>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
                */}
            <SearchArtists token={token} />
            <hr />
            <br />
            {/*renderArtists()*/}

            {/*
            <form onSubmit={searchArtistsAlbums}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>
            <hr />
            <br />
            {renderAlbums()*/}

        </div>
    );
/*
    return (
        <>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            {token}
        </>
    );
*/
}












export default App;

