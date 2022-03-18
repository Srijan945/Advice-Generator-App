const mediaQueryList = window.matchMedia("(min-width: 550px)");
mediaQueryList.addEventListener('change', handleOrientationChange);
function handleOrientationChange(mql) {
    if(mql.matches){
		document.querySelector(".dividerImg").setAttribute("src","images/pattern-divider-desktop.svg");
	}
	else{
		document.querySelector(".dividerImg").setAttribute("src","images/pattern-divider-mobile.svg");
	}
}
handleOrientationChange(mediaQueryList);
