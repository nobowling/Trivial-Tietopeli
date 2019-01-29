import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aihealue: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Trivial-tietopeli</h1>
        <p>Valitse aihealueet aloittaaksesi.</p>
        <form id="aihealueet">
        <label id="kaikki">Kaikki </label> <input id="kaikki" type="checkbox" /><br />
        <label id="maantiede">Maantiede </label> <input id="maantiede" type="checkbox" /><br />
        <label id="historia">Historia </label> <input id="historia" type="checkbox" /><br />
        <label id="luonto">Luonto ja tiede </label> <input type="checkbox" /><br />
        <label id="kulttuuri">Kulttuuri </label> <input type="checkbox" /><br />
        <label id="urheilu">Urheilu ja vapaa-aika </label> <input type="checkbox" /><br />
        <label id="viihde">Viihde </label> <input type="checkbox" /><br />
        </form>
      </div>
    )
  }
}

export default App
