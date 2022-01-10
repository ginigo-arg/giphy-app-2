 import {useEffect, useState} from 'react'   
 import { getGifs } from '../services/getGifs'
 
 export function useGifs ({keyword}) {

      const [loading, setloading] = useState(false)
      const [gifs, setgifs] = useState([])
  
  
      useEffect( function () {
          setloading(true)
          getGifs({keyword})
          .then(gifs => {
              setgifs(gifs)
              setgifs(false)
          })
          
      }, [keyword])

      return {loading, gifs}
  }  