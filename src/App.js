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
    "Kuinka monta prosenttia maapallon väestöstä asuu Aasiassa (tasakymmenluku)?",
    "Mikä on asukasluvultaan selkeästi suurin Kiinan itsehallintoalue?",
    "Kuinka monta valtiota sijaitsee Arabian niemimaalla?",
    "Missä islaminuskon pyhin moskeija Masjid al-Haram sijaitsee?",
    "Mikä on Kalifornian osavaltion pääkaupunki?",
    "Mitä Yhdysvaltain lipun 13 vaakaraitaa kuvaavat?",
    "Minä päivämääränä Yhdysvallat itsenäistyi?",
    "Mikä on Pohjois-Amerikassa sijaitseva maailman pisin poimuvuoristo?",
    "Mikä on asukasluvultaan Pohjois-Amerikan toiseksi suurin valtio?",
    "Mikä on Haitin pääkaupunki?",
    "Mikä on Hondurasin pääkaupunki?",
    "Mikä on noin neljällä miljoonalla asukkaallaan asukasluvultaan Pohjois-Amerikan suurin epäitsenäinen valtio?"
  ],
  vastaukset: [
    "51",
    "Aasia ja Afrikka",
    "Moskova",
    "Kaspianmereen",
    "Vatikaani",
    "Vaduz",
    "Bryssel",
    "Wellington, Uusi-Seelanti",
    "Tanskan kruunu",
    "Puolan",
    "Färsaarten",
    "Galdhopiggen",
    "Norjalle. BONUS: Se sijaitsee kauempana mantereesta tai muista saarista kuin mikään muu saari maailmassa.",
    "Kemijoki. BONUS: 550 kilometriä",
    "338 000 neliökilometriä",
    "60%",
    "Guangxi (~50 000 000 as.), seuraavaksi suurin Sisä-Mongolia (~30 000 000 as.)",
    "Seitsemän (Saudi-Arabia, Kuwait, Jemen, Oman, Yhdistyneet arabiemiirikunnat, Qatar ja Bahrain)",
    "Mekassa, Saudi-Arabiassa",
    "Sacramento",
    "Alkuperäisten siirtokuntien/osavaltioiden lukumäärää",
    "4.7.1776",
    "Kordillieerit",
    "Meksiko",
    "Port-au-Prince",
    "Tegucigalpa",
    "Puerto Rico"
  ]
}

const historia = {
  kysymykset: [
    "Millä vuosikymmenellä Martin Luther King, Jr. piti kuuluisan puheensa I have a Dream?",
    "Miltä vuosisadalta ensimmäiset Suomea koskevat kirjalliset lähteet ovat tiettävästi peräisin?",
    "Minä vuonna euro korvasi markan Suomen virallisena valuuttana?",
    "Mitkä kolme valtiota muodostivat Akselivaltojen rungon toisessa maailmansodassa?",
    "Minkä sodan seurauksena Yhdistyneet kansakunnat (YK) perustettiin?"
  ],
  vastaukset: [
    "1960",
    "1100-luvulta",
    "2002",
    "Saksa, Japani ja Italia",
    "Toisen maailmansodan"
  ]
}

const luonto = {
  kysymykset: [
    "Mikä on Suomen suurin kansallispuisto?",
    "Mikä on Suomen eteläisin tunturi?",

  ],
  vastaukset: [
    "Lemmenjoen kansallispuisto (2 850 neliökilometriä)",
    "Iso-Syöte, Pudasjärvellä",
  ]
}

const kulttuuri = {
  kysymykset: [
    "Mikä latinankielinen ilmaus tarkoittaa sananmukaisesti sodan aiheuttavaa tapahtumaa?",
    "Missä sijaitsee Tate Modern -taidemuseo?"
  ],
  vastaukset: [
    "Casus belli",
    "Lontoossa"
  ]
}

const urheilu = {
  kysymykset: [
    "Mikä olympialaji on kuulunut talviolympialaisten ohjelmaan vuodesta 1998 lähtien?",
    "Kenen sanotaan juosseen Suomen maailmankartalle?"
  ],
  vastaukset: [
    "Lumilautailu",
    "Hannes Kolehmaisen"
  ]
}

const viihde = {
  kysymykset: [
    "Missä tv-sarjassa Jason Segel esittää juristi Marshall Erikseniä?",
    "Minkä vuonna 1994 ensi-iltansa saaneen elokuvan sanotaan elvyttäneen näyttelijä John Travoltan uran?"
  ],
  vastaukset: [
    "How I Met Your Mother",
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
        aihealueet: [...this.state.aihealueet, "kaikki"],
        notification: false
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
        aihealueet: [...this.state.aihealueet, "maantiede"],
        notification: false
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
        aihealueet: [...this.state.aihealueet, "historia"],
        notification: false
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
        aihealueet: [...this.state.aihealueet, "luonto"],
        notification: false
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
        aihealueet: [...this.state.aihealueet, "kulttuuri"],
        notification: false
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
        aihealueet: [...this.state.aihealueet, "urheilu"],
        notification: false
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
        aihealueet: [...this.state.aihealueet, "viihde"],
        notification: false
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
          <p><strong>Valitse aihealueet aloittaaksesi.</strong></p>
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
          {this.state.notification === true ? <Notification notification='Valitse aihealue!'/> : null}
          <Button size="massive" color="green" onClick={this.newQuestion}>Arvo kysymys</Button>
          </div>
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
        categoryName = <Icon color="blue" name="huge world"/>
          break;
          case historia:
        categoryName = <Icon color="yellow" name="huge hourglass end"/>
          break;
          case luonto:
        categoryName = <Icon color="green" name="huge tree"/>
          break;
          case kulttuuri:
        categoryName = <Icon color="brown" name="huge book"/>
          break;
          case urheilu:
        categoryName = <Icon color="orange" name="huge soccer"/>
          break;
          case viihde:
        categoryName = <Icon color="pink" name="huge music"/>
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
          <QuestionScreen aihealue={maantiede} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="blue" name="huge world"/>}/>
        )
        case "historia":
        return(
          <QuestionScreen aihealue={historia} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="yellow" name="huge hourglass end"/>}/>
        )
        case "luonto":
        return(
          <QuestionScreen aihealue={luonto} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="green" name="huge tree"/>}/>
        )
        case "kulttuuri":
        return(
          <QuestionScreen aihealue={kulttuuri} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="brown" name="huge book"/>}/>
        )
        case "urheilu":
        return(
          <QuestionScreen aihealue={urheilu} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="orange" name="huge soccer"/>}/>
        )
        case "viihde":
        return(
          <QuestionScreen aihealue={viihde} handleClick={this.newQuestion} reset={this.reset} categoryName={<Icon color="pink" name="huge music"/>}/>
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