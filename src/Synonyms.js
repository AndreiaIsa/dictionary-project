import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key={index}>
                <em>Synonym:</em> {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
