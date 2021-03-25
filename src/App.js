import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Resume from './components/Pages/Resume';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Projects from './components/Pages/Projects';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>

    <Container>
    
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg= {3}>
        <Profile/>
        </Grid>
        <Grid item xs>
          <Router>
            <Switch>

          <Route exact path = '/'>
            <Resume/>
          </Route>

          <Route path = '/about'>
            <About/>
          </Route>

          <Route path = '/contact'>
            <Contact/>
          </Route>

          <Route path = '/projects'>
            <Projects/>
          </Route>

          </Switch>
          </Router>
        </Grid>
      </Grid>

    </Container>
   <Footer/>
    </div>
  );
  }
export default App;
