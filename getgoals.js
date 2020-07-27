const axios = require('axios');
let s = 0;
(async () => {
    try {
      const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Arsenal&page=3')
      //console.log(response.data)
          //show_results(s)
    } catch (error) {
      console.log(error);
    }
    try {
        const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Arsenal&page=3')
        console.log(response.data)
            //show_results(s)
      } catch (error) {
        console.log(error);
      }
  })();