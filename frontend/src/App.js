
import React, { useState } from 'react';
import Inputbars from './components/LandingPage/Inputbars';
import Cards from './components/NextPage/Cards';

function App() {
  const [result, setResult] = useState(null)

    const handleResponse = (response) => {
        setResult(response)
        console.log('hey man i worked')
        console.log(response)
    }

  return (
    <div>
      {!result && <Inputbars onResponse={handleResponse}/>}
      {result && <Cards array={result}/>}
    </div>
  );
}

export default App;
