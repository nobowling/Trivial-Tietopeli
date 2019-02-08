import React from 'react'
import {Checkbox, Icon} from 'semantic-ui-react'

const HomeScreen = ({handleAll, handleMaantiede, handleHistoria, handleLuonto, handleKulttuuri, handleUrheilu, handleViihde}) => {
    return(
    <div className="App">
        <div id="checkboxes">
            <Checkbox style={checkboxStyle} label="Kaikki" onChange={handleAll} defaultChecked toggle/><br />
            <Checkbox style={checkboxStyle} label="Maantiede" onChange={handleMaantiede} toggle/><Icon style={iconStyle} color="blue" name="big world"/><br />
            <Checkbox style={checkboxStyle} label="Historia" onChange={handleHistoria} toggle/><Icon style={iconStyle} color="yellow" name="big hourglass end"/><br />
            <Checkbox style={checkboxStyle} label="Luonto ja tiede" onChange={handleLuonto} toggle/><Icon style={iconStyle} color="green" name="big tree"/><br />
            <Checkbox style={checkboxStyle} label="Kulttuuri" onChange={handleKulttuuri} toggle/><Icon style={iconStyle} color="brown" name="big book"/><br />
            <Checkbox style={checkboxStyle} label="Urheilu ja vapaa-aika" onChange={handleUrheilu} toggle/><Icon style={iconStyle} color="orange" name="big soccer"/><br />
            <Checkbox style={checkboxStyle} label="Viihde" onChange={handleViihde} toggle/><Icon style={iconStyle} color="pink" name="big music"/><br />
        </div>
    </div>
    )
}

const checkboxStyle = {
    fontSize: "25px",
    padding: "10px"
}

const iconStyle = {
    marginBottom: "15px"
}

export default HomeScreen