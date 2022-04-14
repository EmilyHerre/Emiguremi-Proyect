import React from 'react'
import { Navbar } from './Navbar';


type Props = {
    children: React.ReactNode
}

export const Layout = (   { children } : Props) => {
    console.log(children)
    return (

        <> 
            <Navbar />
            {children}
            
        </>
    )
}
