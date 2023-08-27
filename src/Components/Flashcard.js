import React from "react";

const Flashcard = ({ data }) => {
  return (
    <div className="flashcard">
      <div>
        {/* title of the question */}
        <div>{data.question}</div>

        {/* options of the question */}
        <div>
          <ul className="the_options">
            {data.options.map((option) => {
              return <li className="options">{option}</li>;
            })}
          </ul>
        </div>
      </div>
      {/* the answers */}
      <div className="answer">{data.answer}</div>
    </div>
  );
};

export default Flashcard;
