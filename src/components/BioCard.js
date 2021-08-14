import React from 'react';

const BioCard = ({bio}) => {
  return (
    <div>
      <h4>{bio.name} - {bio.text}</h4>
    </div>
  )
}

export default BioCard;
