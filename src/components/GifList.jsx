import React from 'react';
import Giffy from './Giffy';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Giffy id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
