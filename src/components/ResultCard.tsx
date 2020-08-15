import React from 'react';

type ResultCardProps = { searchResult: any };

const ResultCard = ({ searchResult }: ResultCardProps) => (
  <div className="result-card">
    <img src={searchResult.avatar_url ? searchResult.avatar_url : searchResult.owner.avatar_url} alt="user-avatar_url" width="60" height="60"></img>
    <h3>{searchResult.login ? searchResult.login : searchResult.full_name}</h3>
    <a href={searchResult.html_url} rel="noopener noreferrer"
      target="_blank">View on github</a>
  </div>
);

export default ResultCard;