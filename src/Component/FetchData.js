import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchFunction = async (url) => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFunction(url);
  }, [url]);
  return [data];
};
export default useFetchData;
