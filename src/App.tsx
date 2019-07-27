/* eslint-disable import/first */

import React from 'react';
import './App.css';

import { Layout } from 'antd';

import Banner from './components/Banner';
import About from './components/About';
import Contacts from './components/Contacts';

const App: React.FC = () => {
  return (
    <Layout className="page-wrapper">
      <Banner />
      <About />
      <Contacts />
    </Layout>
  );
}

export default App;
