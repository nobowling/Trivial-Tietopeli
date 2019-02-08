import React from 'react'
import Togglable from '../components/Togglable'
import {Container, Button} from 'semantic-ui-react'
import Title from '../components/Title'


const QuestionScreen = ({aihealue, handleClick, reset}) => {
    const rnd = Math.floor(Math.random() * aihealue.kysymykset.length)
    const kysymys = aihealue.kysymykset[rnd]
    const vastaus = aihealue.vastaukset[rnd]

    return(
        <Container>
        <Title/>
        <div id="questionScreen">
            <h1 id="questionHeader">{kysymys}</h1>
            <Togglable buttonLabel="Näytä vastaus">
            <p id="vastausHeader">{vastaus}</p>
            </Togglable>
            <br/>
            <Button color="green" onClick={handleClick}>Arvo uusi</Button>
            <Button color="blue" onClick={reset}>Valitse aihealueet uudelleen</Button>
        </div>
        </Container>
    )
}

export default QuestionScreen

