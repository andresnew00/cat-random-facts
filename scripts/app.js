const factsUrl = "https://cat-fact.herokuapp.com/facts/random";
const imgUrl = "https://api.thecatapi.com/v1/images/search";

getResponse("GET", factsUrl).then(fact => {
  document.getElementById("right-section").innerHTML = "<p>" + fact.text + "</p>";
});

getResponse("GET", imgUrl).then(img => {
  var image = document.createElement("img");
  image.src = img[0].url;

  // This next line will just add it to the <body> tag
  document.getElementById("left-section").appendChild(image);
});

//Functions

function getResponse(method, url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
  
      request.responseType = 'json';

      request.onload = () => {
        //checks for the right status
        if (request.status == 200) {
          resolve(request.response);
        }
        // meaningful error
        else {
          reject(Error(request.statusText));
        }
      };
  
      //handle network errors
      request.onerror = () => {
        reject(Error("Network Error"));
      };
  
      request.send();
    });
  }