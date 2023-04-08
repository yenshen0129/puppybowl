import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PuppieCard from "./puppieCard";
import { fetchAllPuppies } from "../API/fetchPuppys";

const SearchResults = () => {
  const { searchBy, searchTerm } = useParams();
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const fetchPuppies = async () => {
      const allPuppies = await fetchAllPuppies();
      const filteredPuppies = allPuppies.filter((puppy) =>
        puppy[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPuppies(filteredPuppies);
    };
    fetchPuppies();
  }, [searchBy, searchTerm]);

  return (
    <div className="AllPuppies">
      {puppies.map(({ id, name, breed, status, imageUrl }) => (
        <div key={id}>
          <PuppieCard
            id={id}
            name={name}
            breed={breed}
            status={status}
            imageUrl={imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;