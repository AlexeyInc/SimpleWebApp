import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { AskPage } from './AskPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';

import { Header } from './Header';
import { HomePage } from './HomePage';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { fontFamily, fontSize, gray2 } from './Styles';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/ask" component={AskPage} />
          <Route path="/signin" component={SignInPage} />
          {/* <HomePage /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
