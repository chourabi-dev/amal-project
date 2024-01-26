$(document).ready(function(){


    // filters

    let timeFiler = $("#time-filter");
    var timeFilterValue = '';
    

    let dateFiler = $("#date-filter");
    var dateFilterValue = '';
    

    let participantFiler = $("#participant-filter");
    var participantFilerValue = '';
    

    let tableFilter = $("#table-filter");
    var tableFilterValue = '';
    

    let searchEngine = $("#search-engine");
    let searchEngineValue ='';


    function search(){ 
        
        $(".search-time-line").each(function(el){
             
            if (tableFilterValue != "") {
                
                if ( 
                
                    $(this).attr('time-filter').indexOf(timeFilterValue) != -1 
                    &&
                    $(this).attr('date-filter').indexOf(dateFilterValue) != -1 
                    &&
                    $(this).attr('table-filter') == tableFilterValue
                    
     
                    ) {
                        
                        $(this).css({"display":"table-row"})
                        
                        $(this).removeClass("hidden-row")
                }else{
                    $(this).css({"display":"none"})
                    $(this).addClass("hidden-row")
                }

            } else {
                

                if ( 
                
                    $(this).attr('time-filter').indexOf(timeFilterValue) != -1 
                    &&
                    $(this).attr('date-filter').indexOf(dateFilterValue) != -1 
                    
     
                    ) {
                        
                        $(this).css({"display":"table-row"})
                        
                        $(this).removeClass("hidden-row")
                }else{
                    $(this).css({"display":"none"})
                    $(this).addClass("hidden-row")
                }


            }
        })

        


        $(".search-time-line").each(function(el){
              


            if ( $(this).hasClass('hidden-row') == false) {
                if ( 
                
                    $(this).attr('time-filter').indexOf(searchEngineValue) != -1 
                    ||
                    $(this).attr('date-filter').indexOf(searchEngineValue) != -1 
                    ||
                    $(this).attr('table-filter').indexOf(searchEngineValue) != -1 
                    
                    ||
                    $(this).attr('participant-name').toLowerCase().indexOf(searchEngineValue.toLowerCase()) != -1 
                    

                    ||
                    $(this).attr('session-name').toLowerCase().indexOf(searchEngineValue.toLowerCase()) != -1 
                    
      
                    ) {    
    
                        
                    $(this).css({"display":"table-row"})
                }else{
                    $(this).css({"display":"none"})
                }
            }



        })

        
    }

    
    function participantCHangeUI(){
        

        $(".participant-item").each(function(el){
            if(  $(this).attr('participant-filter') === participantFilerValue  ){
                $(this).show();
            }else{
                $(this).hide();
            }
        })
        


        /*if (val === '') {
            $(".participant-item").show();

        }*/
    }





    timeFiler.on('change',(e)=>{
        const val = e.target.value; 
        console.log(val); 
        timeFilterValue = val;  
        //search();
    })



    dateFiler.on('change',(e)=>{
        const val = e.target.value; 
        console.log(val); 
        dateFilterValue = val;  
        //search();
    })


    participantFiler.on('change',(e)=>{
        const val = e.target.value; 
        console.log(val); 
        participantFilerValue = val;  

        //participantCHangeUI();

        
    })



    tableFilter.on('keyup',(e)=>{
        const val = e.target.value; 
        console.log(val); 
        tableFilterValue = val;  

        //participantCHangeUI();

        
    })

    tableFilter.on('change',(e)=>{
        const val = e.target.value; 
        console.log(val); 
        tableFilterValue = val;  

        //participantCHangeUI();

        
    })



    searchEngine.on('change',(e)=>{
        const val = e.target.value;  
        searchEngineValue = val;  

        //participantCHangeUI();

        
    })



     


    $("#reset-btn").click(function(){
       
    })

    $("#search-btn").click(function(){
        
        search();
        
        if (participantFilerValue != '') {
            participantCHangeUI();
        }
    })







    /***************************** */




    function updateRealiationsStatus(id,status){

        // find the target and edit it
        $("."+id).val(status);

        const ajaxParams = {
            dataType: 'json',
            method: 'POST',
            data: {  },
            timeout: 30000,
            url:'/common/meeting-sessions/update_session_meeting_realisation/'+id+'/'+status
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
            console.log(response);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            
        }).always(function() {
            
        });
    }
    
    function updatePresenceStatus(id,status,primaryUSER){
        const ajaxParams = {
            dataType: 'json',
            method: 'POST',
            data: {   },
            timeout: 30000,
            url:'/common/meeting-sessions/update_session_meeting_presence/'+id+'/'+status+'/'+primaryUSER
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
            console.log(response);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            
        }).always(function() {
            
        });
    }
    


    $(".update-presence").on('change',function(e){ 
        const status = e.target.value; 
        const uniqueID = $(this).attr('id-session');
        const targetUser = $(this).attr('target-user');
        


        console.log(status,uniqueID,targetUser);

    
        
        updatePresenceStatus(uniqueID,status,targetUser);
        
    })


 
    
    $(".update-realisation").on('change',function(e){
        const id = $(this).attr('id-session');
        const status = e.target.value;


        updateRealiationsStatus(id,status);
        
    })


         


         


    /*********************************NEW **********************************************/

    let searchByParticipantName = $("#search-by-participant-name");
    let searchByParticipantCompanyName = $("#search-by-participant-company-name");
    let searchByParticipantPhoneNumber = $("#search-by-participant-phone-number");
    let searchByParticipantSector = $("#search-by-participant-activity-sectors");
    let searchByProfile = $("#search-by-profile");
    
    
    let searchByMeetingTable= $("#search-by-meeting-table");
    let searchBySession = $("#search-by-session");
    let emptyTables = $("#show-only-empty-tables");

    
    
     

    let searchByTimingSlot = $("#search-by-timing-slot");
    
    let searchParticipantByAgent = $("#search-by-agent");


    

    // class="participant-search" name="{{ p  }}" phone="{{ p.user.phone }}" company="{{ p.user.companyEtablishment }}"  >
   
    searchByParticipantName.on("keyup",function(){  
        searchByParticipant(); 
    })
    searchByParticipantCompanyName.on("keyup",function(){  
        searchByParticipant(); 
    })
    searchByParticipantPhoneNumber.on("keyup",function(){  
        searchByParticipant(); 
    })

    searchByParticipantSector.on("change",function(){  
        searchByParticipant(); 
    })

    searchByProfile.on("change",function(){  
        searchByParticipant(); 
    })



    function searchByParticipant(){

        // inputs
        const name = searchByParticipantName.val().trim().toLowerCase();
        const company = searchByParticipantCompanyName.val().trim().toLowerCase();
        const phone = searchByParticipantPhoneNumber.val().trim().toLowerCase();
        const secteur = searchByParticipantSector.val().trim().toLowerCase();
        const profile = searchByProfile.val().trim().toLowerCase();
        

        $(".participant-search").each(function(){

            let condition = $(this).attr("name").toLowerCase().indexOf(name) != -1
            &&
            $(this).attr("phone").toLowerCase().indexOf(phone) != -1
            &&
            $(this).attr("company").toLowerCase().indexOf(company) != -1;

            if (secteur != "") {
                condition = condition && $(this).attr("sector") == secteur
            }
            if (profile != "") {
                condition = condition && $(this).attr("profile") == profile
            }

            
            if (  condition ) { $(this).css({display:"block"}) } else{ $(this).css({display:"none"}) }
        })
    }


    searchByMeetingTable.on("keyup",function(){  
        searchByTable(); 
    })

    searchBySession.on("change",function(){  
        searchByTable(); 
    })

    emptyTables.on("change",function(){  
        searchByTable(); 
    })



    function searchByTable(){
  // inputs
        const table = searchByMeetingTable.val().trim().toLowerCase();
        const session = searchBySession.val().trim().toLowerCase(); 
        const empty = emptyTables.prop("checked");
        

        console.log(empty);

        $(".table-search").each(function(){

            let condition =  true;

            

            if (table != "") {
                condition = condition && $(this).attr("table") == table
            }
            
            if (session != "") {
                condition = condition && $(this).attr("session") == session
            }

            if (empty == true) {
                condition = condition &&  Number($(this).attr("meetings")) == 0
            }

           
            
            
            if (  condition ) { $(this).css({display:"block"}) } else{ $(this).css({display:"none"}) }
        })
    }




    searchByTimingSlot.on("change",function(){  
        searchByTmingSlot();

    })



    function searchByTmingSlot(){
        const slot = searchByTimingSlot.val().trim().toLowerCase();

        $(".search-by-iming-slot").each(function(){
            let condition =  true;

            

            if (slot != "") {
                condition = condition && $(this).attr("slot").trim().toLowerCase() == slot
            }
              
            
            if (  condition ) { $(this).css({display:"block"}) } else{ $(this).css({display:"none"}) }
        })
    }


})