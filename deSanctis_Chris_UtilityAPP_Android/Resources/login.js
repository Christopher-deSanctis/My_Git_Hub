

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


// red banner on bottom of win2
var redView = Ti.UI.createView({
	backgroundColor : "#ff0000",
	height : "45dp",
	bottom : "0dp"
	});
	
// red banner on bottom of login
var redView2 = Ti.UI.createView({
	backgroundColor : "#ff0000",
	height : "45dp",
	bottom : "0dp"
	});
	
login.add(redView2);
win2.add(redView);
win2.open();