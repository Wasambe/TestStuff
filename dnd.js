 	
	// Retrieve the JSON string
 arrayinitialtreestr = localStorage.getItem("arrayinitialtreestr");
// Parse the JSON string back to JS object
 arrayinitialtreestrparsed = JSON.parse(arrayinitialtreestr); //becomes arrayaddchildstrparsed[]
		arrayinitialtreestrparsed.sort(function(a, b) { 
  return a.parentid - b.parentid;
  });
console.log(arrayinitialtreestrparsed);	
flatData = arrayinitialtreestrparsed;



var flatData = [
{"name": "Top Level", "parent": null},
{"name": "Level 2: A", "parent": "Top Level" },
{"name": "Level 2: B", "parent": "Top Level" },
{"name": "Son of A", "parent": "Level 2: A" },
{"name": "Daughter of A", "parent": "Level 2: A" }
];

/*
It’s worth noting here that we have also changed the name of the array (to flatData) since we
are going to convert, then declare our newly massaged data with our original variable name
treeData so that the remainder of our code thinks there have been no changes.
Then we use the d3.stratify operator on our flat data;
*/

// convert the flat data into a hierarchy
var treeData = d3.stratify()
.id(function(d) { return d.nameid; })
.parentId(function(d) { return d.parentid; })
(flatData);

/*
The stratify function requires a unique identifier to be used for each node and it will be declared
as .id. In this example each of our nodes has a unique ‘name’, so we are using that as our id
(.id(function(d) { return d.name; })). We also need to understand the hierarchy by having
each node identify who its parent is. This will be stored as parentId (.parentId(function(d) {
return d.parent; }))
That’s it!
Because we want to be able to use our code as intact as possible from our horizontal tree example
we will want to run through our dataset and assign the ‘name’ to each node that has been stored
as id;
*/

// assign the name to each node
treeData.each(function(d) {
d.name = d.data.name;
});

/*
That’s it!
The brevity of the code to do this is fantastic and well done to Mike Bostock for including the
new function in v4. Of course, the end result looks exactly the same;
*/

/*
var treeData =
  {
    "name": "Top Level",
    "children": [
      { 
		"name": "Level 2: A",
        "children": [
          { "name": "Son of A" },
          { "name": "Daughter of A" }
        ]
      },
      { "name": "Level 2: B" }
    ]
  };
 */ 
  
 


// set the dimensions and margins of the diagram
var margin = {top: 40, right: 90, bottom: 50, left: 90},
    width = 660 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// declares a tree layout and assigns the size
var treemap = d3.tree()
    .size([width, height]);

//  assigns the data to a hierarchy using parent-child relationships
//var nodes = d3.hierarchy(treeData);
// Assigns parent, children, height, depth
//var nodes = d3.hierarchy(treeData, function(d) { return d.children; });
var nodes = d3.hierarchy(treeData, function(d) { return d.children; });


// maps the node data to the tree layout
nodes = treemap(nodes);

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom),
    g = svg.append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// adds the links between the nodes
var link = g.selectAll(".link")
    .data( nodes.descendants().slice(1))
  .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
       return "M" + d.x + "," + d.y
         + "C" + d.x + "," + (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
         + " " + d.parent.x + "," + d.parent.y;
       });

// adds each node as a group
var node = g.selectAll(".node")
    .data(nodes.descendants())
  .enter().append("g")
    .attr("class", function(d) { 
      return "node" + 
        (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; });

// adds the circle to the node
node.append("circle")
  .attr("r", 10);

// adds the text to the node
node.append("text")
  .attr("dy", ".35em")
  .attr("y", function(d) { return d.children ? -20 : 20; })
  .style("text-anchor", "middle")
  .text(function(d) { return d.data.name; });
    
//testsaveinitial();

function testsaveinitial(){
expandAll();
iterateall();
//collapseAll();
}

function expandzzz(d){   
    var children = (d.children)?d.children:d._children;
    if (d._children) {        
        d.children = d._children;
        d._children = null;       
    }
    if(children)
      children.forEach(expandzzz);
}

function expandAll(){
    expandzzz(nodes); 
   // update(nodes);
}

function collapseAll(){
    nodes.children.forEach(collapse);
    collapse(nodes);
   // update(nodes);
}


function iterateall(){
arrayinitialtree = [];
//console.log ("this is iterateall");
 d3.selectAll('g.node')  //here's how you get all the nodes
    .each(function(d) {
      // console.log (d.data.nameid + " " + d.data.name + " " + d.data.parentid + " " + d.data.parentname);
      //statr populate array
	  var name = d.data.name;
var nameid = d.data.nameid;
var parentname = d.data.parentname;
var parentid = d.data.parentid;

var objinitialtree = {"name": name, 
"nameid": nameid,
"parentname": parentname,
"parentid": parentid};
                        
			   arrayinitialtree.push(objinitialtree);
			   
localStorage.setItem("arrayinitialtreestr", JSON.stringify(arrayinitialtree));
// Retrieve the JSON string
 arrayinitialtreestr = localStorage.getItem("arrayinitialtreestr");
// Parse the JSON string back to JS object
 arrayinitialtreestrparsed = JSON.parse(arrayinitialtreestr); //becomes arrayaddchildstrparsed[]
	//console.log(arrayinitialtreestrparsed);
	  //end populate array
	  
    });
	
	
	arrayinitialtreestrparsed.sort(function(a, b) { 
  return a.parentid - b.parentid;
  });
console.log(arrayinitialtreestrparsed);	
}

