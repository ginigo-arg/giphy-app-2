import React, {useState, useEffect} from 'react'
import Category from '../Category/Category'
import {getTrendingTerms} from '../../services/getTrendingTerms'


export default function TrendingSearches ()  {
    const [Trends, setTrends] = useState([])

    useEffect(function () {
    getTrendingTerms().then(setTrends)
}, [])

    return <div>
        <Category name='Tendencias' trends={Trends}/>

    </div>
}


function LazyTrending () {

    const [show, setShow] = useState(false)

    useEffect(function () {

        const onChange = (entries) => {
            console.log(entries)
            const el = entries[0]
            console.log(el)
        }
        const observer = new IntersectionObserver(onchange, {
            rootMargin: '100px'
        })
        observer.observe(document.getElementById('LazyTrendings'))        
    },[])

    return <div id="LazyTending">
        {show ? <TrendingSearches/> : null}
    </div>
}