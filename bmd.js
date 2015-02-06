var svg = d3.select("#chart")
            .append("svg");

var left_border = 50
var top_border = 50

// Information about the point
var border_top = 50;

var dataset = [
                  [ 'IRE', 55,   175 ,   100 ,1, "IRFU_flag.svg.png"],
                  [ 'IRE',225,   100 ,   25, 1, "IRFU_flag.svg.png"],
                  [ 'IRE',395,   25 ,   25, 1, "IRFU_flag.svg.png"],
                  [ 'IRE',565,   25 ,   25, 1, "IRFU_flag.svg.png"],
                  [ 'IRE',735,   25 ,   25 ,1, "IRFU_flag.svg.png"],
                  [ 'IRE',905,   25 ,   325 ,1, "IRFU_flag.svg.png"],

                  [ 'ENG', 55,   25 ,   250, 1, "england.png"],
                  [ 'ENG',225,    250,   175, 4, "england.png"],
                  [ 'ENG',395,   175 ,   250, 3, "england.png"],
                  [ 'ENG',565,   250 ,   175, 4, "england.png"],
                  [ 'ENG',735,   175 ,   100, 3, "england.png"],
                  [ 'ENG',905,   100 ,   100, 2, "england.png"],

                  [ 'WAL', 55,   400 ,   175,1, "wales.png"],
                  [ 'WAL',225,   175 ,   100, 1 , "wales.png"],
                  [ 'WAL',395,   100 ,   175, 1, "wales.png"],
                  [ 'WAL',565,   175 ,   250, 2, "wales.png"],
                  [ 'WAL',735,   250 ,   250, 3, "wales.png"],
                  [ 'WAL',905,   250 ,   100, 4, "wales.png"],

                  [ 'FRA', 55,   100 ,   25,1 , "france.png"],
                  [ 'FRA',225,   25 ,   250, 1 , "france.png"],
                  [ 'FRA',395,   250 ,   100, 3 , "france.png"],
                  [ 'FRA',565,   100 ,   100, 2 , "france.png"],
                  [ 'FRA',735,   100 ,   175, 2 , "france.png"],
                  [ 'FRA',905,   175 ,   100, 2 , "france.png"],

                  [ 'SCO', 55,   325 ,   400,1, "scotland.png"],
                  [ 'SCO',225,   400 ,   400,4, "scotland.png"],
                  [ 'SCO',395,   400 ,   325, 5, "scotland.png"],
                  [ 'SCO',565,   325 ,   325, 4, "scotland.png"],
                  [ 'SCO',735,   325 ,   325, 5, "scotland.png"],
                  [ 'SCO',905,   325 ,   100, 5, "scotland.png"],

                  [ 'ITA', 55,   250 ,   325,1, "italy.png"],
                  [ 'ITA',225,   325 ,   325,4, "italy.png"],
                  [ 'ITA',395,   325 ,   400,5, "italy.png"],
                  [ 'ITA',565,   400 ,   400, 6, "italy.png"],
                  [ 'ITA',735,   400 ,   400, 6, "italy.png"],
                  [ 'ITA',905,   400 ,   400, 6, "italy.png"]

              ];

var probs = [
              [25, " %", 10, 40, 30, 40, 50, 60],
              [100, " %", 20, 20, 30, 40, 50, 60],
              [175, " %", 40, 20, 60, 40, 50, 60],
              [250, " %", 30, 20, 30, 70, 50, 60],
              [325, " %", 50, 20, 30, 40, 90, 60],
              [400, " %", 60, 20, 30, 40, 50, 160]
]


var results = [ 
              [55, ,"ITA vs IRE", "WAL vs ENG", "WAL vs ENG", "FRA vs SCO", "FRA vs SCO", "ITA vs IRE" ],
              [225,, "IRE vs FRA", "ENG vs ITA", "SCO vs WAL", "IRE vs FRA", "SCO vs WAL", "ENG vs ITA" ],
              [395,, "IRE vs ENG", "IRE vs ENG", "FRA vs WAL", "FRA vs WAL", "SCO vs ITA", "SCO vs ITA" ],
              [565,, "WAL vs IRE", "ENG vs SCO", "WAL vs IRE", "ITA vs FRA", "ENG vs SCO", "ITA vs FRA" ],
              [735,, "SCO vs IRE", "ENG vs FRA", "ITA vs WAL", "ENG vs FRA", "SCO vs IRE", "ITA vs WAL" ],
              // [905,, "WAL vs ENG", "I vs I", "S vs F", "WAL vs ENG", "I vs I", "S vs F" ]
]
var results_probs = [ 
              [55, ,"9  2  89", "48  2  50", "48  2  50", "68  2  30", "68  2  30", "9  2  89" ],
              [225,, "84  2  14", "95  2  3", "50  2  48", "84  2  14", "50  2  48", "95  2  3" ],
              [395,, "67  2  31", "67  2  31", "54  2  44", "54  2  44", "88  2  10", "88  2  10" ],
              [565,, "45  2  53", "85  2  13", "45  2  53", "24  2  74", "85  2  13", "24  2  74" ],
              [735,, "31  2  67", "82  2  16", "17 2  81", "82  2  16", "31  2  67", "17 2  81" ],

]

svg.selectAll("line")
   .data(dataset)
   .enter()
    .append("line")      // attach a polyline
    .style("stroke", "black")  // colour the line
    .style("fill", "black")     // remove any fill colour
   .attr("x1", function(d) {
      if (d[1] < 736){
        return d[1] + 100 + left_border}
      else {
        return -10}
   })
   .attr("y1", function(d) {
        return d[2]+12.5 + top_border;
   })
   .attr("x2", function(d) {
      if (d[1] < 736){
        return d[1] + 170  + left_border}
      else {
        return -10}
   })
   .attr("y2", function(d) {
        return d[3]+12.5+ top_border;

   })
   .attr("stroke-width", 5)
   ;







svg.selectAll("count_names")
   .data(dataset)
   .enter()
    .append("text")      // attach a polyline
    // .style("stroke", "black")  // colour the line
    .style("fill", "black")     // remove any fill colour
    .style("font-family", "Gill Sans")
   .attr("x", function(d) {
        return d[1]+37.5 + left_border;
   })
   .attr("y", function(d) {
        return d[2]+17.5+ top_border;
   })
   .text(function(d) {
        return d[0];
   })
   ;        


   svg.selectAll("image")
   .data(dataset)
   .enter()
    .append("svg:image")

   .attr("x", function(d) {
        return d[1]+10  + left_border;
   })
   .attr("y", function(d) {
        return d[2]+ top_border;
   })
   .attr('width', 20)
   .attr('height', 25)
   .attr("xlink:href",function(d) {
        return d[5];
   })


svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")

   .attr("id", function(d) {
        return d[0];
   })
   .attr("x", function(d) {
        return d[1] + left_border;
   })
   .attr("y", function(d) {
        return d[2]+ top_border;
   })
   .attr("width", 100)
   .attr("height", 25)
   .attr("rx", 10)
   .attr("ry", 10)
   .attr("stroke", '#000000')
   .attr("fill", '#FF0000')
   .attr("stroke-width", 5)
   .on("mouseover", function(d) {
  hover_id = "#".concat(this.id)
  d3.selectAll(hover_id).attr("r", 10).style("stroke-width", "10")
  d3.selectAll(end_probs).text(function(d) {
        switch(hover_id){
          case "#IRE":
            return d[2];

          case "#ENG":
            return d[3];

          case "#WAL":
            return d[4];

          case "#FRA":
            return d[5];

          case "#SCO":
            return d[6];

          case "#ITA":
            return d[7];  
          default:
            return hover_id                                   
        }
   })

  // hover_id = this.id;
})                  
.on("mouseout", function(d) {
  d3.selectAll(hover_id).attr("r", 5.5).style("stroke-width", "5")
  // d3.selectAll(end_probs).text("%")
;
});


   svg.selectAll("match_results")
   .data(results)
   .enter()
    .append("text")    
    .style("fill", "black")     // remove any fill colour
    .style("font-family", "Gill Sans")
   .attr("x", function(d) {
        return d[0] + left_border;
   })
   .attr("y", function(d) {
        return 500 + top_border;
   })
   .text(function(d) {
        return d[1];
   })
    .attr("id", "end_probs"
   )
   ;   


   svg.selectAll("match_probs")
   .data(results_probs)
   .enter()
    .append("text")    
    .style("fill", "black")     // remove any fill colour
    .style("font-family", "Gill Sans")
   .attr("x", function(d) {
        return d[0] + left_border;
   })
   .attr("y", function(d) {
        return 520 + top_border;
   })
   .text(function(d) {
        return d[1];
   })
    .attr("id", "end_probs"
   )
   ;   

   svg.selectAll("end_probs")
   .data(probs)
   .enter()
    .append("text")    
    .style("fill", "black")     // remove any fill colour
    .style("font-family", "Gill Sans")
   .attr("x", function(d) {
        return 1050 + left_border;
   })
   .attr("y", function(d) {
        return d[0]+17.5+ top_border;
   })
   .text(function(d) {
        return d[1];
   })
    .attr("id", "end_probs"
   )
   ;   


// rect id="svg_23" height="25" width="100" y="258" x="55" stroke-width="5" stroke="#000000" fill="#FF0000"