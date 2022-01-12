import React from "react";
import useGifs  from "../../Hooks/useGifs";
import Spinner from "../../components/Spinner/index";
import GifGrid from "../../components/GifGrid/GifGrid";

export default function SearchResults ({params}) {
  const {keyword} = params
  const {loading, gifs} = useGifs({keyword})

    return <>
        {
         loading
         ? <Spinner/>
         : <>
         <h3 className="App-title">{decodeURI(keyword)}</h3>
         <GifGrid gifs={gifs}/>       
         </>
        }

        </>
}