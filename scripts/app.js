var urlLink = 'https://cat-fact.herokuapp.com/facts/random'

function getRandomFact(url) {
    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', urlLink);

        request.onload = () => {
            //checks for the right status
            if (request.status == 200) {
                const data = JSON.parse(request.response);
                document.getElementById("right-section").innerHTML = data.text;
                resolve(request.response)
            }
            // meaningful error 
            else {
                reject(Error(request.statusText))
            }
        }

        //handle network errors
        request.onerror = () => { 
            reject(Error("Network Error"))
        }

        request.send();
    } )
}

getRandomFact(urlLink);