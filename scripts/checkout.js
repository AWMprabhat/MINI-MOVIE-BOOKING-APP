// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var sum = Number(localStorage.getItem("amount"));
document.getElementById("wallet").innerText=sum

var movieData = JSON.parse(localStorage.getItem("movie")) || [];
movieData.map(function(elem,index){
    var div = document.createElement("div");

    var image = document.createElement("img");
    image.src=elem.Poster;

    var name = document.createElement("p");
    name.innerText=elem.Title;
    
    div.append(image,name)
    document.getElementById("movie").append(div)

})