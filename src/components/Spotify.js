import useAxios from "../hooks/useAxios";
import axios from "../apis/spotifyCalls";
import CreateAxios from "../apis/spotifyCalls";


const Artists = () => {

    let x = CreateAxios();
    //console.log("x is:", x);
    
    
    const [artist, error, loading] = useAxios({
        axiosInstance: x,
        method: 'GET',
        url: '/',
        requestConfig: {
            params: {
                q: "LP",
                type: "artist"
            }
        }
    })

    return (
        <article>
            <h2>Raandom Artist</h2>
            {loading && <p>Loading...</p>}
            {!loading && error && <p className="errMsg">{error}</p>}
            {!loading && !error && artist && <p>{artist?.data}</p>}
            {!loading && !error && artist && <p>No Artist Found</p>}
        </article>
    )
}

export default Artists