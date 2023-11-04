import React, { useEffect, useState } from "react";
import axios from "axios";
const UseFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(res.data);
      } catch (error) {
        console.log("error in fetching the data");
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  console.log(data);
  return { data, loading, error };
};

export default UseFetch;
