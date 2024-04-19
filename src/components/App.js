
import React, { useEffect, useState } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  function DataFetch() {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data);
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    DataFetch();
    return () => {

    }
  }, []);

  return (
    <div>
        {/* Do not remove the main div */}
        {isLoading ? (<p>Loading...</p>) : error ? (<p>Error: {error}</p>) : (<pre>Data Fetched from API<h1></h1>{JSON.stringify(data, null, 2)}</pre>)}
    </div>
  )
}

export default App
