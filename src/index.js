import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
        {
            id: 512,
            name: "Neil Rhodes",
            email: "rhodes@hmc.edu",
            phone: "(909) 555-1212"
        },
        {
            id: 787,
            name: "Barack Obama",
            email: "ex-prez@whitehouse.gov",
            phone: "(312) 555-1212"
        }
    ];

const listItems = data.map(
    e => <li key={e.id}> <div id="name">{e.name}</div> <div id="email">{e.email}</div> <div id="phone">{e.phone}</div> </li>
);

ReactDOM.render(
    <div>
        <h1>People</h1>
        <ul>
            {listItems}
        </ul>
    </div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
