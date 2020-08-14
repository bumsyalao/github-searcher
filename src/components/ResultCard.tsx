import React from 'react';

type ResultCardProps = { searchResult: Object };

const ResultCard = ({ searchResult }: ResultCardProps) => (
  <div className="result-card">
    <div className="avatar">
      <img src="" alt="" width="100" height="100"></img>
      <h3>ssl george</h3>
      <button>
        <a href={'google.com'}>View on github</a>
      </button>
    </div>
  </div>
);

export default ResultCard;