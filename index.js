let http = require("http")
let fs = require("fs")

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

http.createServer(function (req,res) {
  res.writeHead(200, 
    {'Content-Type': 'text/html'});
    var url = req.url;
    if(url ==='/home.html') {
        // res.write(' Welcome to home page');
        res.write(homeContent) 
        res.end(); 
     } else if(url ==='/project.html') {
        // res.write(' Welcome to project page');
        res.write(projectContent) 
        res.end(); 
     } else if(url ==='/registration.html') {
      res.write(registrationContent);
      res.end();
     } else {
      res.write(homeContent) 
      res.end(); 
     }
}).listen(5000)