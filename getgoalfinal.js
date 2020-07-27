const axios = require('axios');
let s = 0;
let d = 0;
async function fn() {
    try {
    const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona')
    console.log('in async 1')
    if(response.data.total <= response.data.per_page)
        {
            for(let i =0; i < response.data.total; i++ )
            {
                s = s + parseInt(response.data.data[i].team1goals)
            }
        }
        else{
            for(let i =0; i < response.data.per_page; i++ )
            {
                s = s + parseInt(response.data.data[i].team1goals)
            }
            for(let j = 2; j <= response.data.total_pages; j++)
            {
                const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona&page='+j)
                if(j == response.data.total_pages){
                    let rem = response.data.total % response.data.per_page
                    for(let i =0; i < rem; i++ )
                    {
                        s = s + parseInt(response.data.data[i].team1goals)
                    }
                }
                else{
                    for(let i =0; i < response.data.per_page; i++ )
                    {
                        s = s + parseInt(response.data.data[i].team1goals)
                    }
                }
            }

        }
        return s
    } catch (error) {
      console.log(error);
    }
}
async function fn2() {
    try {
        const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona')
        console.log('in async 2')
      if(response.data.total <= response.data.per_page)
        {
            for(let i =0; i < response.data.total; i++ )
            {
                d = d + parseInt(response.data.data[i].team2goals)
            }
        }
        else {
            for(let i =0; i < response.data.per_page; i++ )
            {
                d = d + parseInt(response.data.data[i].team2goals)
            }
            for(let j = 2; j <= response.data.total_pages; j++)
            {
                const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona&page='+j)
                if(j == response.data.total_pages){
                    let rem = response.data.total % response.data.per_page
                    for(let i =0; i < rem; i++ )
                    {
                        d = d + parseInt(response.data.data[i].team2goals)
                    }
                }
                else{
                    for(let i =0; i < response.data.per_page; i++ )
                    {
                        d = d + parseInt(response.data.data[i].team2goals)
                    }
                }
            }

        }       
        return d 
      } catch (error) {
        console.log(error);
      }
  }
(async () => {
    let [r1, r2] = await Promise.all([fn(), fn2()]);
    console.log(r1+r2)
})();
//console.log(s+d);
//console.log(r+r2)