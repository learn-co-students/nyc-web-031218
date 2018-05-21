import React from 'react';

export default (props) =>  {
  return (
     <article>
      <h2>{ props.adjective } Spice</h2>
      <img src={ props.gif } alt="{ this.props.adjective } Spice" />
     </article> 
  );
}

