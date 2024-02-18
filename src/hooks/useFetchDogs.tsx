import React from "react";
import axios from "axios";

export const useFetchDogs = () => {
  const [dog, setDog] = React.useState<string>("");

  React.useEffect(() => {
    axios.get("https://dogapi.dog/api/v2/facts").then((res) => {
      setDog(res.data.data[0].attributes.body);
    });
  }, []);

  return {
    dog,
  };
};
