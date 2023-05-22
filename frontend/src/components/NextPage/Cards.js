import React from 'react'
import CardItem from './CardItem'

function Cards(props) {

  return (
    <div style={{backgroundColor: "#97cdf0"}}>
        <h2>Let's Code</h2>
        <div className="row mx-5 px-5">
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