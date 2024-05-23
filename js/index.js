let h = window.innerHeight;
let w = window.innerWidth;


d3.select("#color_btn").on("click", function () {
  d3.select(".grid-container-1")
    .transition().duration(500)
    .style("right", 0 + "px")
  d3.select("#color_btn")
    .style("background-color", "#04AA6D")
  d3.select("#logo_btn")
    .style("background-color", "black")
})

d3.select("#logo_btn").on("click", function () {
  d3.select(".grid-container-1")
    .transition().duration(500)
    .style("right", w + "px")
  d3.select("#logo_btn")
    .style("background-color", "#04AA6D")
  d3.select("#color_btn")
    .style("background-color", "black")
})
