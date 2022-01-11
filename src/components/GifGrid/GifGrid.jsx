import Gift from "../Gif/Gif"
import './Grid.css'

export default function GifGrid ({gifs}) {
    
    return (
        <div className='GifGrid'>
            {
            gifs.map(({url, title, id})=>{
                return <Gift 
                url={url} 
                title={title} 
                id={id}
                key={id}/>
            })
            }
        </div>
    )
    }
