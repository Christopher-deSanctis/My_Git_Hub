
// mainWindow window
var win1 = Ti.UI.createWindow({
	title: "Vita Xtreme",
	backgroundColor: "#000000"
});
////////////////////////////////////


// main page image and text
var mainImage = Ti.UI.createImageView({
	top: "170dp",
	image: "images/vx_logo.png"
});

win1.add(mainImage);
/////////////////////////////////////////

var win2 = require("win2");


// text on main page
var text2 = Ti.UI.createLabel({
	bottom: "90dp",
	color: "#ffffff",
	font: {fontSize: "50dp"},
	textAlign: "center",
	shadowColor: "#cccccc",
    shadowOffset: {x:0,y:3},
	text: "The 5 Best Exercises \nto Get You Fit"
});

win1.add(text2);
/////////////////////////////////////////////////


// Login Window 
var login = Ti.UI.createWindow({
	backgroundColor: "#fafafa",
    title: "Login & Password"
});
// /////////////////////////////////////////


var userPass = Ti.UI.createView({
	top: "100dp",
	left: "100dp"
});

login.add(userPass);



// text fields  for Login & Password 
var username = Ti.UI.createTextField({
    color:'#336699',
    top:"70dp",
    left:"10dp",
    width:"300dp",
    height:"40dp",
    hintText:'Username',
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
userPass.add(username);
 
var password = Ti.UI.createTextField({
    color:'#336699',
    top:"120dp",
    left:"10dp",
    width:"300dp",
    height:"40dp",
    hintText:'Password',
    passwordMask:true,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
userPass.add(password);

var passwordConfirm = Ti.UI.createTextField({
    color:'#336699',
    top:"170dp",
    left:"10dp",
    width:"300dp",
    height:"40dp",
    hintText:'Confirm Password',
    passwordMask:true,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
userPass.add(passwordConfirm);
// ////////////////////////////////////////////


// var passButton = Ti.UI.createButton({
	// title: "Login",
	// top: "300dp"
// });
// 
// userPass.add(passButton);
// 
// 
// passButton.addEventListener("click", function(){
	// open(win2);
// });


// Login Button
var loginBtn = Titanium.UI.createButton({
	title : 'Login',
	bottom : 310,
	width : 90,
	height : 35,
	borderRadius : 1,
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 14
	}
});
userPass.add(loginBtn);


// Login Button Event Listener
loginBtn.addEventListener("click", function(e) {
	if (username.value != '' && password.value != '') {
		open(win2);
	} else {
		alert("Username/Password are required");
	}
});


// top Login button
var buttonBar = Ti.UI.createView({
	backgroundColor: "transparent",
	height:"50dp", 
	top: "5dp"
	});
	
var rightButton = Ti.UI.createButton({
	clickId:"rightButton", 
	title:"Login", 
	right:"50dp"
	});
	
buttonBar.add(rightButton);
 
function buttonClicked(e) {
    if (!e.source.clickId) {
        return;
    }
    switch(e.source.clickId) {
        
        case "rightButton":
            Ti.API.info("rightButton clicked");
            login.open();
    }
}
buttonBar.addEventListener('click', buttonClicked);
	rightButton: login;
	
win1.add(buttonBar);
/////////////////////////////////////////////////////


var data = {
 	table: {
		title: "EXERCISES",
		footer: "Vita Xtreme",
		items: [
			{title: "Preacher Curles", image: "images/0.jpg", desc: "The Preacher curl is performed while standing or seated, with hands hanging down holding weights (palms facing forwards), by curling them up to the shoulders. \n\nIt can be performed with both arms, or one arm at a time."},
			{title: "Lateral Raise", image: "images/1.jpg", desc: "The lateral raise (or shoulder fly) is performed while standing or seated, with hands hanging down holding weights, by lifting them out to the sides until just below the level of the shoulders. \n\nA slight variation in the lifts can hit the deltoids even harder, while moving upwards, just turn the hands slightly downwards, keeping the last finger higher than the thumb. \n\nThis is an isolation exercise for the deltoids. Also works the forearms and traps."},
			{title: "Push Downs", image: "images/2.jpg", desc: "The pushdown is performed while standing by pushing down on a bar held at the level of the upper chest. \n\nIt is important to keep the elbows at shoulder width and in line with shoulder/legs. \n\nIn other words, elbows position should not change while moving the forearm pushes down the bar. \n\nThis is an isolation exercise for the triceps."}, 
			{title: "Sholder Press", image: "images/3.jpg", desc: "The shoulder press is performed while seated, or standing by lowering a weight held above the head to just above the shoulders, and then raising it again. \n\nIt can be performed with both arms, or one arm at a time. \n\nThis is a compound exercise that also involves the trapezius and the triceps. \n\nMajor variants: 360 Degree Shoulder Press (wrists are rotated while weights are lifted, then weights are lowered in front of the head before being rotated back to the first position)."},
	 		{title: "Bench Press", image: "images/4.jpeg", desc: "The person performing the exercise lies on their back with a weight grasped in both hands. They push the weight upwards until their arms are extended, not allowing the elbows to lock. They then lower the weight to chest level. This is one rep."},
	]
	 }
 };

win1.open();
