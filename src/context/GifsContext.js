import { createContext, useState } from "react";

const Context = createContext({})

export function GifsContextProvider ({ children }) {
    const [gifs, setGifs] = useState([])
    console.log('children de contexto', children)
    return <Context.Provider value={{ gifs, setGifs }}>
        {children}
    </Context.Provider>
}

export default Context