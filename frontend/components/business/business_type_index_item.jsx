import React from 'react';

export const BusinessTypeIndexItem = ({ type }) => {
  return (
    <li key={`type-${type.id}`}>{type.name}</li>
  );
};
