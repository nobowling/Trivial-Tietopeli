import React from 'react'
import Togglable from '../components/Togglable'
import {Container, Button} from 'semantic-ui-react'

const QuestionScreen = ({aihealue, handleClick}) => {
    const rnd = Math.floor(Math.random() * aihealue.kysymykset.length)
    const kysymys = aihealue.kysymykset[rnd]
    const vastaus = aihealue.vastaukset[rnd]
    return(
        <Container>
        <div id="questionScreen">
            <h1 id="questionHeader">{kysymys}</h1>
            <Togglable buttonLabel="Näytä vastaus">
            <p>{vastaus}</p>
            </Togglable>
            <Button color="green" onClick={handleClick}>Arvo uusi</Button>
        </div>
        </Container>
    )
}

export default QuestionScreen

