import React, {useCallback, useRef, useEffect} from "react";
import useGifs  from "../../Hooks/useGifs";
import Spinner from "../../components/Spinner/index";
import GifGrid from "../../components/GifGrid/GifGrid";
import useNearScreen from "Hooks/useNearScreen";
import debounce from "just-debounce-it";
import Helmet from "react-helmet";

export default function SearchResults ({params}) {
  const {keyword} = params
  const {loading, gifs, setPage} = useGifs({keyword})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })
 

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : '' 
  //funcion para mostrar los sig. resultados concatenando los que ya existian.
  // const handleNextPage = () => {
  //   setPage(prevPage => prevPage + 1)
  // }

  //const handleNextPage = () => console.log('next page')
  
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
    ), [])

  useEffect(() => {
     console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  },[debounceHandleNextPage, isNearScreen])

    return <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {
         loading
         ? <Spinner/>
         : <>
         <h3 className="App-title">{decodeURI(keyword)}</h3>
         <GifGrid gifs={gifs}/>   
         <div id="visor" ref={externalRef}></div>    
         </>
        }


        </>
}
