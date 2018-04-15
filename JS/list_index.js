(function(){ 
  var speed = 1100,
      containers = document.getElementsByClassName("u-fancy-load");
  for(var c = 0; c < containers.length; c++){
    var container = containers[c],
        children = container.children;
    
    if(!container.classList.contains("delay-set")){
      container.classList.add("delay-set");
      
      for(var i = 0; i < children.length; i++){
        var child = children[i],
            childOffset = child.getBoundingClientRect(),
            offset = childOffset.left*0.8 + childOffset.top,
            delay = parseFloat(offset/speed).toFixed(2);
        
        child.style.webkitTransitionDelay = delay + "s";
        child.style.transitionDelay = delay + "s";
      }
    }
    container.classList.add("u-fancy-load--in");
 }
})();


var buttons = document.getElementsByTagName("button"),
    containers = document.getElementsByClassName("u-fancy-load");

for(var i = 0; i < buttons.length; i++){
 buttons[i].addEventListener("click", function(e){
   var attr = this.getAttribute("data-animation"),
       opposite = attr === "in" ? "out" : "in";
   console.log(attr);
   for(var c = 0; c < containers.length; c++){
     containers[c].classList.remove("u-fancy-load--" + opposite);
     containers[c].classList.add("u-fancy-load--" + attr);
   }
 }, false);
}
