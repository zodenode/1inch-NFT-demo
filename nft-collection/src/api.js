import axios from 'axios'

const BASE_URL = '/fetchNfts';

export const fetchNFTs = (address,chainIds=1, limit = 50, offset = 0) => {
  return axios.get(`${BASE_URL}?address=${address}&chainIds=${chainIds}&limit=${limit}&offset=${offset}`);
};