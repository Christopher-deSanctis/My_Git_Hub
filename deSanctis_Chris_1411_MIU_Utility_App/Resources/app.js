
var loadjson = require("json").data;


// Button Window
var buttonWindow = Ti.UI.createWindow({
	backgroundColor: "#000000",
	fullscreen: true,
	backgroundImage: "images/image_34.png"
});
var loadbutton = require("button");

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: buttonWindow
	});
/////////////////////////////////////////////////

// mainWindow window
var mainWindow = Ti.UI.createWindow({
	fullscreen: true,
	title: "Vita Xtreme",
	backgroundColor: "#000000",
	barColor: "#ff0000"
});
////////////////////////////////////


// Login Window 
var login = Ti.UI.createWindow({
	fullscreen: true,
	backgroundColor: "#fafafa",
    title: "Login & Password",
    navBarHidden: true
});
// /////////////////////////////////////////


var loadwin2 = require("win2").win2;

var loadlogin = require("login");


// main page image and text
var mainImage = Ti.UI.createImageView({
	top: "34dp",
	image: "images/vx_logo.png"
});

mainWindow.add(mainImage);
/////////////////////////////////////////


// top Login button
var buttonBar = Ti.UI.createView({
	backgroundColor: "transparent",
	height:50, 
	top: "5dp"
	});
	
var rightButton = Ti.UI.createButton({
	clickId:"rightButton", 
	title:"Login", 
	right:50
	});
	
buttonBar.add(rightButton);
 
function buttonClicked(e) {
    if (!e.source.clickId) {
        return;
    }
    switch(e.source.clickId) {
        
        case "rightButton":
            Ti.API.info("rightButton clicked");
            navWindow.openWindow(login);
    }
}
buttonBar.addEventListener('click', buttonClicked);
	rightButton: login;
	
mainWindow.add(buttonBar);
/////////////////////////////////////////////////////


// text on main page
var text2 = Ti.UI.createLabel({
	bottom: "44dp",
	color: "#ffffff",
	font: {fontSize: 40},
	textAlign: "center",
	shadowColor: "#cccccc",
    shadowOffset: {x:0,y:3},
	text: "The 5 Best Exercises to Get You Fit"
});

mainWindow.add(text2);
/////////////////////////////////////////////////

 
navWindow.open();