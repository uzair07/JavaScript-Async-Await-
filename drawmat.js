const axios = require('axios');
let s = 0;
async function f1() {
    try {
        for(let i=0;i<10;i++)
        {
            const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1goals='+i+'&team2goals='+i)
            s = s + response.data.total
        }
        return s;
    } catch (error) {
      console.log(error);
    }

  };

(async () => {
    console.log(await f1())
})();