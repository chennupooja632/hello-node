const http = require("http")
const fs = require("fs")
const args = (process.argv.slice(2));

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
    switch (url) {
      case "/project":
        res.write(projectContent);
        res.end();
        break;
      case "/registration":
        res.write(registrationContent);
        res.end();
        break;
      // case "/project":
      //   res.write(Content);
      //   res.end();
      //   break;
      default:
        res.write(homeContent);
        res.end();
        break;
    } 
    // if(url ==='/home') {
    //     // res.write(' Welcome to home page');
    //     res.write(homeContent) 
    //     res.end(); 
    //  } else if(url ==='/project') {
    //     // res.write(' Welcome to project page');
    //     res.write(projectContent) 
    //     res.end(); 
    //  } else if(url ==='/registration') {
    //   res.write(registrationContent);
    //   res.end();
    //  } else {
    //   console.log("Hello")
    //   res.write(homeContent) 
    //   res.end(); 
    //  }
}).listen(parseInt(args[0].slice(7)))
