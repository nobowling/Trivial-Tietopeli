import React from 'react'
import {Checkbox} from 'semantic-ui-react'

const HomeScreen2 = ({handleAll, handleGeography, handleHistory, handleScience, handleCulture, handleSports, handleEntertainment}) => {
    return(
    <div className="App">
        <h1 id="triviaHeader">Trivia-tietopeli</h1>
        <p>Valitse aihealueet aloittaaksesi.</p>
        <div id="checkboxes">            
            <Checkbox label="Kaikki" onChange={handleAll} defaultChecked toggle/><br />
        </div>
        <div id="blocks">
            <div id="subjectBlock" onClick={handleGeography}><p id="subjectText">Maantiede</p></div>
            <div id="subjectBlock" onClick={handleHistory}><p id="subjectText">Historia</p></div>
            <div id="subjectBlock" onClick={handleScience}><p id="subjectText">Tiede</p></div>
            <div id="subjectBlock" onClick={handleCulture}><p id="subjectText">Kulttuuri</p></div>
            <div id="subjectBlock" onClick={handleSports}><p id="subjectText">Urheilu</p></div>
            <div id="subjectBlock" onClick={handleEntertainment}><p id="subjectText">Viihde</p></div>
        </div>
    </div>
    )
}

export default HomeScreen2