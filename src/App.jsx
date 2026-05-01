import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./Page/SharedLayout/SharedLayout";
import Home from "./Page/Home/Home";
import Iphone from "./Page/Iphone/Iphone";
import SingleProduct from "./Page/Iphone/SingleProduct";

const Mac = () => <div className="container mt-5 pt-5"><h1>Mac Page</h1></div>;
const Ipad = () => <div className="container mt-5 pt-5"><h1>iPad Page</h1></div>;
const Watch = () => <div className="container mt-5 pt-5"><h1>Watch Page</h1></div>;
const Tv = () => <div className="container mt-5 pt-5"><h1>TV Page</h1></div>;
const Music = () => <div className="container mt-5 pt-5"><h1>Music Page</h1></div>;
const Support = () => <div className="container mt-5 pt-5"><h1>Support Page</h1></div>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:id" element={<SingleProduct />} />
        <Route path="mac" element={<Mac />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
}

export default App;
