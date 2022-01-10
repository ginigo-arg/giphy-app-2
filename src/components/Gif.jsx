import React from "react";
import './Gif.css'

export default function Gift ({url, title, id}) {
    return (
        <a href={`#${id}`} key={url} className="Gif">
            <img alt={title} src={url} />
            <h4>{title}</h4>
            <span>{id}</span>
        </a>
        
    )
}