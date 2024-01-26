$(document).ready(function(){
    const eventSelector = $("#event-selector");
    var currentEventID =null;

    // first time check

    if (localStorage.getItem("event_id") == null) {

        localStorage.setItem("event_id", eventSelector.val()); 
        currentEventID = eventSelector.val();


    }else{
        currentEventID = localStorage.getItem("event_id");

        eventSelector.val(localStorage.getItem("event_id"));
    }


  

    


    eventSelector.on("change",function(e){
        currentEventID = e.target.value; 
        localStorage.setItem("event_id",currentEventID);
    })



    $(".clickable-side-menu-link").click(function(e){
        e.preventDefault();

        let tmp = $(this).attr("link"); 
        const url = tmp.replace("event_id_js",currentEventID); 
        window.location = url;

    })




})