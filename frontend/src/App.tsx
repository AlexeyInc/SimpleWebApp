// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './Store';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';

import { HeaderWithRouter as Header } from './Header';
import HomePage from './HomePage';
import { NotFoundPage } from './NotFoundPage';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';
import { QuestionPage } from './QuestionPage';

const AskPage = lazy(() => import('./AskPage'));

const store = configureStore();

// add form
function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Redirect from="/home" to="/" />
              <Route exact path="/" component={HomePage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/ask">
                <Suspense
                  fallback={
                    <div
                      css={css`
                        margin-top: 100px;
                        text-align: center;
                      `}
                    >
                      Loading...
                    </div>
                  }
                >
                  <AskPage />
                </Suspense>
              </Route>
              <Route path="/signin" component={SignInPage} />
              <Route path="/questions/:questionId" component={QuestionPage} />
              <Route component={NotFoundPage} />
            </Switch>
            {/* <HomePage /> */}
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
