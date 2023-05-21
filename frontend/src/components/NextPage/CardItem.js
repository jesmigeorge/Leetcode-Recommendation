import React from 'react'

function CardItem(props) {
  let title = props.title
  console.log(title)
  let link = props.link
  console.log(link)
  return (
    <div>
        <div className="card" style={{width: "20rem"}}>
            <img className="card-img-top" src="https://leetcode.com/static/images/LeetCode_Sharing.png" alt="Card image cap" />
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <a href={link} className="btn btn-primary">Solve</a>
            </div>
        </div>
    </div>
  )
}

export default CardItem


{/* <h2>Let's Code</h2>
        {props.array.map((item, index) =>{
          <div key={index} className="card" style={{width: "20rem"}}>
          <img className="card-img-top" src="https://leetcode.com/static/images/LeetCode_Sharing.png" alt="Card image cap" />
          <div className="card-body">
              <h6 className="card-title">{item[0]}</h6>
              <a href={item[1]} target="_blank" className="btn btn-primary">Solve</a>
          </div>
      </div>
        })} */}