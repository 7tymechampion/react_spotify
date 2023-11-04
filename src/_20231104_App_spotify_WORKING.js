import axios from 'axios';
import { SpotifyLink, getSpotifyToken, SearchArtists } from './SpotifyCalls';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.spotify.com/v1/search';


const App = () => {

    const [results, setResults] = useState([]);
    const [searchDyn, setSearchDyn] = useState("");
    const [search, setSearch] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
        let token = getSpotifyToken();
        console.log('token line 21:', token);
        setToken(token)
        //searchArtists(props)
    }, []);


    const submitForm = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log('line 22:', search);
        setSearch(searchDyn)
    }

        useEffect(() => {
            console.log('inside useEffect. search:', search);

            const getData = async () => {
                try {
                    const res = await axios.get("https://api.spotify.com/v1/search", {
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    },
                                    params: {
                                        q: search,
                                        type: "artist"
                                    }
                        })
                    console.log('line 42:', res.data);
                    console.log('line 44', res.data.artists.items);
                    let items = res.data.artists.items;
                    for (const idx in items) {
                        console.log(idx, (items[idx]))
                    }
                    for (const k of res.data) {
                        console.log('line 46', k);
                        console.log(res.data[k]);
                        console.log(Object.keys(res.data))
                        for (const v of res.data[k])
                            console.log(v);
                        }
                setResults(res.data);
                } catch (err) {
                    if (err.response) {
                        console.log(err.response.data);
                    }
                }

            }
            getData();
                //getData().then((res) => setResults(res)).then(console.log(results));
        }
            ,[search])

    return (
        <main className="App">
            <h1>useAxios Hooks</h1>
            {SpotifyLink()}
            <br />
            <br />
            <form id="my_form">                
                <label for="input_search">Search Spotify </label>
                <input type="text" id="input_search" onChange={(e) => setSearchDyn(e.target.value)}></input>
                                                     
                <input type="submit" onClick={submitForm}></input>
            </form>
            <div>
                <p>Results:{Object.keys(results).length}</p>
            </div>
        </main>
    );
}

export default App;