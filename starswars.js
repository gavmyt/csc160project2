var starPromise = d3.json("https://swapi.co/api/films/?format=json")
var printTitles = function(starData)
{                                                                    //starData.results[0].title
d3.select(".titles")
.append("ol")
.selectAll("li")
.data(starData)
.enter()
.append("li")
.text(function(d) { return d.title})
.on("click", function(d) { printData(d) });
}
var printData = function(movie)
{
d3.select(".data *").remove("ol");
d3.select(".data").append("div").attr("class", "info");
d3.select(".info").append("ol").attr("class", "infoList");
d3.select(".infoList").append("li").text(movie.producer);
d3.select(".infoList").append("li").text(movie.director);    
}
starPromise.then(
function(starData)
{
printTitles(starData);
console.log (starData.results[0].title);
console.log (starData);
},
);


