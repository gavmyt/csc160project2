var starPromise = d3.json("https://swapi.co/api/films/?format=json")
var printTitles = function(starsData)
{                                                                    //starData.results[0].title
d3.select(".titles")
.append("ol")
.selectAll("li")
.data(starsData)
.enter()
.append("li")
.text(function(d) { return d.title})
.on("click", function(d) { printData(d) });
}
var printData = function(film)
{ console.log(film.characters);
 
 var chars = film.characters;
 console.log(chars);
 
 var charPromise = chars.map(function(chars)
        {
                 console.log(charPromise);
                 return d3.json(chars);
}   )
                
Promise.all(promises).then(printData(function(values)
 {
     console.log("values",values);
     d3.select()
     
 }))

d3.select(".data *").remove("ul");
d3.select(".data").append("div").attr("class", "info");
d3.select(".info").append("ul").attr("class", "infoList");
d3.select(".infoList").append("li").text(film.release_date);
d3.select(".infoList").append("li").text(film.characters); 
d3.select(".infoList").append("li").text(film.director);
d3.select(".infoList").append("li").text(film.producer);
d3.select(".infoList").append("li").text(film.opening_crawl);



}
starPromise.then(
function(starData)
    
    
{
printTitles(starData.results);

console.log (starData);
},
);


