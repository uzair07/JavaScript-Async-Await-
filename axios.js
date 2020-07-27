const axios = require('axios');
let s = 0;
(async () => {
    try {
      const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona')
      if(response.data.total <= response.data.per_page)
        {
            for(let i =0; i < response.data.total; i++ )
            {
                s = s + parseInt(response.data.data[i].team1goals)
            }
        }

          show_results(s)
    } catch (error) {
      console.log(error);
    }
    try {
        const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona')
        if(response.data.total_pages == 1)
            {
                for(let i =0; i < response.data.total; i++ )
                {
                    s = s + parseInt(response.data.data[i].team2goals)
                }
            }
            show_results(s)
      } catch (error) {
        console.log(error);
      }
  })();

function show_results(results) {
    console.log(results)
}
