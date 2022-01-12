import GifGrid from "components/GifGrid/GifGrid";
import SearchGif from "components/SearchGif/SearchGif";
import useGifs from "Hooks/useGifs";
import 'App.css'
import {Helmet} from "react-helmet"
import TrendingSearches from "components/TrendingSearches/TrendingSearches";



export default function Home() {


    const {loading, gifs} = useGifs()
    return (
        <>
        <Helmet>
            <title>Home | Giffy</title>
        </Helmet>
        <header className="0-header">
        <SearchGif/>
        </header>

        <div className="App-wrapper">
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Ultima Busqueda</h3>
                    <GifGrid gifs={gifs} />
                    
                </div>
                <div className="App-category">
                   <TrendingSearches/>           
                </div>
            </div>
        </div>
        </>
    )
}