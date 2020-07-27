const request = require('request')
const url2="https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona";
    let s = 0;
    request.get(url2, (error, response, body) => {
        let json = JSON.parse(body);
        if(json.total_pages == 1)
        {
            for(let i =0; i < json.total; i++ )
            {
                s = s + parseInt(json.data[i].team2goals)
            }
        }
        console.log(s)
    });