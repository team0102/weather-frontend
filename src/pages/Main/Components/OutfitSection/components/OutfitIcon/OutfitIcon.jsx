import React, { useState, useEffect } from 'react';
import './OutfitIcon.scss';

/**
 * OutfitIcon props list
 * @property {string} imageUrl                     - 아이콘에 표시할 image의 url
 */

const OutfitIcon = ({ imageUrl, size }) => {
  return (
    <div className={`outfitIconWrapper`}>
      <img src={imageUrl} />
    </div>
  );
};

export default OutfitIcon;
