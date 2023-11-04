import React, { useEffect, useState } from "react";
import axios from "axios";
const UsePost = (url, payload, config) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(url, payload, config);
        if (response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
        return error;
      }
      setLoading(false);
    };
    fetchData();
  });
  return { data, loading, error };
};

export default UsePost;
