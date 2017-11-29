import React from 'react';
import ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import App from './components/App';
import './stylesheets/index.css';

initializeIcons();
ReactDOM.render(
  <Fabric>
    <App />
  </Fabric>, document.getElementById('root')
);
