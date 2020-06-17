import * as React from 'react'
import { Logo } from './logo'

interface Iprops {
    isLoadedApp?: boolean
}

export const Header:React.FC<Iprops> = (props) => {
    return (
        <header className="mainHeader">
            <section className="logoHolder">
                <Logo />
                <h1>Omega Applications</h1>
            </section>
        </header>
    )
}