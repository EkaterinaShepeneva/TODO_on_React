import axios from "axios";
import React, { useEffect, useState } from "react";
import UserData from "./UserData";
import OnLoadingUserData from "./OnLoadingUserData";

function Api() {
  const DataLoading = OnLoadingUserData(UserData);

  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl =
      "https://todo-api-learning.herokuapp.com/v1/tasks/9?order=asc&pp=5&page=4";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons,
      });
    });
  }, [setAppState]);

  return (
    <div className="app">
      <DataLoading isLoading={appState.loading} persons={appState.persons} />
    </div>
  );
}

export default Api;
