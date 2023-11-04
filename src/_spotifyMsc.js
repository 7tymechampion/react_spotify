

/*
const CLIENT_ID = "3efd274a853b4e569687768e1732c494"
const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
*/

//amazing tutorial
//https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn

//<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>


//const API_URL = 'https://accounts.spotify.com/authorize?';
//const API_URL = "https://accounts.spotify.com/api/token"

//const token = '67b9baaedbb94459b37f17744d375c47';

   /*
    const renderArtists = async (props) => {
        let data = props.data.artists;
        return data.map(dat => (
            <div key={dat.id}>
                {dat.images.length ? <img width={"100%"} src={dat.images[0].url} alt=""/> : <div>No Image</div>}
                {dat.name}
            </div>
        ))
    }
    */
    

    /*
    useEffect(() => {
        let token = getSpotifyToken();
        setToken(token)
    
    
    }, []);*/

    //e.preventDefault()



//searchArtistTest(artist);

/*
async function getTopTracks(){
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi(
      'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
    )).items;
  }
  
  const topTracks = await getTopTracks();
  console.log(
    topTracks?.map(
      ({name, artists}) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    )
  );
*/
/*
const searchArtistTest = async (artist, token) => {
    const data = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: artist,
            type: "artist"
        }
    })


    let artistInfo = Object.values(data.data.artists)[1];
    for (const k of artistInfo) {
        console.log('artists:', Object.values(k), k.artist)
    }

    for (const k of Object.values(data.data.artists.items)) {
        console.log('data.data', Object.values(k))
    }

console.log('artist info', artistInfo);
console.log(data);
console.log(Object.values(data.data.artists));
console.log(Object.values(data.data.artists)[1]);
};
*/