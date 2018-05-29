import React from 'react'


export default (ComponentToWrap) => {
  
  return class extends React.Component {

    render(){
      return <div className="borderify">
        <ComponentToWrap border={ true } { ...this.props } />
      </div>
    }

  }

}