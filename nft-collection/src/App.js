import React from 'react';
import './App.css';
import NFTList from './NFTList';

function App() {
  const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'; // Replace with your own address

  return (
    <div className="App">
      <header className="App-header">
        <h1>My NFT Collection</h1>
      </header>
      <NFTList address={address} />
    </div>
  );
}

export default App;