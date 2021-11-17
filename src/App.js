import React from 'react';
import './App.css';

import Button from "./elements/Button/Button";
import Navigation from "./components/Navigation/Navigation";

function App() {
    return (
        <fragment>
            <Navigation/>
            <header>
                <h1>
                    Fruit perfection
                </h1>
                <button
                    type="button"
                    onClick={() => console.log('Jij wil shoppen')}
                >
                    Shop nu
                </button>


            </header>
            <main>

            </main>
            <Button
                buttonSize={"btn--small"} onClick={() => console.log('Jij wil shoppen')}
            >
                login
            </Button>
            <Button buttonStyle={"btn--special--solid"}>
                login
            </Button>
            <Button buttonSize={'btn--large'} buttonStyle={"btn--special--outline"}>
                register
            </Button>
        </fragment>
    );
}

export default App;
