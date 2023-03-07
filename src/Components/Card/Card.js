import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image, description, height, width, padding, color }) => {
  return (
    <div style={{ padding:`${padding}%`, height: `${height}%`, width: `${width}%`, backgroundColor: color}}>
      <h3>{title}</h3>
      {image?(
        <img src={image} alt={title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        ):(<></>)
      }
      <p>{description}</p>
    </div>
  );
};

Card.defaultProps = {
  height: 80,
  width: 100,
  color: '#eee',
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  desciption: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};

export default Card;
