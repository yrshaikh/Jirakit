import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup.tsx';
import './index.css';

render(<Popup />, window.document.querySelector('#app-container'));
