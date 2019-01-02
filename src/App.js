import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainContainer from './containers/MainContainer/MainContainer';
import MessageContainer from './containers/MessageContainer/MessageContainer';
import Profile from './containers/Profile/Profile';
import { Container, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <BrowserRouter>
          <div>
            <Header />
            <NavBar />
            <Grid>
              <div className="ui row">
                <div className="sixteen wide column">
                  <Route path="/" exact component={MainContainer} />
                  <Route path="/profile" exact component={Profile} />
                  <Route path="/messages" exact component={MessageContainer} />
                </div>
              </div>
            </Grid>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
