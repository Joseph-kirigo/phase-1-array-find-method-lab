// code your solution here
let record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]
  function superbowlWin(item){
    for(let team of item){
        if(team.result==='W')
        return team.year;
    }
  }
  superbowlWin(record);