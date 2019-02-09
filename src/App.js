import React from 'react'
import HomeScreen from './components/HomeScreen'
import QuestionScreen from './components/QuestionScreen'
import Togglable from './components/Togglable'
import Title from './components/Title'
import {Container, Button, Icon} from 'semantic-ui-react'
import Notification from './components/Notification'

const maantiede = {
  kysymykset: [
    "Kuinka monta valtiota on Euroopassa (vuonna 2019)?",
    "Mitkä ovat järjestyksessä asukasluvultaan kaksi suurinta maanosaa?",
    "Mikä on asukasluvultaan Euroopan suurin kaupunki?",
    "Volga on Euroopan pisin joki. Mihin vesimuodostumaan se laskee?",
    "Mikä on pinta-alaltaan Euroopan pienin valtio?",
    "Mikä on Liechtensteinin pääkaupunki?",
    "Mikä on Belgian pääkaupunki?",
    "Mikä on maailman eteläisin pääkaupunki?",
    "Mikä rahayksikkö Tanskassa on käytössä?",
    "Minkä valtion rahayksikkö on zloty?",
    "Minkä Tanskan itsehallintoalueen pääkaupunki on Tórshavn?",
    "Mikä on Norjan korkein vuori?",
    "Mille valtiolle kuuluu Etelä-Atlantilla sijaitseva Bouvet'nsaari? BONUS: Miksi saari on maantieteellisesti erityinen?",
    "Mikä on Suomen pisin joki? BONUS: Kuinka pitkä se on 50 kilometrin tarkkuudella?",
    "Mikä on Suomen pinta-ala 1000 neliökilometrin tarkkuudella?",
    "Mikä on Suomen eteläisin tunturi?"
  ],
  vastaukset: [
    "51",
    "Aasia ja Afrikka",
    "Moskova",
    "Kaspianmereen",
    "Vatikaani",
    "Vaduz",
    "Bryssel",
    "Wellington",
    "Tanskan kruunu",
    "Puolan",
    "Färsaarten",
    "Galdhopiggen",
    "Norjalle. BONUS: Se sijaitsee kauempana mantereesta tai muista saarista kuin mikään muu saari maailmassa.",
    "Kemijoki. BONUS: 550 kilometriä",
    "338 000 neliökilometriä",
    "Iso-Syöte"
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
    <p>Missä sijaitsee patsas</p>
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
    "Mikä tv-sarja",
    "Mikä elokuva"
  ],
  vastaukset: [
    "HIMYM",
    "Pulp Fiction"
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aihealueet: ["kaikki"],
      question: null,
      notification: false
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
        notification: true
      })
      setTimeout(() => {
        this.setState({
          notification: false
        })
      }, 5000)
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
      notification: false
    })
  }

  render() {
    // ehdollinen renderöinti this.state.questionin arvon mukaan
    switch(this.state.question) {
      default:
        return(
          <Container>
          <Title/>
          <div style={homeScreenAlign}>
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
          <div style={genQButtonStyle}>
          <Button size="massive" color="green" onClick={this.newQuestion}>Arvo kysymys</Button>
          </div>
          {this.state.notification === true ? <Notification notification='Valitse aihealue!'/> : null}
          </div>
          </Container>
        )
      case "kaikki":
        const kysList = [maantiede, historia, luonto, kulttuuri, urheilu, viihde]
        const rndAihe = Math.floor(Math.random() * kysList.length)
        const rndKys = Math.floor(Math.random() * kysList[rndAihe].kysymykset.length)
        const kysymys = kysList[rndAihe].kysymykset[rndKys]
        const vastaus = kysList[rndAihe].vastaukset[rndKys]

        let categoryName = null

        switch(kysList[rndAihe]) {
          case maantiede:
        categoryName = <Icon color="blue" name="big world"/>
          break;
          case historia:
        categoryName = <Icon color="yellow" name="big hourglass end"/>
          break;
          case luonto:
        categoryName = <Icon color="green" name="big tree"/>
          break;
          case kulttuuri:
        categoryName = <Icon color="brown" name="big book"/>
          break;
          case urheilu:
        categoryName = <Icon color="orange" name="big soccer"/>
          break;
          case viihde:
        categoryName = <Icon color="pink" name="big music"/>
          break;
        }

        return(
          <Container style={genQButtonStyle}>
          <Title/>
          <div id="questionScreen">
            <p>{categoryName}</p>
            <h1 id="questionHeader">{kysymys}</h1>
            <Togglable buttonLabel="Näytä vastaus">
              <p id="vastausHeader">{vastaus}</p>
            </Togglable>
            <br/>
            <div>
            <Button color="green" onClick={this.newQuestion}>Arvo uusi</Button>
            </div>
            <Button color="blue" onClick={this.reset}>Valitse aihealueet uudelleen</Button>
          </div>
          </Container>
        )
        case "maantiede":
        return(
          <QuestionScreen aihealue={maantiede} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="blue" name="big world"/>}/>
        )
        case "historia":
        return(
          <QuestionScreen aihealue={historia} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="yellow" name="big hourglass end"/>}/>
        )
        case "luonto":
        return(
          <QuestionScreen aihealue={luonto} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="green" name="big tree"/>}/>
        )
        case "kulttuuri":
        return(
          <QuestionScreen aihealue={kulttuuri} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="brown" name="big book"/>}/>
        )
        case "urheilu":
        return(
          <QuestionScreen aihealue={urheilu} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="orange" name="big soccer"/>}/>
        )
        case "viihde":
        return(
          <QuestionScreen aihealue={viihde} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="pink" name="big music"/>}/>
        )
    }
  }
}

const genQButtonStyle = {
  textAlign: "center",
}

const homeScreenAlign = {
  textAlign: 'center'
}

export default App