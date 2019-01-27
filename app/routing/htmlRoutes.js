var path = require("path");

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    // If no matching route is found default to home
//     app.get("*", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/home.html"));
//     });
//   };

// app.get("/api/tables", function(req, res) {
//     res.json(tableData);
//   });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });
};