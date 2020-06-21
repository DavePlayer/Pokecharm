import * as React from 'react'

export const VisitHomePage:React.FC = () => (
    <main className="visitMain">
        <section className="welcome">
            <h1>Welcome to pokecharm</h1>
        </section>
        <section className="functional">
            <div>
                <p>Free web application which can help you menage caught pokemons (ex. to get shiny charm) including shinies</p>
                <button>Login</button>
                <button>Register</button>
            </div>
        </section>
    </main>
)