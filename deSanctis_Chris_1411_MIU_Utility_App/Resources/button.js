var vxButtonView = Ti.UI.createImageView({
	image: "images/VX_Button.png",
	top: "345dp",
	left: "163dp"
});
buttonWindow.add(vxButtonView);

vxButtonView.addEventListener('click', function(){
	navWindow.openWindow(mainWindow);
});

exports.vxButtonView = vxButtonView;
