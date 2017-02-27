import React, { Component } from 'react';
import {Layout, Panel, AppBar} from 'react-toolbox';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Layout className={styles.App}>
        <Panel>
          <AppBar>
            <img src={logo} className={styles.AppLogo} alt="logo" />
          </AppBar>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <h2>Welcome to My Fullstack Chat!</h2>
            <p className={styles.AppIntro}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Panel>
      </Layout>
    );
  }
}

export default App;
