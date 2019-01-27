var friends = require("../data/friends.js");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    console.log(req.body);

    //Parse the survey results
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);

    //calculate the difference between the users score and scores in the database
    var totalDifference = 0;

    //loop through all the friend possibilities
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

    //now loop through all the scores of each friend
    for (var j = 0; j < friends[i].scores[j]; j++) {
      
      //calculate the difference between the scores and sum them into the totalDifference
      totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

      //if the sum of the difference between the scores is less than the difference in the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {

        //reset the bestMatch to be the new friend
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
};


// app.get("/survey", function(req, res) {
//     res.json(tableData);
//   });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });