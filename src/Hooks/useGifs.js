 import {useContext, useEffect, useState} from 'react'   
 import { getGifs } from '../services/getGifs'
 import  GifsContext  from '../context/GifsContext'

 const INITIAL_PAGE = 0
 
 
 export default function useGifs ({keyword} = {keyword: null}) {

      const [loading, setloading] = useState(false)
      const [loadingNextPage, setLoadingNextPage] = useState(false)
      const [page, setPage] = useState(INITIAL_PAGE)
      const {gifs, setGifs} = useContext(GifsContext)

        //recuperamos la keyword
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
      useEffect( function () {
          setloading(true)
          
          getGifs({keyword: keywordToUse})
          .then(gifs => {
              setGifs(gifs)
              setloading(false)
              //Guardamos la keyword
              localStorage.setItem('lastKeyword', keyword)

          })
          
      }, [keyword, setGifs, keywordToUse])

      //useffect para realizar la paginacion con boton.
      useEffect(() => {
         if(page === INITIAL_PAGE) return
         setLoadingNextPage(true)
         getGifs({ keyword: keywordToUse, page})
         .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
         }) 
      }, [keywordToUse,page, setGifs])

      return {loading, loadingNextPage, gifs, setPage}
  }  

