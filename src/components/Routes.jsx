import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import SingleDog from "./SingleDog";
import SearchResults from "./SearchResults";

const RRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>        
        <Route path="/:id" element={<SingleDog />}></Route>
        <Route path="/search/:searchBy/:searchTerm" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default RRoutes;