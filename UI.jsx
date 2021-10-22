// DIALOG
// ======
var dialog = new Window("dialog", undefined, undefined, {resizeable: true}); 
    dialog.text = "SuperLayer"; 
    dialog.preferredSize.width = 200; 
    dialog.preferredSize.height = 200; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 10; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var button1 = group1.add("button", undefined, undefined, {name: "button1"}); 
    button1.text = "Adj"; 

var button2 = group1.add("button", undefined, undefined, {name: "button2"}); 
    button2.text = "Cam"; 

var button3 = group1.add("button", undefined, undefined, {name: "button3"}); 
    button3.text = "Light"; 

var button4 = group1.add("button", undefined, undefined, {name: "button4"}); 
    button4.text = "Null"; 

// GROUP2
// ======
var group2 = dialog.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var button5 = group2.add("button", undefined, undefined, {name: "button5"}); 
    button5.text = "Solid"; 

var button6 = group2.add("button", undefined, undefined, {name: "button6"}); 
    button6.text = "Text"; 

var button7 = group2.add("button", undefined, undefined, {name: "button7"}); 
    button7.text = "Twixtor"; 

var button8 = group2.add("button", undefined, undefined, {name: "button8"}); 
    button8.text = "Twixtor2"; // PANEL1

// ======
var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "One Framers"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 
    panel1.alignment = ["left","top"]; 

var dropdown1_array = ["1","2","3","4"]; 
var dropdown1 = panel1.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
    dropdown1.selection = 0; 

var button1 = panel1.add("button", undefined, undefined, {name: "button1"}); 
    button1.text = "Apply"; 
dialog.show();
