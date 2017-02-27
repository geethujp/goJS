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

        $(go.Node, "Horizontal",{
  isTreeExpanded: false
        },
            $(go.Panel, "Auto",
                $(go.Shape, "RoundedRectangle", {
                    fill: "#cce6ff", // the default fill, if there is no data-binding
                    stroke: "#6699ff",
                    height: 40,
                    strokeWidth: 2,
                    portId: "",
                    cursor: "pointer", // the Shape is the port, not the whole Node
                },new go.Binding("fill", "fill")),
                $(go.TextBlock, {
                        editable: true
                    },
                    new go.Binding("text", "text"))
            ),
            $("TreeExpanderButton", { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top }, { visible: true })
        );
    myDiagram.layout = $(go.TreeLayout, { angle: 90 });
  var nodeDataArray = [
            { key: 1, text: "QB_PM", fill: "#ff5722", stroke: "#4d90fe" },
            { key: 2, text: "Manas Nair", fill: "#fdd835", stroke: "#8e24aa", parent: 1 },
            { key: 3, text: "Devi Chandrika", fill: "#fdd835", stroke: "#8e24aa", parent: 1 },
            { key: 4, text: "Adani Shantigram Community Mobile App", fill: "#c5e1a5", stroke: "#4d90fe", parent: 2 },
            { key: 5, text: "Sunny Diamonds e-Commerce Platform", fill: "#c5e1a5", stroke: "#4d90fe", parent: 2 },
            { key: 6, text: "Resources", fill: "#4db6ac", stroke: "#aed581", parent: 4 },
            { key: 7, text: "Project Managers", fill: "#90a4ae", stroke: "#9ccc65", parent: 6 },
            { key: 8, text: "Saju Devasia", fill: "#cfd8dc", stroke: "#4d90fe", parent: 7 },
            { key: 9, text: "Business Analyst", fill: "#a1887f", stroke: "#9ccc65", parent: 6 },
            { key: 10, text: "Rohith Ramesh", fill: "#d7ccc8", stroke: "#4d90fe", parent: 9 },
            { key: 11, text: "Team Lead", fill: "#ff8a65", stroke: "#9ccc65", parent: 6 },
            { key: 12, text: "Al-Muneef Saifudeen", fill: "#ffccbc", stroke: "#4d90fe", parent: 11 },
            { key: 13, text: "Sajeer Noohukannu", fill: "#ffccbc", stroke: "#4d90fe", parent: 11 },
            { key: 14, text: "Manu Mohan", fill: "#ffccbc", stroke: "#4d90fe", parent: 11 },
            { key: 15, text: "Developer", fill: "#ffa726", stroke: "#9ccc65", parent: 6 },
            { key: 16, text: "Santo Philip", fill: "#ffe0b2", stroke: "#4d90fe", parent: 15 },
            { key: 17, text: "Ajeem Ashraf", fill: "#ffe0b2", stroke: "#4d90fe", parent: 15 },
            { key: 18, text: "Deena Philip", fill: "#ffe0b2", stroke: "#4d90fe", parent: 15 },
            { key: 19, text: "Jayashankar Babu", fill: "#ffe0b2", stroke: "#4d90fe", parent: 15 },
            { key: 20, text: "UX Designer", fill: "#cddc39", stroke: "#9ccc65", parent: 6 },
            { key: 21, text: "Nandu Sreekumar", fill: "#e6ee9c", stroke: "#4d90fe", parent: 20 },
            { key: 22, text: "Tester", fill: "#00bcd4", stroke: "#9ccc65", parent: 6 },
            { key: 23, text: "Shaira Nooh", fill: "#b2ebf2", stroke: "#4d90fe", parent: 22 },
            { key: 24, text: "Designer", fill: "#e57373", stroke: "#9ccc65", parent: 6 },
            { key: 25, text: "Anoop Krishna", fill: "#ffcdd2", stroke: "#4d90fe", parent: 24 },
            { key: 26, text: "Details", fill: "#2196f3", stroke: "#aed581", parent: 4 },
            { key: 27, text: "Customer", fill: "#f48fb1", stroke: "#9ccc65", parent: 26 },
            { key: 28, text: "Vertical", fill: "#f48fb1", stroke: "#9ccc65", parent: 26 },
            { key: 29, text: "Project Category", fill: "#f48fb1", stroke: "#9ccc65", parent: 26 },
            { key: 30, text: "Project Status", fill: "#f48fb1", stroke: "#9ccc65", parent: 26 },
            { key: 31, text: "Technology", fill: "#f48fb1", stroke: "#9ccc65", parent: 26 },
            { key: 32, text: "Description", fill: "#f48fb1", stroke: "#9ccc65", parent: 26 },
            { key: 33, text: "Resources", fill: "#4db6ac", stroke: "#aed581", parent: 5 },
            { key: 34, text: "Project Managers", fill: "#90a4ae", stroke: "#9ccc65", parent: 33 },
            { key: 35, text: "Saju Devasia", fill: "#cfd8dc", stroke: "#4d90fe", parent: 34 },
            { key: 36, text: "Business Analyst", fill: "#a1887f", stroke: "#9ccc65", parent: 33 },
            { key: 37, text: "Rohith Ramesh", fill: "#d7ccc8", stroke: "#4d90fe", parent: 36 },
            { key: 38, text: "Team Lead", fill: "#ff8a65", stroke: "#9ccc65", parent: 33 },
            { key: 39, text: "Al-Muneef Saifudeen", fill: "#ffccbc", stroke: "#4d90fe", parent: 38 },
            { key: 40, text: "Sajeer Noohukannu", fill: "#ffccbc", stroke: "#4d90fe", parent: 38 },
            { key: 41, text: "Manu Mohan", fill: "#ffccbc", stroke: "#4d90fe", parent: 38 },
            { key: 42, text: "Developer", fill: "#ffa726", stroke: "#9ccc65", parent: 33 },
            { key: 43, text: "Santo Philip", fill: "#ffe0b2", stroke: "#4d90fe", parent: 42 },
            { key: 44, text: "Ajeem Ashraf", fill: "#ffe0b2", stroke: "#4d90fe", parent: 42 },
            { key: 45, text: "Deena Philip", fill: "#ffe0b2", stroke: "#4d90fe", parent: 42 },
            { key: 46, text: "Jayashankar Babu", fill: "#ffe0b2", stroke: "#4d90fe", parent: 42 },
            { key: 47, text: "UX Designer", fill: "#cddc39", stroke: "#9ccc65", parent: 33 },
            { key: 48, text: "Nandu Sreekumar", fill: "#e6ee9c", stroke: "#4d90fe", parent: 47 },
            { key: 49, text: "Tester", fill: "#00bcd4", stroke: "#9ccc65", parent: 33 },
            { key: 50, text: "Shaira Nooh", fill: "#b2ebf2", stroke: "#4d90fe", parent: 49 },
            { key: 51, text: "Designer", fill: "#e57373", stroke: "#9ccc65", parent: 33 },
            { key: 52, text: "Anoop Krishna", fill: "#ffcdd2", stroke: "#4d90fe", parent: 51 },
            { key: 53, text: "Details", fill: "#2196f3", stroke: "#aed581", parent: 5 },
            { key: 54, text: "Customer", fill: "#f48fb1", stroke: "#9ccc65", parent: 53 },
            { key: 55, text: "Vertical", fill: "#f48fb1", stroke: "#9ccc65", parent: 53 },
            { key: 56, text: "Project Category", fill: "#f48fb1", stroke: "#9ccc65", parent: 53 },
            { key: 57, text: "Project Status", fill: "#f48fb1", stroke: "#9ccc65", parent: 53 },
            { key: 58, text: "Technology", fill: "#f48fb1", stroke: "#9ccc65", parent: 53 },
            { key: 59, text: "Description", fill: "#f48fb1", stroke: "#9ccc65", parent: 53 }
        ]

    myDiagram.model = new go.TreeModel(nodeDataArray);

}
