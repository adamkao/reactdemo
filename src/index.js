import React from 'react';
import { render } from 'react-dom';

import Login from './Login';
import Sortable from './Sortable';
import Tabs from './Tabs';
require('./styles.css');

export
function App() {
	return (
		<div>
			<Login></Login>
			<p>hello</p>
			<Tabs>
				<div label="Setup 1">
					<Sortable></Sortable>
            		<p><button>Submit 1</button></p>
				</div>
				<div label="Setup 2">
					<Sortable></Sortable>
            		<p><button>Submit 2</button></p>
				</div>
				<div label="Setup 3">
					<Sortable></Sortable>
            		<p><button>Submit 3</button></p>
				</div>
				<div label="Setup 4">
					<Sortable></Sortable>
            		<p><button>Submit 4</button></p>
				</div>
				<div label="Setup 5">
					<Sortable></Sortable>
            		<p><button>Submit 5</button></p>
				</div>
				<div label="Setup 6">
					<Sortable></Sortable>
            		<p><button>Submit 6</button></p>
				</div>
			</Tabs>
		</div>
	);
}

const container = document.createElement('div');
document.body.appendChild(container);
render(<App />, container);
