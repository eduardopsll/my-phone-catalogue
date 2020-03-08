import React, { useEffect, useState } from "react";
import { take } from "rxjs/operators";

import { Http } from "../../utils";
import { PhoneList, Spinner } from "../index";

import "./App.scss";

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    Http.getPhones$.pipe(take(1)).subscribe(() => {
      setIsAppLoading(() => false);
    });
  });

  return (
    <div className="app">
      <header className="app__header">
        <h1 title="My phone Catalogue" className="header">
          My Phone Catalogue
        </h1>
      </header>
      <section className="app__container">
        {isAppLoading ? <Spinner></Spinner> : <PhoneList></PhoneList>}
      </section>
    </div>
  );
}

export default App;
