// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var sum = Number(localStorage.getItem("amount"));
document.getElementById("wallet").innerText=sum
const url = `http://www.omdbapi.com/?s=Marvel&apikey=62306228`

let res;
fetch(url)
.then(function(res){
    return res.json()
})

.then(function(res){
  appenddata(res)
})
.catch(function(err){
    console.log(err)
})

function appenddata(data){
    console.log(data.Search)
    data.Search.map(function(elem,index){
        var div = document.createElement("div");

        var image = document.createElement("img");
        image.src=elem.Poster

        var name = document.createElement("p");
        name.innerText=elem.Title

        var bookNow = document.createElement("button");
        document.createAttribute("book_now")
        bookNow.innerText="Book Now"
        bookNow.addEventListener("click",function(){
            bookMovie(elem,index)
        })

        div.append(image,name,bookNow)
        document.getElementById("movies").append(div)

    })
}
var arr = JSON.parse(localStorage.getItem("movie")) || [];
function bookMovie(elem,index){
    
    arr.push(elem);
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html"
}