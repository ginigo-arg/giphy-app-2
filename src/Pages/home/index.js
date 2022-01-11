import {Link} from "wouter";
import GifGrid from "../../components/GifGrid/GifGrid";
import SearchGif from "../../components/SearchGif/SearchGif";
import SearchResults from "../SerchResults";
import useGifs from "../../Hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Programming", "Panda", "bull terrier"]


export default function Home() {


    const {loading, gifs} = useGifs()
    return (
        <>   
            <SearchGif/>
            <h3 className="App-title">Ultima Busqueda</h3>
            <GifGrid gifs={gifs} />
            <ul>
                {
                    POPULAR_GIFS.map((popularGif)=> (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`} >Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}