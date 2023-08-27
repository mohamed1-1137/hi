import React, { useState } from "react";
import Flashcard from "./Flashcard.js";

const Containes = () => {
  const [data, setData] = useState(data_contain);
  return (
    <div className="parent">
      {data.map((dataI) => {
        return <Flashcard key={dataI.id} data={dataI} />;
      })}
    </div>
  );
};

const data_contain = [
  {
    id: "1",
    question: "quesiont_one",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    id: "2",
    question: "quesiont_two",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    id: "3",
    question: "quesiont_three",
    options: ["9", "10", "11", "12"],
    answer: "10"
  },
  {
    id: "4",
    question: "quesiont_four",
    options: ["13", "14", "15", "16"],
    answer: "14"
  }
];

export default Containes;
