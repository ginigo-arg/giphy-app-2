 import {useContext, useEffect, useState} from 'react'   
 import { getGifs } from '../services/getGifs'
 import  GifsContext  from '../context/GifsContext'
 
 export default function useGifs ({keyword} = {keyword: null}) {

      const [loading, setloading] = useState(false)
      const {gifs, setGifs} = useContext(GifsContext)
  
  
      useEffect( function () {
          setloading(true)
          //recuperamos la keyword
          const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
          getGifs({keyword: keywordToUse})
          .then(gifs => {
              setGifs(gifs)
              setloading(false)
              //Guardamos la keyword
              localStorage.setItem('lastKeyword', keyword)

          })
          
      }, [keyword, setGifs])

      return {loading, gifs}
  }  