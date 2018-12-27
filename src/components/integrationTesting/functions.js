const axios = require("axios");

module.exports = {
  getMorty() {
    return axios
      .get("https://rickandmortyapi.com/api/character/2")
      .then(person => {
        console.log("person", person.data);
        return person.data;
      });
  },
  getAllLocations() {
    return axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(locations => {
        return locations.data;
      });
  }
};
