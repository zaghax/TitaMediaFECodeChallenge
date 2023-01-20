import React, {useEffect, useState} from 'react';
import useHttp from './utils/hooks/useHttp';
import { usersDataTypes } from './types/types';



function App() {

  const {data, isLoading, error} = useHttp('user');

  const [dataUsers, setUsersData] = useState<usersDataTypes>();

  useEffect(() => {
    setUsersData(data)
  },[data])

  return (
    <div className="App">
      {!isLoading && !error && <h1>Hi Test {dataUsers?.data.length}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Upps, Something went wrong: {error}</h1>}
    </div>
  );
}

export default App;
