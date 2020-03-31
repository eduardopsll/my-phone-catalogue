import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { ErrorBoundary, List, Spinner } from "../index";
import { selectIsFetching } from "../../redux/selectors";
import { fetchPhones } from "../../redux/actions";

import "./App.scss";

const LazyCard = React.lazy(() => import("../Card/Card"));

export function App() {
  const dispatch = useDispatch();
  const isFetchingPhones = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(fetchPhones());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorBoundary>
      <div className="app">
        <header className="app__header">
          <h1 title="My phone Catalogue" className="app__title">
            My Phone Catalogue
          </h1>
        </header>
        <section className="app__container">
          {isFetchingPhones ? (
            <Spinner />
          ) : (
            <div className="app__content">
              <List />
              <Suspense fallback={<Spinner />}>
                <Route path="/:id">
                  <LazyCard />
                </Route>
              </Suspense>
            </div>
          )}
        </section>
      </div>
    </ErrorBoundary>
  );
}

export default App;
