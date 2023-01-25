import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import ReactKomponent from './latihanKomponen/classKomponenReact';
// import ReactKomponen1 from './latihanKomponen/classKomponenConstructor';
// import FunctionalKomponen from './latihanKomponen/functionalKomponen';
// import KalkulatorPertambahan from './latihanKomponen/KalkulatorTambah';
// import KalkulatorPengurangan from './latihanKomponen/KalkulatorKurang';
// import KalkulatorPerkalian from './latihanKomponen/KalkulatorKali';
// import KalkulatorPembagian from './latihanKomponen/KalkulatorBagi';
// import KirimNama from './ParentChild/kirimdatanama';
// import ParentComponentFunction from './ParentChild/functionKomponen';
// import KirimAngka from './ParentChild/kirimangka';
// import KirimTabel from './ParentChild/dataparent';
// import ReactTable from './ParentChild/datatablereactparent';
import PathRoutes from './Routes/routes';
import store from './Redux/Store';
         
//ReactDOM.render(ReactComponent,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReactKomponent /> */}
    {/* <ReactKomponen1 /> */}
    {/* <FunctionalKomponen/> */}
    {/* <KalkulatorPertambahan/> */}
    {/* <KalkulatorPengurangan/> */}
    {/* <KalkulatorPerkalian/> */}
    {/* <KalkulatorPembagian/> */}
    {/* <KirimNama/> */}
    {/* <ParentComponentFunction/> */}
    {/* <KirimTabel/> */}
    {/* <KirimAngka/> */}
    {/* <ReactTable/> */}
    <Provider store = {store}>
        <PathRoutes/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
