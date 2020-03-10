import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { List, Spinner } from "../index";
import { isFetchingSelector } from "../../redux/selectors";
import { fetchPhones } from "../../redux/actions";

import "./App.scss";

export function App() {
  const dispatch = useDispatch();
  const isFetchingPhones = useSelector(isFetchingSelector);

  useEffect(() => {
    dispatch(fetchPhones());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1 title="My phone Catalogue" className="app__title">
          My Phone Catalogue
        </h1>
      </header>
      <section className="app__container">{isFetchingPhones ? <Spinner /> : <List />}</section>
    </div>
  );
}

export default App;
