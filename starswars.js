var starPromise = d3.json("https://swapi.co/api/films/?format=json")
var printTitles = function(starsData)
{                                                                    
d3.select(".titles")
.append("ol")
.selectAll("li")
.data(starsData)
.enter()
.append("li")
.text(function(d) { return d.title})
.on("click", function(d) { console.log(d) 
                          printData(d) });
    
}


var printData = function(film)
{
    console.log(film);
    var chars = film.characters;
    console.log(film,chars);
    
    
    d3.select(".data *").remove("ul");
d3.select(".data").append("div").attr("class", "info");
d3.select(".info").append("ul").attr("class", "infoList");
d3.select(".infoList").append("li").text(film.opening_crawl);
d3.select(".infoList").append("li").text(film.release_date);
d3.select(".infoList").append("li").text("Characters", film.characters); 
d3.select(".infoList").append("li").text("Director: " + film.director);
d3.select(".infoList").append("li").text("Producer(s): " + film.producer);
    
    var charPromise = chars.map(function(chars)
    {
                 console.log(chars);
                 return d3.json(chars);
    })
                
    Promise.all(charPromise).then(function(values)
    {
    console.log(values[0].name);
    console.log(values[5].name);
     console.log("values",values);
     d3.select("ul li:nth-child(3)")
        .on("click", function(d) { console.log(d) 
                          printData(d) })
     
        .append("ul")
        .selectAll("li")
        .data(values)
        .enter()
        .append("li")
        .text(function(d) { return d.name})

    })






}


starPromise.then(
function(starData)
    
    
{
printTitles(starData.results);

console.log (starData);
},
);


