import React, { useState, useEffect } from 'react';
import { fetchNFTs } from './api';

const NFTList = ({ address }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNFTs(address);
        setNfts(response.data.assets);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };
    fetchData();
  }, [address]);

  return (
    <div className="Nft-list">
      {nfts.map((nft) => (
        <div key={nft.id}>
          <img src={nft.image_url} alt={nft.name} width="150" />
          <h2>{nft.name}</h2>
          <p>{nft.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTList;