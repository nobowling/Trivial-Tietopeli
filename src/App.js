import React from 'react'
import HomeScreen from './components/HomeScreen'
import Togglable from './components/Togglable'


const maantiede = {
  kysymykset: [
    "Maantiede1",
    "Maantiede2"
  ],
  vastaukset: [
    "MaantiedeVastaus1",
    "MaantiedeVastaus2"
  ]
}

const historia = {
  kysymykset: [
    "Millä vuosikymmenellä Martin Luther King, Jr. piti kuuluisan puheensa I have a Dream?",
    "Historia2"
  ],
  vastaukset: [
    "1960",
    "HistoriaVastaus2"
  ]
}

const luonto = {
  kysymykset: [
    "Mikä eläin"
  ],
  vastaukset: [
    "Koira"
  ]
}

const kulttuuri = {
  kysymykset: [
    "Kuka taiteilija",
    "Missä sijaitsee patsas"
  ],
  vastaukset: [
    "Van Gogh",
    "Venäjällä"
  ]
}

const urheilu = {
  kysymykset: [
    "Mikä olympialaji"
  ],
  vastaukset: [
    "Hiihto"
  ]
}

const viihde = {
  kysymykset: [
    "Mikä tv-sarja"
  ],
  vastaukset: [
    "HIMYM"
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aihealueet: ["kaikki"],
      question: null
    }
  }
  //handlerit reagoivat checkboxien nappien painalluksiin
  handleAll = () => {
    if(this.state.aihealueet.includes("kaikki", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "kaikki")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "kaikki"]
      })
    }
  }

  handleMaantiede = () => {
    if(this.state.aihealueet.includes("maantiede", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "maantiede")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "maantiede"]
      })
    }
  }

  handleHistoria = () => {
    if(this.state.aihealueet.includes("historia", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "historia")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "historia"]
      })
    }
  }

  handleLuonto = () => {
    if(this.state.aihealueet.includes("luonto", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "luonto")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "luonto"]
      })
    }
  }

  handleKulttuuri = () => {
    if(this.state.aihealueet.includes("kulttuuri", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "kulttuuri")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "kulttuuri"]
      })
    }
  }

  handleUrheilu = () => {
    if(this.state.aihealueet.includes("urheilu", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "urheilu")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "urheilu"]
      })
    }
  }

  handleViihde = () => {
    if(this.state.aihealueet.includes("viihde", 0)) {
      this.setState({
        aihealueet: this.state.aihealueet.filter(aihe => aihe !== "viihde")
      })
    } else {
      this.setState({
        aihealueet: [...this.state.aihealueet, "viihde"]
      })
    }
  }

  newQuestion = () => {
    // asetetaan this.state.questionin arvo sen mukaan, mitä this.state.aihealueet sisältää
    if(this.state.aihealueet.includes("kaikki", 0)) {
      this.setState({
        question: "kaikki"
      })
    } else {
      let questions = []
      for(let i = 0; i < this.state.aihealueet.length; i++) {
        questions.push(this.state.aihealueet[i])
      }
      const question = questions[Math.floor(Math.random() * questions.length)]
      this.setState({
        question: question
      })
    }
  }

  render() {
    // ehdollinen renderöinti this.state.questionin arvon mukaan
    if(this.state.question === null) {
      return(
        <HomeScreen
        handleSubmit={this.newQuestion} 
        handleAll={this.handleAll}
        handleMaantiede={this.handleMaantiede}
        handleHistoria={this.handleHistoria}
        handleLuonto={this.handleLuonto}
        handleKulttuuri={this.handleKulttuuri}
        handleUrheilu={this.handleUrheilu}
        handleViihde={this.handleViihde}
        />
      )
    } else if(this.state.question === "kaikki") {
      const kysList = [maantiede, historia, luonto, kulttuuri, urheilu, viihde]
      const rndAihe = Math.floor(Math.random() * kysList.length)
      const rndKys = Math.floor(Math.random() * kysList[rndAihe].kysymykset.length)
      const kysymys = kysList[rndAihe].kysymykset[rndKys]
      const vastaus = kysList[rndAihe].vastaukset[rndKys]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    } else if(this.state.question === "maantiede") {
      const rnd = Math.floor(Math.random() * maantiede.kysymykset.length)
      const kysymys = maantiede.kysymykset[rnd]
      const vastaus = maantiede.vastaukset[rnd]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    } else if(this.state.question === "historia") {
      const rnd = Math.floor(Math.random() * historia.kysymykset.length)
      const kysymys = historia.kysymykset[rnd]
      const vastaus = historia.vastaukset[rnd]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    } else if(this.state.question === "luonto") {
      const rnd = Math.floor(Math.random() * luonto.kysymykset.length)
      const kysymys = luonto.kysymykset[rnd]
      const vastaus = luonto.vastaukset[rnd]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    } else if(this.state.question === "kulttuuri") {
      const rnd = Math.floor(Math.random() * kulttuuri.kysymykset.length)
      const kysymys = kulttuuri.kysymykset[rnd]
      const vastaus = kulttuuri.vastaukset[rnd]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    } else if(this.state.question === "urheilu") {
      const rnd = Math.floor(Math.random() * urheilu.kysymykset.length)
      const kysymys = urheilu.kysymykset[rnd]
      const vastaus = urheilu.vastaukset[rnd]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    } else if(this.state.question === "viihde") {
      const rnd = Math.floor(Math.random() * viihde.kysymykset.length)
      const kysymys = viihde.kysymykset[rnd]
      const vastaus = viihde.vastaukset[rnd]
      return(
        <div>
          <h1>{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            {vastaus}
          </Togglable>
        </div>
      )
    }
  }
}

export default App
