var pressed = false,
    isResized = false,
    start = undefined,
    resizeStepWidth = 15,
    startX, startY, startTop, startLeft, startWidth, startHeight, offsetX, offsetY, newWidth, newHeight;

// floatingTouchBlock Methods

function method_initTouchblockCovers() {
    var touchsurface = document.querySelectorAll("div.touchblockMoveCover");
    for (var i = 0; i < touchsurface.length ; i++) {
        touchsurface[i].addEventListener('touchstart', method_touchStartFunction, false);
        touchsurface[i].addEventListener('touchmove', method_touchMoveFloating, false);
        touchsurface[i].addEventListener('touchend', method_touchEndFunction, false);
    }
    
    var touchsurface = document.querySelectorAll("div.touchblockResizeCover");
    for (var i = 0; i < touchsurface.length ; i++) {
        touchsurface[i].addEventListener('touchstart', method_touchStartFunction, false);
        touchsurface[i].addEventListener('touchmove', method_touchMoveFunction, false);
        touchsurface[i].addEventListener('touchend', method_touchEndFunction, false);
    }
    
    var touchsurfaceDiv = document.querySelectorAll("div.touchblock");
    for (var i = 0; i < touchsurfaceDiv.length ; i++) {
        touchsurfaceDiv[i].contentEditable = true;
    }
    
    var touchsurfaceDiv = document.querySelectorAll("div.flex-row");
    for (var i = 0; i < touchsurfaceDiv.length ; i++) {
        touchsurfaceDiv[i].contentEditable = false;
    }
}

function method_enterLayoutMode() {
    var touchsurface = document.querySelectorAll("div.touchblockMoveCover");
    for (var i = 0; i < touchsurface.length ; i++) {
        touchsurface[i].style.display= "block";
    }
    
    var touchsurface = document.querySelectorAll("div.touchblockResizeCover");
    for (var i = 0; i < touchsurface.length ; i++) {
        touchsurface[i].style.display= "block";
    }
}

function method_enterContentMode() {
    var touchsurface = document.querySelectorAll("div.touchblockMoveCover");
    for (var i = 0; i < touchsurface.length ; i++) {
        touchsurface[i].style.display= "none";
    }
    
    var touchsurface = document.querySelectorAll("div.touchblockResizeCover");
    for (var i = 0; i < touchsurface.length ; i++) {
        touchsurface[i].style.display= "none";
    }
}

function method_touchStartFunction(e){
    e.stopPropagation();
    start = $(this).parent();
    pressed = true;
    startX = e.pageX;
    startY = e.pageY;
    startWidth = $(start).width();
    startHeight = $(start).height();
    startLeft = $(start).position().left;
    startTop = $(start).position().top;
    e.preventDefault();
}

function method_touchMoveFunction(e){
    offsetX = e.pageX-startX;
    offsetY = e.pageY-startY;
    
    if (!isResized) {
        if ((Math.abs(offsetX) > resizeStepWidth) || (Math.abs(offsetY) > resizeStepWidth)) {isResized = true;}
    }
    
    if(pressed && isResized) {
        $(start).width(startWidth+offsetX);
        $(start).height(startHeight+offsetY);
    }
    e.preventDefault();
}

function method_touchMoveFloating(e){
    offsetX = e.pageX-startX;
    offsetY = e.pageY-startY;
    
    if (!isResized) {
        if ((Math.abs(offsetX) > resizeStepWidth) || (Math.abs(offsetY) > resizeStepWidth)) {isResized = true;}
    }
    
    if(pressed && isResized) {
        $(start).css({top: startTop+offsetY, left: startLeft+offsetX, position:'absolute'});
    }
    e.preventDefault();
}

function method_touchEndFunction(e){
    if(pressed) {
        pressed = false;
    }
    
    if(isResized){
        isResized = false;
        
        newWidth = round($(start).width(), resizeStepWidth)
        newHeight = round($(start).height(), resizeStepWidth)
        
        $(start).width(newWidth);
        $(start).height(newHeight);
    } else {
        javaScriptCallToSwift.test();
    }
    
    e.preventDefault();
}

function method_cloneTouchblock() {
    var $clone = $(start).clone();
    $(start).parent().append($clone);
}

function method_setTouchblockFilter(filterType){
    $(start).css("filter",filterType);
}

function method_changeStartBackgroundColor(color){
    $(start).css("background-color",color);
}

function method_changeStartBackgroundImage(url, alt) {
    $(start).css("background-image", "url(" + url + ")");
};

function mehtod_setStartTextOrientationVertical() {
    $(start).css("writing-mode", "vertical-lr");
}

function mehtod_setStartTextOrientationHorizon() {
    $(start).css("writing-mode", "horizontal-tb");
}

function mehtod_removeStart() {
    $(start).remove();
}

var round = function (x, to) {
    return Math.round(x / to) * to;
};


function setEndOfContenteditable()
{
    var range,selection;
    var contentEditableElement = document.getElementById('editor');
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    {
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}
