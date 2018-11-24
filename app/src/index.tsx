import React from 'react';
import ReactDOM from 'react-dom';

import Table from './components/Table';

const Root = () => <Table />;

const App = document.getElementById('app');

if (App) ReactDOM.render(<Root />, App);
