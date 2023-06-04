
var projection = d3.geoOrthographic()
    .scale(248)
    .rotate([0, 0])
    .translate([width / 2, height / 2])
    .clipAngle(90);

  const {width, height} = document.querySelector("svg#cv_network_viz").getBoundingClientRect();

  const svg = d3.select("svg#cv_network_viz")
    .attr("width", width)
    .attr("height", height);

var c = canvas.node().getContext("2d");

var path = d3.geoPath()
    .projection(projection)
    .context(c);

d3.json("https://d3js.org/world-110m.v1.json", function(error, world) {
  if (error) throw error;

  var land = topojson.feature(world, world.objects.land);

  d3.timer(function(elapsed) {
    c.clearRect(0, 0, width, height);

    projection.rotate([elapsed / 150, 0]);

    c.fillStyle = "#fff", c.beginPath(), path(land), c.fill();
  });
});
