import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchBy}/${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBy">Search by: </label>
        <select
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="breed">Breed</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchBy}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;