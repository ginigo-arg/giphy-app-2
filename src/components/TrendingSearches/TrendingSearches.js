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


