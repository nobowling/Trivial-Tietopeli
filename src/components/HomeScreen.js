import React from 'react'

const HomeScreen = ({handleSubmit, handleAll, handleMaantiede, handleHistoria, handleLuonto, handleKulttuuri, handleUrheilu, handleViihde}) => {
    return(
    <div className="App">
        <h1>Trivia-tietopeli</h1>
            <p>Valitse aihealueet aloittaaksesi.</p>
            <form id="aihealueet" onSubmit={handleSubmit}>
            <label id="kaikki">Kaikki </label> <input id="kaikki" type="checkbox" onChange={handleAll} defaultChecked/><br />
            <label id="maantiede">Maantiede </label> <input id="maantiede" type="checkbox" onChange={handleMaantiede}/><br />
            <label id="historia">Historia </label> <input id="historia" type="checkbox" onChange={handleHistoria}/><br />
            <label id="luonto">Luonto ja tiede </label> <input id="luonto" type="checkbox" onChange={handleLuonto}/><br />
            <label id="kulttuuri">Kulttuuri </label> <input id="kulttuuri" type="checkbox" onChange={handleKulttuuri}/><br />
            <label id="urheilu">Urheilu ja vapaa-aika </label> <input id="urheilu" type="checkbox" onChange={handleUrheilu}/><br />
            <label id="viihde">Viihde </label> <input id="viihde" type="checkbox" onChange={handleViihde}/><br />
            <button type="submit">Arvo kysymys</button>
        </form>
    </div>
    )
}

export default HomeScreen