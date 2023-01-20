import React, {useEffect} from 'react';

function App() {

  const APIKEY = process.env.REACT_APP_DUMMYAPIKEY;

  const fetchData = async () => {
    const request = await fetch('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109d6/post', {
      headers: {
        'app-id': APIKEY || ''
      }
    });

    const data = await request.json();
    console.log(data);
  } 

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="App">
     <h1>Hi Test {APIKEY} </h1>
    </div>
  );
}

export default App;
