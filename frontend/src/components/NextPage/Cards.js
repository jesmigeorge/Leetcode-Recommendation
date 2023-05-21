import React from 'react'
import CardItem from './CardItem'
// import './card.css';

function Cards(props) {

  return (
    <div className='container'>
        <h2>Let's Code</h2>
        <div className="row mx-5">
          {props.array.map((element, index)=>{ 
                return <div className="col-md-4 my-2" key={index}>
                <CardItem title={element[0]} link={element[1]}/>
              </div>
          })}
      </div>
    </div>
  )
}

export default Cards