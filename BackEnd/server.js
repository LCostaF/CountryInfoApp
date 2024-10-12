const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Endpoint: Get Available Countries
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.DATE_NAGER_API_URL}/AvailableCountries`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching available countries:', error);
    res.status(500).json({ error: 'Failed to fetch available countries' });
  }
});

// Endpoint: Get Country Info
app.get('/api/country/:countryCode', async (req, res) => {
  const { countryCode } = req.params;
  
  try {
    // Fetch border countries
    const borderResponse = await axios.get(`${process.env.DATE_NAGER_API_URL}/CountryInfo/${countryCode}`);
    const borderCountries = borderResponse.data.borders;

    // Fetch population data
    const populationResponse = await axios.post(`${process.env.COUNTRIES_NOW_API_URL}/population`, {
      country: borderResponse.data.commonName
    });
    const populationData = populationResponse.data.data.populationCounts;

    // Fetch flag URL
    const flagResponse = await axios.post(`${process.env.COUNTRIES_NOW_API_URL}/flag/images`, {
      country: borderResponse.data.commonName
    });
    const flagUrl = flagResponse.data.data.flag;

    res.json({
      borderCountries,
      populationData,
      flagUrl
    });
  } catch (error) {
    console.error('Error fetching country info:', error);
    res.status(500).json({ error: 'Failed to fetch country info' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});