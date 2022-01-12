import React, {useState, useEffect, useRef} from 'react'
import Category from '../Category/Category'
import {getTrendingTerms} from '../../services/getTrendingTerms'


function TrendingSearches ()  {
    const [Trends, setTrends] = useState([])
   

    useEffect(function () {
    getTrendingTerms().then(setTrends)
}, [])

    return <div>
        <Category name='Tendencias' trends={Trends}/>

    </div>
}


export default function LazyTrending () {

    const [show, setShow] = useState(false)
     const elementRef = useRef()

    useEffect(function () {

        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log(el.isIntersecting)
            if(el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
        observer.observe(elementRef.current)       
    })

    return <div ref={elementRef}>
        {show ? <TrendingSearches/> : null}
    </div>
}