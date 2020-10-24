import React, { Component } from 'react';
import Trademark from './components/Trademark';
import Computers from './components/Computers';
import data from './data';

const allTrademark = ['all', ...new Set(data.map((item) => item.trademark))];

class App extends Component {
  state = {
    computers: data,
    trademark: allTrademark,
  };

  filterItems = (catelory) => {
    if (catelory === 'all') {
      this.setState({ computers: data });
      return;
    }
    const newItems = data.filter((item) => item.trademark === catelory);
    this.setState({ computers: newItems });
  };

  render() {
    return (
      <div className='ui container'>
        <h1>MY COMPUTER</h1>
        <Trademark
          allTrademark={this.state.trademark}
          filterItems={this.filterItems}
        />
        <Computers computers={this.state.computers} />
      </div>
    );
  }
}
export default App;
