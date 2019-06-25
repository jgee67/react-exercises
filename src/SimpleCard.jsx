import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';

const SimpleCard = ({ item }) => (
  <div>
    <Image url={item.imageUrl} />
    <Title text={item.title} />
    <Description text={item.description} />
  </div>
);

export default SimpleCard;
