import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const i = {
  BASE_URL: "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT",
  P: "/players",
  T: "/teams",
};

const SingleDog = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState({});
  //console.log(params);
  useEffect(() => {
    const fetchPuppy = async () => {
      const { BASE_URL, P } = i;
      const response = await fetch(BASE_URL + P + `/${id}`);
      const {
        data: { player },
      } = await response.json();
      console.log(player);
      setPlayer(player);
    };

    fetchPuppy();
  }, []);

  return (
    <div>
      <img
        style={{
          height: "200px",
          width: "200px",
        }}
        src={player.imageUrl}
      />
      <h4>{player.name}</h4>
     
      <button
        onClick={async () => {
          //await deletePuppyById(player.id);
          //navigate(`/`);
        }}
      >
        Delete Puppy
      </button>
    </div>
  );
};

export default SingleDog;