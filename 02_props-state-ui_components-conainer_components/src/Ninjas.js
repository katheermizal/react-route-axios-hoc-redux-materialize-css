import React from 'react';

/**
 * 
 * UI || Functional|| Stateless Componets
 * Has to pass (props)
 * instead of (props) can pass array value like
 * -  ({ninjas, age, story})
 * in container components no need to pass props
 * no need render method
 */

const Ninjas = ({ ninjas, deleteNinja }) => {
  ///console.log(this.props);
  //const { ninjas } = this.props;

  // const ninjasList = ninjas.map( ninja => {
  //   if(ninja.age > 20){
  //     return (
  //       <div className="App" key= { ninja.id }>
  //         <p>Name: { ninja.name } </p>
  //         <p>Age: { ninja.age }</p>
  //         <p>Belt: { ninja.belt }</p>
  //         <hr />
  //       </div>
  //     )
  //   }
  //   else {
  //     return null
  //   }
  // })

  /**
   * USING TURNERY OPERATORS
   */
  const ninjasList = ninjas.map (ninja => {
    //condition ? () : ();
    return ninja.age > 29 ? (
      <div className="App" key= { ninja.id }>
        <p>Name: { ninja.name } </p>
        <p>Age: { ninja.age }</p>
        <p>Belt: { ninja.belt }</p>
        <button onClick={() => {deleteNinja(ninja.id)}}> X </button>
      </div>
    ) : null;
  })

  return (
    <div className="ninjaList">
      { ninjasList }

      or 

      {
        ninjas.map (ninja => {
          //condition ? () : ();
          return ninja.age > 29 ? (
            <div className="App" key= { ninja.id }>
              <p>Name: { ninja.name } </p>
              <p>Age: { ninja.age }</p>
              <p>Belt: { ninja.belt }</p>
              <hr />
            </div> 
          ) : null;
        })
      }
    </div>
  ) 
}

export default Ninjas;