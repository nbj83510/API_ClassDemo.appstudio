// *** use your own url copied from Postman ****
let requestURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyASR68SJUG270ZEsWIX7Y1cFQJyX69AB8M&query=pizza places by CU&radius=radius&location=41.265331,-95.949364"

btnSeeThai.onclick=function(){
    callAPI(requestURL)
}


function callAPI(URL) {
    var xhttp = new XMLHttpRequest()

    // if you need cors, use this code
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)

    // if you DON'T need cors use this line instead:
    //xhttp.open('GET',URL)

    // free CORS proxies: https://nordicapis.com/10-free-to-use-cors-proxies/

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


function onXHRLoad() {
    let message = ""

    // 'this' is another name for the object returned from the API call
    let pm = JSON.parse(this.responseText)

    for (i = 0; i <= pm.results.length - 1; i++) {
        message = message + pm.results[i].name + "\n"
    }
    
    txtaThaiNames.value = message

    // if want to add to database call a function here that does that
    // addToDatabase()
}


// Footnotes: callAPI() function header notes
    /* Headers - likely have these from Postman already */
    // if you need to set the returned data type, use this line of code: 
    //xhttp.setRequestHeader('Content-Type', 'application/json')

    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)

    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 


    // Here are some headers you might need: 
    /*
    xhttp.setRequestHeader('key','AIzaSyCE-pjULPU_Gp5Qf0qL39tVsdJBX55J0cY')
    xhttp.setRequestHeader('location','41.276900,-95.942310')
    xhttp.setRequestHeader('rankby','distance')
    xhttp.setRequestHeader('type','restaurant')
    */

