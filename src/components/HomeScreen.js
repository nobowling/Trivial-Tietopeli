import React from 'react'
import {Checkbox} from 'semantic-ui-react'

const HomeScreen = ({handleAll, handleMaantiede, handleHistoria, handleLuonto, handleKulttuuri, handleUrheilu, handleViihde}) => {
    return(
    <div className="App">
        <h1 id="triviaHeader">Trivia-tietopeli</h1>
        <p>Valitse aihealueet aloittaaksesi.</p>
        <div id="checkboxes">
            <Checkbox label="Kaikki" onChange={handleAll} defaultChecked toggle/><br />
            <Checkbox label="Maantiede" onChange={handleMaantiede} toggle/><br />
            <Checkbox label="Historia" onChange={handleHistoria} toggle/><br />
            <Checkbox label="Luonto ja tiede" onChange={handleLuonto} toggle/><br />
            <Checkbox label="Kulttuuri" onChange={handleKulttuuri} toggle/><br />
            <Checkbox label="Urheilu ja vapaa-aika" onChange={handleUrheilu} toggle/><br />
            <Checkbox label="Viihde" onChange={handleViihde} toggle/><br />
        </div>
    </div>
    )
}

export default HomeScreen