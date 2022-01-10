import React, {useEffect, useState} from "react";
import Spinner from '.../components/Spinner'
import GifGrid from "../../components/GifGrid/GifGrid";
import { getGifs } from "../../services/getGifs";
import { useGifs } from "../../Hooks/useGifs";

export default function SearchResults ({params}) {
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})
    // const [loading, setloading] = useState(false)
    // const [gifs, setgifs] = useState([])


    // useEffect( function () {
    //     setloading(true)
    //     getGifs({keyword})
    //     .then(gifs => {
    //         setgifs(gifs)
    //         setgifs(false)
    //     })
        
    // }, [keyword])

    return <>
        {
         loading
         ? <Spinner />
         : <GifGrid gifs={gifs}/>       
        }
        </>
}