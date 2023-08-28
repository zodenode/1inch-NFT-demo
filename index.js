const express = require('express')
const axios = require('axios')
const cors = require('cors')
const path = require('path');

const app = express()
const PORT = 5000; 
const BASE_URL = 'https://api.1inch.dev/nft/v1/byaddress';

app.use(cors()) // To handle CORS issues when making requests to the front end


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'nft-collection/build')));

app.get('/fetchNfts', async (req, res) => {
  const address = req.query.address || "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
  const limit = req.query.limit || 50;
  const offset = req.query.offset || 0;
  const chainIds = req.query.chainIds || 1;

  try {
    const constructedUrl = `${BASE_URL}?address=${address}&chainIds=${chainIds}&limit=${limit}&offset=${offset}`;

    const response = await axios.get(constructedUrl, {
      headers: {
        Authorization: 'Bearer t8QR94g31WPWC4tFYjM7xnO0WHewKxSb' // Make sure you replace your API Key here
      }
    });

    // Send the data from the API back to the client
    res.json(response.data);

  } catch (error) {
    console.error("Axios Error: ", error.response);
    res.status(500).json({ error: 'Failed to fetch NFTs' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'nft-collection/build', 'index.html'));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  
})