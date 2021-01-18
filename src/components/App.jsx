import React from 'react';
import giphy from 'giphy-api';

import Search from './Search.jsx';
import Giffy from './Giffy.jsx';
import GifList from './GifList.jsx';

const GIPHY_API_KEY = '9yXAQt0km7NyKUcMaDISVUenezaXNzGT';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "lN9P2NkLUcIk6KiTTS"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

    selectGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return (
        <>
        <div className="left-scene">
          <Search searchFunction={this.search} />
          <div className="selected-gif">
            <Giffy id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
        </>
    );
  }
}

export default App;
