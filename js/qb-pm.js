 function init() {
     var $ = go.GraphObject.make; // for conciseness in defining templates
     myDiagram =
         $(go.Diagram, "myDiagramDiv", // create a Diagram for the DIV HTML element
             {
                 // position the graph in the middle of the diagram
                 // initialContentAlignment: go.Spot.Center,
                 // allow Ctrl-G to call groupSelection()
                 "commandHandler.archetypeGroupData": {
                     text: "Group",
                     isGroup: true,
                     color: "blue"
                 },
                 // enable undo & redo
                 "undoManager.isEnabled": true
             });
     // Dragging from the Shape will start drawing a new link.
     myDiagram.nodeTemplate =
         $(go.Node, "Horizontal",
             $(go.Panel, "Auto",
                 $(go.Shape, "RoundedRectangle", {
                     fill: "#cce6ff", // the default fill, if there is no data-binding
                     stroke: "#6699ff",
                     height: 40,
                     strokeWidth: 2,
                     portId: "",
                     cursor: "pointer", // the Shape is the port, not the whole Node
                 }),
                 $(go.TextBlock, {
                         editable: true
                     },
                     new go.Binding("text", "key"))
             ),
             $("TreeExpanderButton")
         );
     myDiagram.layout = $(go.TreeLayout, { angle: 90 });
     var nodeDataArray = [{ key: "QB_PM" }, {
             key: "Manas Nair",
             parent: "QB_PM",
             color: "#000"
         }, {
             key: "Devi Chandrika",
             parent: "QB_PM",
         }, {
             key: "Adani Shantigram Community Mobile App",
             parent: "Manas Nair",
         }, {
             key: "Sunny Diamonds e-Commerce Platform",
             parent: "Manas Nair"
         }, //Adani Shantigram Community Mobile App
         {
             key: "Resources",
             parent: "Adani Shantigram Community Mobile App"
         }, {
             key: "Project Managers",
             parent: "Resources"
         }, {
             key: "Manooja Manoharan",
             parent: "Project Managers"
         }, {
             key: "Saju Devasia",
             parent: "Project Managers"
         }, {
             key: "Business Analyst",
             parent: "Resources"
         }, {
             key: "Rohith Ramesh",
             parent: "Business Analyst"
         }, {
             key: "Team Lead",
             parent: "Resources"
         }, {
             key: "Al-Muneef Saifudeen",
             parent: "Team Lead"
         }, {
             key: "Sajeer Noohukannu",
             parent: "Team Lead"
         }, {
             key: "Manu Mohan",
             parent: "Team Lead"
         }, {
             key: "Developer",
             parent: "Resources"
         }, {
             key: "Santo Philip",
             parent: "Developer"
         }, {
             key: "Ajeem Ashraf",
             parent: "Developer"
         }, {
             key: "Deena Philip",
             parent: "Developer"
         }, {
             key: "Akshaya Thazhathu",
             parent: "Developer"
         }, {
             key: "Jayashankar Babu",
             parent: "Developer"
         }, {
             key: "UX Designer",
             parent: "Resources"
         }, {
             key: "Nandu Sreekumar",
             parent: "UX Designer"
         }, {
             key: "Tester",
             parent: "Resources"
         }, {
             key: "Shaira Nooh",
             parent: "Tester"
         }, {
             key: "Designer",
             parent: "Resources "
         }, {
             key: "Anoop Krishna",
             parent: "Designer"
         }, {
             key: "Details",
             parent: "Adani Shantigram Community Mobile App"
         }, {
             key: "Customer",
             parent: "Details"
         }, {
             key: "Vertical",
             parent: "Details"
         }, {
             key: "Project Category",
             parent: "Details"
         }, {
             key: "Project Status",
             parent: "Details"
         }, {
             key: "Technology",
             parent: "Details"
         }, {
             key: "Description",
             parent: "Details"
         }, // Sunny Diamonds e-Commerce Platform
         {
             key: "Resources ",
             parent: "Sunny Diamonds e-Commerce Platform"
         }, {
             key: "Project Managers ",
             parent: "Resources "
         }, {
             key: "Vibhin Sreevalsan",
             parent: "Project Managers "
         }, {
             key: "Saju Devasia ",
             parent: "Project Managers "
         }, {
             key: "Business Analyst ",
             parent: "Resources "
         }, {
             key: "Architect ",
             parent: "Resources "
         }, {
             key: "Lekshmi Krishnan",
             parent: "Architect "
         },
         {
             key: "Rohith Gabriel",
             parent: "Business Analyst "
         }, {
             key: "Team Lead ",
             parent: "Resources "
         }, {
             key: "Abhilash Vijayan",
             parent: "Team Lead "
         }, {
             key: "Module Lead ",
             parent: "Resources "
         }, {
             key: "Nithal Ajayakumar",
             parent: "Module Lead "
         }, {
             key: "Developer ",
             parent: "Resources "
         }, {
             key: "Nimmi Sasidharan",
             parent: "Developer "
         }, {
             key: "Sreya Paul",
             parent: "Developer "
         }, {
             key: "Seena James",
             parent: "Developer "
         },  {
             key: "UX Designer ",
             parent: "Resources "
         }, {
             key: "Afthab Ali",
             parent: "UX Designer "
         }, {
             key: "Tester ",
             parent: "Resources "
         }, {
             key: "Anuja Murukesh",
             parent: "Tester "
         }, {
             key: "Details ",
             parent: "Sunny Diamonds e-Commerce Platform"
         }, {
             key: "Customer ",
             parent: "Details "
         }, {
             key: "Vertical ",
             parent: "Details "
         }, {
             key: "Project Category ",
             parent: "Details "
         }, {
             key: "Project Status ",
             parent: "Details "
         }, {
             key: "Technology ",
             parent: "Details "
         }, {
             key: "Description ",
             parent: "Details "
         }


     ];
     myDiagram.model = new go.TreeModel(nodeDataArray);
 }
