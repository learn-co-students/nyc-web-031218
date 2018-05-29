import React from 'react';

const withAuth = (ComponentToWrap) => {


  return class extends React.Component {


    componentDidMount(){
      if (!localStorage.getItem('token')) {
        this.props.history.push("/login");
      }
    }

    render(){
      return <ComponentToWrap foo="bar" { ...this.props} />
    }
  }
}

export default withAuth