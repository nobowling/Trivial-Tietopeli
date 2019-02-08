import React from 'react'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import Togglable from './components/Togglable'
import Title from './components/Title'
import {Container, Button} from 'semantic-ui-react'
import Notification from './components/Notification'

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
      question: null,
<<<<<<< HEAD
      error: ""
=======
      notification: false
>>>>>>> 9f66bb4b14f807226897ccec96676be476861f9a
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
    if(this.state.aihealueet.length === 0) {
      this.setState({
        question: null,
<<<<<<< HEAD
        error: "Et valinnut aihealueita"
=======
        notification: true
>>>>>>> 9f66bb4b14f807226897ccec96676be476861f9a
      })
    }
    else if(this.state.aihealueet.includes("kaikki", 0)) {
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

  reset = () => {
    this.setState({
      aihealueet: ["kaikki"],
      question: null,
<<<<<<< HEAD
      error: ""
=======
      notification: false
>>>>>>> 9f66bb4b14f807226897ccec96676be476861f9a
    })
  }

  render() {
    // ehdollinen renderöinti this.state.questionin arvon mukaan
    if(this.state.question === null) {
      return(
        <Container>
        <div>
        <Title />
        <div id="error">
          <p id="errorText">{this.state.error}</p>
        </div>
        <p>Valitse aihealueet aloittaaksesi.</p>
        <HomeScreen
        handleAll={this.handleAll}
        handleMaantiede={this.handleMaantiede}
        handleHistoria={this.handleHistoria}
        handleLuonto={this.handleLuonto}
        handleKulttuuri={this.handleKulttuuri}
        handleUrheilu={this.handleUrheilu}
        handleViihde={this.handleViihde}
        />
        <Button color="green" onClick={this.newQuestion}>Arvo kysymys</Button>
        {this.state.notification === true ? <Notification notification='Valitse aihealue!' /> : null}
        </div>
        </Container>
      )
    } else if(this.state.question === "kaikki") {
      const kysList = [maantiede, historia, luonto, kulttuuri, urheilu, viihde]
      const rndAihe = Math.floor(Math.random() * kysList.length)
      const rndKys = Math.floor(Math.random() * kysList[rndAihe].kysymykset.length)
      const kysymys = kysList[rndAihe].kysymykset[rndKys]
      const vastaus = kysList[rndAihe].vastaukset[rndKys]
      return(
        <Container>
        <Title/>
        <div id="questionScreen">
          <h1 id="questionHeader">{kysymys}</h1>
          <Togglable buttonLabel="Näytä vastaus">
            <p>{vastaus}</p>
          </Togglable>
          <br/>
          <Button color="green" onClick={this.newQuestion}>Arvo uusi</Button>
          <Button color="blue" onClick={this.reset}>Valitse aihealueet uudelleen</Button>
        </div>
        </Container>
      )
    } else if(this.state.question === "maantiede") {
      return(
        <QuestionScreen aihealue={maantiede} handleClick={this.newQuestion} reset={this.reset} check={this.check} />
      )
    } else if(this.state.question === "historia") {
      return(
        <QuestionScreen aihealue={historia} handleClick={this.newQuestion} reset={this.reset}/>
      )
    } else if(this.state.question === "luonto") {
      return(
        <QuestionScreen aihealue={luonto} handleClick={this.newQuestion} reset={this.reset}/>
      )
    } else if(this.state.question === "kulttuuri") {
      return(
        <QuestionScreen aihealue={kulttuuri} handleClick={this.newQuestion} reset={this.reset}/>
      )
    } else if(this.state.question === "urheilu") {
      return(
        <QuestionScreen aihealue={urheilu} handleClick={this.newQuestion} reset={this.reset}/>
      )
    } else if(this.state.question === "viihde") {
      return(
        <QuestionScreen aihealue={viihde} handleClick={this.newQuestion} reset={this.reset} />
      )
    }
  }
}

export default App
