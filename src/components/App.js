
import React, { useEffect, useState } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data found</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App
