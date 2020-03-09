import React, { useEffect } from "react";
import { connect } from "react-redux";

import { PhoneList, Spinner } from "../index";
import { isFetchingSelector } from "../../redux/selectors";
import { fetchPhones } from "../../redux/actions";

import "./App.scss";

export function App({ isFetchingPhones, fetchPhones }) {
  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1 title="My phone Catalogue" className="header">
          My Phone Catalogue
        </h1>
      </header>
      <section className="app__container">
        {isFetchingPhones ? <Spinner></Spinner> : <PhoneList></PhoneList>}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetchingPhones: isFetchingSelector(state)
  };
};

const mapDispatchToProps = { fetchPhones };

export default connect(mapStateToProps, mapDispatchToProps)(App);
