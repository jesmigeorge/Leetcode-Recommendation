
import React, { useState } from 'react';
import Inputbars from './components/LandingPage/Inputbars';
import Cards from './components/NextPage/Cards';

function App() {
  // useEffect(() => {
  //   fetch('http://localhost:5000/api')  // Assuming your Flask route is '/api'
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error));
  // }, []);

  

  return (
    <div>
      <Inputbars/>
      {/* {result && <Cards array={result}/>} */}
    </div>
  );
}

export default App;
