import React from 'react'

function CardItem(props) {
  return (
    <div>
        <div className="card" style={{width: "20rem"}}>
            <img className="card-img-top" src="https://leetcode.com/static/images/LeetCode_Sharing.png" alt="Card image cap" />
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <a href={props.link} className="btn btn-primary">Solve</a>
            </div>
        </div>
    </div>
  )
}

export default CardItem