import React, { useState, useEffect } from 'react';
import './OutfitIcon.scss';

/**
 * OutfitIcon props list
 * @property {string} imageUrl                     - 아이콘에 표시할 image의 url
 * @property {string} size: 'sm' ~ 'lg'         - 아이콘 사이즈를 결정
 */

const OutfitIcon = ({ imageUrl, size }) => {
  return (
    <div className={`outfitIconWrapper ${size ? size : ''}`}>
      <img src={imageUrl} />
    </div>
  );
};

export default OutfitIcon;
