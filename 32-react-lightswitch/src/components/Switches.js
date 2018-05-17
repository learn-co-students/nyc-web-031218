import React from 'react'
import Lightswitch from './Lightswitch'
import LightswitchForm from './LightswitchForm'
import UUID from 'uuid'


export default class Switches extends React.Component {
  state =  {
    rooms: [
    { 
      id: 1,
      name: "Dining Ro00000000om",
      isOn: false
    },
    { 
      id: 2,
      name: "Living Room",
      isOn: true
    },
    { 
      id: 3,
      name: "BathRoom",
      isOn: false
    },
    { 
      id: 4,
      name: "Bedroom",
      isOn: false
    },
    { 
      id: 5,
      name: "Kitchen",
      isOn: false
    },
    { 
      id: 6,
      name: "Den",
      isOn: false
    }]
  }

  toggleAll = () => {
    // this.state.rooms.forEach((room) => room.isOn = !room.isOn);
    const rooms = this.state.rooms.map((room) => { 
      return ({ ...room, isOn: !room.isOn })
    })

    this.setState({
      rooms: rooms
    })
  }

  toggleOne = (name) => {

    const rooms = this.state.rooms.map((room) => { 
      if (room.name === name)
        return ({ ...room, isOn: !room.isOn })
      else
        return room
    })

    this.setState({
      rooms
    })
  }

  createSwitch = (room) => {
    const newRoom = {
      ...room,
      id: UUID(),
    }

    this.setState({
      rooms: [ ...this.state.rooms, newRoom ]
    })
  }

  render() {
    const rooms = this.state.rooms.map((room) => {
      return <Lightswitch key={ room.id } room={ room } toggleFunction={ this.toggleOne }  />
    });

    return (
      <div>
        <button onClick={ this.toggleAll }>Toggle all</button>
        <LightswitchForm newRoom={ this.createSwitch } />
        <div>{ rooms }</div>
      </div>
    );
  }

}