 import {useEffect, useState} from 'react'   
 import { getGifs } from '../services/getGifs'
 
 export default function useGifs ({keyword} = {keyword: null}) {

      const [loading, setloading] = useState(false)
      const [gifs, setgifs] = useState([])
  
  
      useEffect( function () {
          setloading(true)
          //recuperamos la keyword
          const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
          getGifs({keyword: keywordToUse})
          .then(gifs => {
              setgifs(gifs)
              setloading(false)
              //Guardamos la keyword
              localStorage.setItem('lastKeyword', keyword)

          })
          
      }, [keyword])

      return {loading, gifs}
  }  