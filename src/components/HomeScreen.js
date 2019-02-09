import React from 'react'
import {Checkbox, Icon} from 'semantic-ui-react'

const HomeScreen = ({handleAll, handleMaantiede, handleHistoria, handleLuonto, handleKulttuuri, handleUrheilu, handleViihde}) => {
    return(
    <div className="App">
        <div id="checkboxes">
            <Checkbox style={checkboxStyle} label="Kaikki" onChange={handleAll} defaultChecked toggle/><Icon style={iconStyle} color="yellow" name="huge smile outline"/><br />
            <Checkbox style={checkboxStyle} label="Historia" onChange={handleHistoria} toggle/><Icon style={iconStyle} color="yellow" name="huge hourglass end"/><br />
            <Checkbox style={checkboxStyle} label="Luonto ja tiede" onChange={handleLuonto} toggle/><Icon style={iconStyle} color="green" name="huge tree"/><br />
            <Checkbox style={checkboxStyle} label="Kulttuuri" onChange={handleKulttuuri} toggle/><Icon style={iconStyle} color="brown" name="huge book"/><br />
            <Checkbox style={checkboxStyle} label="Maantiede" onChange={handleMaantiede} toggle/><Icon style={iconStyle} color="blue" name="huge world"/><br />
            <Checkbox style={checkboxStyle} label="Urheilu ja vapaa-aika" onChange={handleUrheilu} toggle/><Icon style={iconStyle} color="orange" name="huge soccer"/><br />
            <Checkbox style={checkboxStyle} label="Viihde" onChange={handleViihde} toggle/><Icon style={iconStyle} color="pink" name="huge music"/><br />
        </div>
    </div>
    )
}

const checkboxStyle = {
    fontSize: "25px",
    padding: "10px",
    border: 'solid 1px',
    width: '330px',
    borderRadius: '5px',
    margin: '3px',
    textAlign: 'center',
    height: '50px',
    verticalAlign: 'middle'
}

const iconStyle = {
    marginBottom: "5px"
}

export default HomeScreen