import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from "./components/table"
import { logDOM } from '@testing-library/dom';
import Foto from "./assets/images/Mortal.png";
import Card from "./components/Card";
import Picture from "./assets/images/Bariq.jpg";
import Picture2 from "./assets/images/Mikail.jpg";

const data1 = [
  {
    nama: "Ahmad Mikail Afkar",
    nim: "21120118140087",
    email: "mikail13mikail@gmail.com",
    gambar:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG80.png&f=1&nofb=1',
  },
  {
    nama: "Bariq Unggul Pribadi",
    nim: "21120118120005",
    email: "bariqunggul@gmail.com",
    gambar: Foto,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Table 
    data1={data1} 
    judultabel='TABEL KELOMPOK 43 RPLBK 2021'
    />
    <Card content={{
              image: Picture,
              hobby: "Game",
              motto: "Tidak ada hal yang tidak bisa dibeli dengan uang",
            }}
            />
            <Card content={{
              image: Picture2,
              hobby: "Main",
              motto: "Santai",
            }}
            />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
