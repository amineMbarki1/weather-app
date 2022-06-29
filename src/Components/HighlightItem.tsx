import React from 'react';

import '../styles/HighlightItem.scss';

interface Props {
  children: JSX.Element;
}

const HighlightItem: React.FC = () => {
  return (
    <div className="highlight-card">
      <span className="highlight-card__title">Wind status</span>
      <div>
        <span className="highlight-card__value">7</span>
        <span className="highlight-card__unit">mph</span>
      </div>
    </div>
  );
};

export default HighlightItem;
