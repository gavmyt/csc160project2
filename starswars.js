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
var printData = function(stardata)
{
// Promise.all(starPromise).then(printData(stardata.results[0].name);

d3.select(".data *").remove("ul");
d3.select(".data").append("div").attr("class", "info");
d3.select(".info").append("ul").attr("class", "infoList");
d3.select(".infoList").append("li").text(stardata.release_date);
d3.select(".infoList").append("li").text(stardata.characters); 
d3.select(".infoList").append("li").text(stardata.director);
d3.select(".infoList").append("li").text(stardata.producer);
d3.select(".infoList").append("li").text(stardata.opening_crawl);



}
starPromise.then(
function(starData)
    
    
{
printTitles(starData.results);

console.log (starData);
},
);


