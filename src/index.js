import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';
import Store from './Store.js';

const store = createStore(Store);

ReactDOM.render(
  <Provider store={store}>
		<div role="main">
			<main>
				<article className="content-main">
					<div className='wrapper'>
						<App />
					</div>
				</article>
			</main>
		</div>
  </Provider>,
  document.getElementById('root')
);
