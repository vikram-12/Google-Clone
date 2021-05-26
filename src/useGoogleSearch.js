import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = " 686b597beacd99d4b ";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyBB70w7gnWkfSg2DHrdMHex44e0Izi0G0Q&cx=686b597beacd99d4b&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
