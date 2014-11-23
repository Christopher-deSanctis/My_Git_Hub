var resources = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageList = resources.getDirectoryListing();


// win 2
var win2 = Ti.UI.createWindow({
	backgroundColor : "ffffff",
	bottom : "0dp",
	title : "Exercises",
	barColor : "#ff0000",
	fullscreen : true
});
//////////////////////////////////////////


// table
	var table = Ti.UI.createTableView({
		bottom : "70dp",
		style : Ti.UI.iPhone.TableViewStyle.GROUPED
	});

	win2.add(table);

	for (var i = 0; i < imageList.length; i++) {
		var views = Ti.UI.createImageView({
			image : "images/" + imageList[i],
			backgroundColor : "#ffffff",
			top : "20dp"

		});
	};

	var getDetail = function(views) {
		var detail = Ti.UI.createWindow({
			backgroundColor : "#ffffff",
			barColor : "#ff0000",
			fullscreen : true

		});

		// info labels
		var detailText = Ti.UI.createLabel({
			text : views.title,
			textAlign : "center",
			width : "200dp",
			font : {
				fontSize : "18dp",
				fontFamily : "Arial",
				fontWeight : "bold",
			},
			top : "200dp"

		});

		detail.add(views);
		detail.add(detailText);

		var detailText2 = Ti.UI.createLabel({
			text : views.desc,
			width : "250dp",
			font : {
				fontSize : "12dp",
				fontFamily : "Arial",
				fontWeight : "bold",
			},
			top : "230dp"

		});
		detail.add(detailText2);
/////////////////////////////////////////////////


// large image area
		var largeView = Ti.UI.createImageView({
			image : views.image,
			backgroundColor : "#ffffff",
			top : "10dp"

		});

		detail.add(largeView);

		navWindow.openWindow(detail);
		detail.addEventListener("click", function() {
			this.close();
		});
	};
//////////////////////////////////////////////////////


	// table sections
	var tableSections = [];
	var data = loadjson;
	for (var n in data) {
		var tvs = Ti.UI.createTableViewSection({
			headerTitle : data[n].title,
			footerTitle : data[n].footer
		});
		for (var i = 0; i < data[n].items.length; i++) {
			var row = Ti.UI.createTableViewRow({
				title : data[n].items[i].title,
				desc : data[n].items[i].desc,
				image : data[n].items[i].image,
				hasChild : true,
				leftImage : data[n].items[i].image
			});
			tvs.add(row);

			row.addEventListener("click", function(e) {
				getDetail(e.source);
			});
		};
		tableSections.push(tvs);
		table.setData(tableSections);
	};
	////////////////////////////////////////////////////


// Longpress Event Listener
win2.addEventListener("longpress", function(e) {
	var character = e.source,
	    optionDialog = Ti.UI.createOptionDialog({
		options : ["Edit", "Delete", "Cancel"],
		destructive : 1,
		cancel : 2
	});
	optionDialog.show();
	optionDialog.addEventListener("click", function(e) {
		if (e.index === 1) {
			alertDialog = Ti.UI.createAlertDialog({
				title : "Are you sure you want to delete?",
				buttonNames : ["Delete", "Cancel"],
			});
			alertDialog.addEventListener("click", function(e) {
				if (e.idex === 0) {
					alert("deleted");
				}
			});
			alertDialog.show();
		} else if (e.index === 0) {
			alert("Please enter new information!");
		} else {
		}
	});
});
//////////////////////////////////////////////


// text fields  for Login & Password 
var username = Ti.UI.createTextField({
    color:'#336699',
    top:70,
    left:10,
    width:300,
    height:40,
    hintText:'Username',
    keyboardType:Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
login.add(username);
 
var password = Ti.UI.createTextField({
    color:'#336699',
    top:120,
    left:10,
    width:300,
    height:40,
    hintText:'Password',
    passwordMask:true,
    keyboardType:Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
login.add(password);

var passwordConfirm = Ti.UI.createTextField({
    color:'#336699',
    top:170,
    left:10,
    width:300,
    height:40,
    hintText:'Confirm Password',
    passwordMask:true,
    keyboardType:Ti.UI.KEYBOARD_DEFAULT,
    returnKeyType:Ti.UI.RETURNKEY_DEFAULT,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
login.add(passwordConfirm);
// ////////////////////////////////////////////


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
login.add(loginBtn);

// Login Button Event Listener
loginBtn.addEventListener("click", function(e) {
	if (username.value != '' && password.value != '') {
		navWindow.open();
	} else {
		alert("Username/Password are required");
	}
});

// Navigation Window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : win2
});
///////////////////////////////////////////////


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
win2.add(table);
win2.open();
exports.win2 = win2;