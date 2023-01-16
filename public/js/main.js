$("document").ready(function(){
    $(".portfolio-img").hover(function(e){
      const target = e.target;

      if(target.matches("img")){

        const titlename = target.alt.toUpperCase();
        $(target).prop("title", titlename)
      }
    })
})
   
    
$(".whatweDo").click(function(e){
  const atclick = e.target;
  if (atclick.matches("img")){
    var nar = atclick.previousElementSibling;
    $(atclick).toggle();
    $(nar).toggle();
  }
  else if(atclick.matches("h3") || atclick.matches("p")){
    var nar = atclick.parentElement.nextElementSibling;
    $(atclick.parentElement).toggle();
    $(nar).toggle();
  }
})
