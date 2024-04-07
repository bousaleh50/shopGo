import React from 'react';
import ContentLoader from 'react-content-loader';

const ItemLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={100}
    viewBox="0 0 300 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100vw" height="30" />
  </ContentLoader>
);

export default ItemLoader;
