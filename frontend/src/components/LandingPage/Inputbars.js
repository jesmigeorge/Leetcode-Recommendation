import React, {useState} from 'react'
import './inputbars.css';

const Inputbars = ({ onResponse }) => {

    const [topic, setTopic] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const setQValue = (qval) =>{
        setTopic(qval)
    }

    const setDValue = (dval) =>{
        setDifficulty(dval)
    }

    const handleQChange = (event) =>{
        setTopic(event.target.value)
    }

    const handleDChange = (event) =>{
        setDifficulty(event.target.value)
    }

    const handleSubmitdetails = () => {
        const data = {
          value: topic,
          level: difficulty
        };
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  // Set the Content-Type header to application/json
          },
        //   mode: 'cors',
          body: JSON.stringify(data)
        };   
        fetch('http://127.0.0.1:5000/api', requestOptions)
          .then(response => response.json())
          .then(result => {
            // Handle the response from the backend if needed
            console.log(result);
            setTopic('')
            setDifficulty('')
            onResponse(result);
          })
          .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      };
  
    return (
        <div className='container'>
            <h2>Let's Code</h2>
            <div className='row'>
                <div className="col-12 mb-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Topic</button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item btn btn-outline-primary" id='array' onClick={() => setQValue("Array")}>Array</button>
                                <button className="dropdown-item btn btn-outline-primary" id='ll' onClick={() => setQValue("Linked List")}>Linked List</button>
                                <button className="dropdown-item btn btn-outline-primary" id='dp' onClick={() => setQValue("Dynamic Programming")}>Dynammic Programming</button>
                            </div>
                        </div>
                        <input id="form1" type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Select topic" value={topic} onChange={handleQChange}/>
                    </div>
                </div>
                <div className="col-12 mt-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Difficulty</button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item btn btn-outline-secondary" id='level1' onClick={() => setDValue('Beginner')}>Beginner</button>
                                <button className="dropdown-item btn btn-outline-secondary" id='level2' onClick={() => setDValue('Intermediate')}>Intermediate</button>
                                <button className="dropdown-item btn btn-outline-secondary" id='level3' onClick={() => setDValue('Advanced')}>Advanced</button>
                            </div>
                        </div>
                        <input id="form2" type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Select level" value={difficulty} onChange={handleDChange}/>
                    </div>
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" onClick={handleSubmitdetails}/>
        </div>
    )

}


export default Inputbars