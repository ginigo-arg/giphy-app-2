import React from 'react'
import { Link } from 'wouter'
import './Category.css'

export default function Category({ name, trends = [], ...props }) {
    return <div className={props.className}>
        <h3 className="Category-title">{name}</h3>
        <ul className="Category-list">
            {trends.map((singletrends) => (
                <li key={singletrends} className="Category-list-item">
                    <Link
                        className="Category-link"
                        to={`/search/${singletrends}`}
                    >
                        {singletrends}
                    </Link>
                </li>
            ))}
        </ul>
    
    </div>
}