import React from "react";
import { Link } from "wouter";
import './Gif.css'

function Gift ({url, title, id}) {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link">
            <h4>{title}</h4>     
            <img loading='lazy' alt={title} src={url} />
            </Link>
        </div>
        
    )
}

export default React.memo(Gift)