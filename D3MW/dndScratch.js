

 	


function close_modal() {
        $(document).foundation('reveal', 'close');
}


var tree_root;
var create_node_modal_active = false;
var rename_node_modal_active = false;
var create_node_parent = null;
var node_to_rename = null;


function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};



function create_node() {
        if (create_node_parent && create_node_modal_active) {
                if (create_node_parent._children != null)  {
                        create_node_parent.children = create_node_parent._children;
                        create_node_parent._children = null;
                }
                if (create_node_parent.children == null) {
                        create_node_parent.children = [];
                }
                id = generateUUID(); 
                name = $('#CreateNodeName').val();
                new_node = { 'name': name, 
                             'id' :  id,
                             'depth': create_node_parent.depth + 1,                           
                             'children': [], 
                             '_children':null 
                           };
                console.log('Create Node name: ' + name);
                create_node_parent.children.push(new_node);
                create_node_modal_active = false;
                $('#CreateNodeName').val('');

        }
        close_modal();
        outer_update(create_node_parent);
		createoption();
}



	
	function rename_node() {
        if (node_to_rename && rename_node_modal_active) {
                name = $('#RenameNodeName').val();
                console.log('New Node name: ' + name);
                node_to_rename.name = name;
                rename_node_modal_active = false;

        }
        close_modal();
        outer_update(node_to_rename);
		renameoption();
}


outer_update = null;


// Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    // variables for drag/drop
    var selectedNode = null;
    var draggingNode = null;
    // panning variables
    var panSpeed = 200;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
   //dnd var viewerWidth = $(document).width();
   //dnd var viewerHeight = $(document).height();
    var viewerWidth = 1000;
    var viewerHeight = 500;

    var tree = d3v3.layout.tree()
      .size([viewerHeight, viewerWidth]);
//var tree = d3.tree()
   //.size([viewerHeight, viewerWidth]);
	
	
	
var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
},
width = 960 - margin.right - margin.left,
height = 800 - margin.top - margin.bottom;


savechangesyesno = 'yes';

if (savechangesyesno == "yes"){
//Test start 
///*
 // Retrieve the JSON string
 arraychangesstr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangesstr); 
	console.log(arraychangesstrparsed);

datachaney = arraychangesstrparsed;
console.log(datachaney);
arraychanges = arraychangesstrparsed;

}else if(savechangesyesno == 'no'){

 arrayinitialtreestr = localStorage.getItem("arrayinitialtreestr");
// Parse the JSON string back to JS object
 arrayinitialtreestrparsed = JSON.parse(arrayinitialtreestr); 
	console.log(arrayinitialtreestrparsed);

datachaney = arrayinitialtreestrparsed;
console.log(datachaney);



}else if(savechangesyesno == 'circular'){
 myvarcircularstr = localStorage.getItem("myvarcircularstr");
// Parse the JSON string back to JS object
myvarcircularstrparsed = JSON.parse(myvarcircularstr); 
	console.log(myvarcircularstrparsed);

datachaney = myvarcircularstrparsed;
console.log(datachaney);

}else if(savechangesyesno == 'emergency'){
 // Retrieve the JSON string
 arraychangesstr = localStorage.getItem("arrayaddallteststr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangesstr); //becomes arrayaddchildstrparsed[]
	localStorage.setItem("arraychangesstr", JSON.stringify(arraychangesstrparsed));

	console.log(arraychangesstrparsed);

datachaney = arraychangesstrparsed;
console.log(datachaney);

}




// convert the flat data into a hierarchy 
//datachaney absolutely must be in flat array (index 0 thru 179)
//arraychangesstrparsed is an example of flat array
//if data is in hierarchy form then stratify fails with error "No Root"
//myvarcircularstrparsed and initialtreestrparsed are examples of hierarchy

//if savechangesyesno = 'yes' the code runs fine because datachaney is flat
//if savechangesyesno = 'no' I get No Root error because datachaney is hierarchy
 //if savechangesyesno = 'circular' I get No Root error because datachaney is hierarchy
 
 	// Retrieve the JSON string
 arrayinitialtreestr = localStorage.getItem("arrayinitialtreestr");
// Parse the JSON string back to JS object
 arrayinitialtreestrparsed = JSON.parse(arrayinitialtreestr); //becomes arrayaddchildstrparsed[]
		arrayinitialtreestrparsed.sort(function(a, b) { 
  return a.parentid - b.parentid;
  });
console.log(arrayinitialtreestrparsed);	
flatData = arrayinitialtreestrparsed;


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
 
 
 
// convert the flat data into a hierarchy 
  var rootchaney = d3.stratify()
  .id(function(d) { return d.nameid; })
  .parentId(function(d) { return d.parentid; })
  (flatData);
  console.log (datachaney);
  console.log (rootchaney);
 root = rootchaney; 
//*/
 //End test
 
 
 
 treeData = root;
  
// assign the name to each node
root.each(function(d) {
d.name = d.data.name;
});




//dnd var tree = d3.layout.tree().nodeSize([70, 40]);


    var menu = [
            {
                    title: 'Rename node',
                    action: function(elm, d, i) {
                            console.log('Rename node');
                            $("#RenameNodeName").val(d.name);
                            rename_node_modal_active = true;
                            node_to_rename = d
                            $("#RenameNodeName").focus();
                            $('#RenameNodeModal').foundation('reveal', 'open');
                    }
            },
            {
                    title: 'Delete node',
                    action: function(elm, d, i) {
                            console.log('Delete node');
                            delete_node(d);
                    }
            },
            {
                    title: 'Create child node',
                    action: function(elm, d, i) {
                            console.log('Create child node');
                            create_node_parent = d;
                            create_node_modal_active = true;
                            $('#CreateNodeModal').foundation('reveal', 'open');
                            $('#CreateNodeName').focus();
                    }
            }
    ]

	
 // A recursive helper function for performing some setup by walking through all nodes

    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function(d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);

    }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });

    function delete_node(node) {
	nodetodelete = node;
	deleteoption(nodetodelete);
        visit(treeData, function(d) {
               if (d.children) {
                       for (var child of d.children) {
                               if (child == node) {
                                       d.children = _.without(d.children, child);
                                       update(root);
									   break;
                               }
                       } 
               }
        },
        function(d) {
           return d.children && d.children.length > 0 ? d.children : null;
       });
		//deleteoption(nodetodelete);
    }



 // sort the tree according to the node names

    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
   // sortTree();

// TODO: Pan function, can be better implemented.

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3v3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3v3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }



 // Define the zoom function for the zoomable tree

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3v3.event.translate + ")scale(" + d3v3.event.scale + ")");
    }


    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3v3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

    function initiateDrag(d, domNode) {
        draggingNode = d;
        d3v3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3v3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3v3.select(domNode).attr('class', 'node activeDrag');

        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
            if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
            else return -1; // a is the hovered element, bring "a" to the front
        });
        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes);
            nodePaths = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                }).remove();
            // remove child nodes
            nodesExit = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id;
                }).filter(function(d, i) {
                    if (d.id == draggingNode.id) {
                        return false;
                    }
                    return true;
                }).remove();
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
            if (d.target.id == draggingNode.id) {
                return true;
            }
            return false;
        }).remove();

        dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
   //dnd var baseSvg = d3.select("#tree-container").append("svg")
   var baseSvg = d3v3.select("#body").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight);
        
    baseSvg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "white")
        
    baseSvg.call(zoomListener);


    // Define the drag listeners for drag/drop behaviour of nodes.
    dragListener = d3v3.behavior.drag()
        .on("dragstart", function(d) {
            if (d == root) {
                return;
            }
            dragStarted = true;
            nodes = tree.nodes(d);
            d3v3.event.sourceEvent.stopPropagation();
            // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
        })
        .on("drag", function(d) {
            if (d == root) {
                return;
            }
            if (dragStarted) {
                domNode = this;
                initiateDrag(d, domNode);
            }

            // get coords of mouseEvent relative to svg container to allow for panning
            relCoords = d3v3.mouse($('svg').get(0));
            if (relCoords[0] < panBoundary) {
                panTimer = true;
                pan(this, 'left');
            } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

                panTimer = true;
                pan(this, 'right');
            } else if (relCoords[1] < panBoundary) {
                panTimer = true;
                pan(this, 'up');
            } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
                panTimer = true;
                pan(this, 'down');
            } else {
                try {
                    clearTimeout(panTimer);
                } catch (e) {

                }
            }

            d.x0 += d3v3.event.dy;
            d.y0 += d3v3.event.dx;
            var node = d3v3.select(this);
            node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
            updateTempConnector();
        }).on("dragend", function(d) {
            if (d == root) {
                return;
            }
            domNode = this;
            if (selectedNode) {
                // now remove the element from the parent, and insert it into the new elements children
                var index = draggingNode.parent.children.indexOf(draggingNode);
                if (index > -1) {
                    draggingNode.parent.children.splice(index, 1);
                }
                if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                    if (typeof selectedNode.children !== 'undefined') {
                        selectedNode.children.push(draggingNode);
                    } else {
                        selectedNode._children.push(draggingNode);
                    }
                } else {
                    selectedNode.children = [];
                    selectedNode.children.push(draggingNode);
                }
                // Make sure that the node being added to is expanded so user 
				//can see added node is correctly moved
                expand(selectedNode);
                sortTree();
                endDrag();
            } else {
                endDrag();
            }
        });

    function endDrag() {
        selectedNode = null;
        d3v3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
        d3v3.select(domNode).attr('class', 'node');
        // now restore the mouseover event or we won't be able to drag a 2nd time
        d3v3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
        updateTempConnector();
        if (draggingNode !== null) {
            update(root);
            centerNode(draggingNode);
            draggingNode = null;
        }
    }

 // color a node properly
  function colorNode(d) {
        result = "#fff";
        if (d.synthetic == true) {
          result = (d._children || d.children) ? "darkgray" : "lightgray";
        }
        else {
          if (d.type == "USDA") {
            result = (d._children || d.children) ? "orangered" : "orange";
          } else if (d.type == "Produce") {
            result = (d._children || d.children) ? "yellowgreen" : "yellow";
          } else if (d.type == "RecipeIngredient") {
            result = (d._children || d.children) ? "skyblue" : "royalblue";
          } else {
            result = "lightsteelblue"
          }
        }
        return result;
    }


    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3v3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3v3.svg.diagonal());

        link.exit().remove();
    };

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3v3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }



var i = 0,
    duration = 750,
    rectW = 60,
    rectH = 30;


var diagonal = d3v3.svg.diagonal()
    .projection(function (d) {
    return [d.x + rectW / 2, d.y + rectH / 2];
});

//dnd var svg = d3.select("#body").append("svg").attr("width", 1000).attr("height", 1000)
var svg = d3v3.select("#body").append("svg").attr("width", 800).attr("height", 400)
    .call(zm = d3v3.behavior.zoom().scaleExtent([1,3]).on("zoom", redraw)).append("g")
    .attr("transform", "translate(" + 350 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([350, 20]);

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

root.children.forEach(collapse);
update(root);

//dnd d3.select("#body").style("height", "800px");
d3v3.select("#body").style("height", "500px", "width", "1000px");


function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);
		

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 90;
    });

    // Update the nodes…
    var node = svg.selectAll("g.node")
        .data(nodes, function (d) {
        return d.id || (d.id = ++i);
    });
	

// Add a context menu
      //  node.on('contextmenu', d3.contextMenu(menu));



    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
        return "translate(" + source.x0 + "," + source.y0 + ")";
    })
        .on("click", click);
		
		

    nodeEnter.append("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
    })
	//dnd  .on('contextmenu', d3.contextMenu(menu));
	 


    nodeEnter.append("text")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text(function (d) {
        return d.name;
    })
	//dnd  .on('contextmenu', d3.contextMenu(menu));
	
	
	
	
	 // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("text-anchor", "middle")
            .text(function(d) {
                return d.name;
            });





    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

    nodeUpdate.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
    });

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
        return "translate(" + source.x + "," + source.y + ")";
    })
        .remove();

    nodeExit.select("rect")
        .attr("width", rectW)
        .attr("height", rectH)
    //.attr("width", bbox.getBBox().width)""
    //.attr("height", bbox.getBBox().height)
    .attr("stroke", "black")
        .attr("stroke-width", 1);

    nodeExit.select("text");

    // Update the links…
    var link = svg.selectAll("path.link")
        .data(links, function (d) {
        return d.target.id;
    });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("x", rectW / 2)
        .attr("y", rectH / 2)
        .attr("d", function (d) {
        var o = {
            x: source.x0,
            y: source.y0
        };
        return diagonal({
            source: o,
            target: o
        });
    });

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
        var o = {
            x: source.x,
            y: source.y
        };
        return diagonal({
            source: o,
            target: o
        });
    })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}


outer_update = update;

 // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
    tree_root = root;
	//Get initial tree obj so I can reload if user does not
	//want to accept changes
	
	rootglobal = root;
	
	
// Toggle children on click.
function click(d) {
if (d3v3.event.defaultPrevented) return; // click suppressed
           if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
      "translate(" + d3v3.event.translate + ")"
      + " scale(" + d3v3.event.scale + ")");
}


  /* dnd start
    // tell the embed parent frame the height of the content
    if (window.parent && window.parent.parent){
      window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: "8bdx4q0e"
      }], "*")
    }

    // always overwrite window.name, in case users try to set it manually
    window.name = "result"
	
	dnd end */
	
	//console.log (root);
	//console.log (tree);
	
 
 
function renameoption(){
// console.log (arraychanges);
    var name = node_to_rename.name;
	var nameid = node_to_rename.id;
	//Find index of specific object using findIndex method.    
objIndex = arraychanges.findIndex((obj => obj.nameid == nameid));//var parentname = (d.data.parentname);

//Update object's name property.
arraychanges[objIndex].name = name;
				
localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
// arraychangeststr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
// arraychangesstrparsed = JSON.parse(arraychangeststr); //becomes arrayaddchildstrparsed[]
	console.log(arraychangesstrparsed);
}


function createoption(){
var name = new_node.name;
var nameid = new_node.id;
var parentname = create_node_parent.name;
var parentid = create_node_parent.id;

var objaddall = {"name": name, 
"nameid": nameid,
"parentname": parentname,
"parentid": parentid};
                        
			   arraychanges.push(objaddall);
			   
localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
// arraychangeststr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
// arraychangesstrparsed = JSON.parse(arraychangeststr); //becomes arrayaddchildstrparsed[]
	console.log(arraychangesstrparsed);

}

var nodetodelete;

function deleteoption(nodetodelete) {

deleterecursive(nodetodelete);

var name = nodetodelete.name;
var nameid = nodetodelete.id;
var parentname = nodetodelete.parent.name;
var parentid = nodetodelete.parent.id;
var objIndex = arraychanges.findIndex((obj => obj.nameid == nameid));//var parentname = (d.data.parentname);
arraychanges.splice(objIndex, 1);

localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraychangesstr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangesstr); 
	console.log(arraychangesstrparsed);
	
}




function deleterecursive(d) {
    if (d._children) {
      d._children.forEach(function(child){
       var name = child.name;
var nameid = child.id;
var parentname = child.parent.name;
var parentid = child.parent.id;
var objIndex = arraychanges.findIndex((obj => obj.nameid == nameid));
arraychanges.splice(objIndex, 1);

localStorage.setItem("arraychangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraychangesstr = localStorage.getItem("arraychangesstr");
// Parse the JSON string back to JS object
 arraychangesstrparsed = JSON.parse(arraychangesstr); 
	console.log(arraychangesstrparsed);
	
      });      
      d._children = d._children;
      d._children.forEach(deleterecursive);
      d._children = null;
    }
  }



 
 function savechanges(){
 localStorage.setItem("arraysavechangesstr", JSON.stringify(arraychanges));
// Retrieve the JSON string
 arraysavechangesstr = localStorage.getItem("arraysavechangesstr");
// Parse the JSON string back to JS object
 arraysavechangesstrparsed = JSON.parse(arraysavechangesstr); 
	console.log(arraysavechangesstrparsed);
  }

      
    // Cursor coordinate functions
var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;

function getXYPosition(e) {
    myMouseX = (e || event).clientX;
    myMouseY = (e || event).clientY;
    if (document.documentElement.scrollTop > 0) {
        myMouseY = myMouseY + document.documentElement.scrollTop;
    }
    if (xyOn) {
	
	if (myMouseX < 30 && myMouseY < 30){
        alert("X is " + myMouseX + "\nY is " + myMouseY);
		}
    }
}

//
document.onmouseup = getXYPosition;


/*
Convert json object to array???
var json_data = initialtreestrparsed
var result = [json_data];
console.log(result);*/




//dnd testsaveinitial();

function testsaveinitial(){
expandAll();
iterateall();
collapseAll();
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
    expandzzz(root); 
    update(root);
}

function collapseAll(){
    root.children.forEach(collapse);
    collapse(root);
    update(root);
}


function iterateall(){
arrayinitialtree = [];
//console.log ("this is iterateall");
 d3v3.selectAll('g.node')  //here's how you get all the nodes
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

