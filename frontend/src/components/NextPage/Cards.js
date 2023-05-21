import React from 'react'
import CardItem from './CardItem'

function Cards(props) {
  


  return (
    <div>
        <h2>Let's Code</h2>
        <div className="row">
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