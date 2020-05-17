import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderMenu from './components/Header/HeaderMenu';
import ROUTES_LINK from './routers/index';
import { StyledContainer, StyledLayout } from './components/Layout/Layout.styled';

function App() {
  return (
    <div className="body">
      <BrowserRouter>

        <StyledLayout>
          <HeaderMenu />


          <StyledContainer>
            <Switch>
              {
                ROUTES_LINK.map((route, index) => {
                  return (
                    <Route key={index} exact={route.exact} path={route.path}>
                      {route.render()}
                    </Route>
                  )
                })
              }
            </Switch>
          </StyledContainer>

        </StyledLayout>

      </BrowserRouter>
    </div>
  );
}

export default App;
