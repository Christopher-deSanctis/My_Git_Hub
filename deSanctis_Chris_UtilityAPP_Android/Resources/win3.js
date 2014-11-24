var resources = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageList = resources.getDirectoryListing();

// netfix image on android main page
var androidmainImage = Ti.UI.createImageView({
	top: "160dp",
	image: "images/film_netlifx.gif"
});

win3.add(androidmainImage);
///////////////////////////////////////


// text on android main page
var text = Ti.UI.createLabel({
	top: "30dp",
	color: "#000000",
	font: {fontSize: 80},
	shadowColor: "#d3d3d3",
    shadowOffset: {x:0,y:4},
	text: "The 20 Best"
});

win3.add(text);

var text2 = Ti.UI.createLabel({
	bottom: "100dp",
	color: "#000000",
	font: {fontSize: 80},
	textAlign: "center",
	shadowColor: "#d3d3d3",
    shadowOffset: {x:0,y:4},
	text: "Movies of \nAll Time"
});

win3.add(text2);
//////////////////////////////////////////////////


// Android table window
var win4 = Ti.UI.createWindow({
    backgroundColor: "#ffffff",
    bottom: "0dp",
    title: "Movies",
    barColor: "#ff0000",
    fullscreen: true
});
/////////////////////////////////////////////


// red click box on bottom of win3
var redboxView = Ti.UI.createView({
	backgroundColor : "#ff0000",
	height : "45dp",
	width: "80dp",
	bottom : "0dp"
});

var redboxButton = Ti.UI.createButton({
    title: "Click"
});
win3.add(redboxView);
redboxView.add(redboxButton);

redboxButton.addEventListener("click", function(){
   win4.open();
});
/////////////////////////////////////////////////


for (var i = 0; i < imageList.length; i++) {
	var views = Ti.UI.createImageView({
        image: "images/" + imageList[i],
        backgroundColor: "#ffffff",
		top: "20dp"

    });
   }

var getDetail = function(views){
		image: views.image;
	var detail = Ti.UI.createWindow({
		backgroundColor: "#ffffff",
		barColor: "#ff0000",
		fullscreen: true,
		
	});
	
	// info labels
	var detailText = Ti.UI.createLabel({
		text: views.title,
		textAlign: "center",
		width: "200dp",
		font : {
		fontSize : "18dp",
		fontFamily : "Arial",
		fontWeight : "bold",
	},
	top: "200dp"

	});
   
    detail.add(views);
    detail.add(detailText);
    
    var detailText2 = Ti.UI.createLabel({
		text: views.desc,
		width: "250dp",
		font: {
		fontSize: "12dp",
		fontFamily : "Arial",
		fontWeight : "bold",
	},
	top: "230dp"

	});
    detail.add(detailText2);
    
    
// large image area
    var largeView = Ti.UI.createImageView({
        image: views.image,
        backgroundColor: "#ffffff",
		top: "10dp"

    });
    detail.add(largeView);
//////////////////////////////////////////////


// red banner on bottom of detail    
var redView2 = Ti.UI.createView({
	backgroundColor : "#ff0000",
	height: "45dp",
	bottom: "0dp"
});
detail.add(redView2);
//////////////////////////////////////////////

detail.addEventListener("click", function(){
		 this.close();
	 });
};


var table = Ti.UI.createTableView({
        backgroundColor:'transparent',
        separatorColor:'transparent',
});
        
// table
var tableSections = [];

for(var n in data){
	var tvs = Ti.UI.createTableViewSection({
		headerTitle: data[n].title,
		footerTitle: data[n].footer
	});
for (var i = 0; i < data[n].items.length; i++){
	var row = Ti.UI.createTableViewRow({
    	backgroundColor:'#FFF',
    	height:Ti.UI.SIZE,
    	layout:'vertical',
    	title: data[n].items[i].title,
		desc: data[n].items[i].desc,
		image: data[n].items[i].image,
		leftImage: data[n].items[i].image
});
 tvs.add(row);
		
row.addEventListener("click", function(e){
			getDetail(e.source);
		});
};
	tableSections.push(tvs);
	table.setData(tableSections);
};


// var rowContent = Ti.UI.createView({
    // height:20,
    // left:5,
    // right:5,
    // top:10,
    // bottom:10,
    // borderColor:'#C00',
    // borderWidth:1,
// });
//  
// var contentContent = Ti.UI.createLabel({
    // backgroundColor: 'white',
    // text:'This is a test'
// });
//  
// rowContent.add(contentContent);
//  
// row.add(rowContent);
 
//table.appendRow(row);
win4.add(table);