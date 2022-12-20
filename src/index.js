import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LandingPage,
  PilihPenerbangan,
  IsiDetail,
  About,
  Experience,
  ProfileSaya,
  EditProfile,
  PesananSaya,
  Sukses,
  DashboardAdmin,
  Register,
  Destinations,
  AllDestinations,
  DeatailDestinations,
  Login,
  Protected,
  DashboardDetail,
  AddMaskapai,
  EditMaskapai,
  DaftarPesanan,
  Wishlist
} from "./components";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

import Admin from './pages/Admin';
import Maskapai from './pages/Maskapai';
import Pesanan from './pages/Pesanan';

const reduxDevToolsExtension = false;

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/pilih-penerbangan" element={
              <PilihPenerbangan />
          } />
        </Routes>
        <Routes>
          <Route path="/isi-detail" element={<IsiDetail />} />
        </Routes>
        <Routes>
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
        <Routes>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/sukses" element={<Sukses />} />
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={<DashboardAdmin />} />
          <Route exact path="/dashboard/detail/:id" element={<DashboardDetail />} />
          <Route exact path="/dashboard/edit/:id" element={<EditMaskapai />} />
          <Route path="/dashboard/create" element={<AddMaskapai />} />
          <Route path="/dashboard/daftar-pesanan" element={<DaftarPesanan />} />
        </Routes>
        <Routes>
          <Route path="/profile-saya" element={<ProfileSaya />} />
        </Routes>
        <Routes>
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
        <Routes>
          <Route path="/pesanan-saya" element={<PesananSaya />} />
        </Routes>
        <Routes>
          <Route exact path="/all-destination" element={<AllDestinations />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Routes>
          <Route path="/detail-destination/:id" element={<DeatailDestinations />} />
        </Routes>
        <Routes>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/daftar-maskapai' element={<Maskapai/>} />
          <Route path='/daftar-pesanan' element={<Pesanan/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
