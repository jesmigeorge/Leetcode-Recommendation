import React from 'react'
import CardItem from './CardItem'

function Cards(props) {
  return (
    <div>
        <h2>Let's Code</h2>
        <div className="row">
        {props.array.map((element)=>{ 
              return <div className="col-md-4 my-2" key={element.value}>
              <CardItem title={element.value} link={element.link}/>
            </div>
        })}
    </div>
    </div>
  )
}

export default Cards