$(document).ready(function(){




    $(".change_availability_state").change(function(){
        const sessionID = $(this).val();

     
        const checked = $(this).prop('checked');

        console.log(checked);

        const pingURL = '/main-app/api/update-avaibility-session/'+sessionID;
        const params = {
            dataType: 'json',
            method: 'POST', 
            timeout: 30000,
            url:pingURL,
            body: { state: checked }
        }
        $.ajax(params).done(function(response, textStatus, jqXHR) {
            console.log(response);
        });
    
    });








    let invitationsCount = $("#invitations-count");
    let roomID =  $("#room-id").val();
    
    
    function showAlert(message){
        $(".bloc-message").html(message);
        $(".alert-toast").animate({'bottom':'0'},1000)

        setTimeout(() => {
            $(".alert-toast").animate({'bottom':'-200px'},1000) 
        }, 4000);
        
        
    }


    function sendAppointmentInvitation(participantID,button){
        const ajaxParams = {
            dataType: 'json',
            method: 'POST',
            data: { participantID: participantID, roomID: roomID },
            timeout: 30000,
            url:'/main-app/networking-api/send-invitation'
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
             console.log(response);
             if (response.success == true) { 
                invitationsCount.html(Number(invitationsCount.html()) + 1);
                
                button.attr('disabled',true)
                button.html( button.attr('success-message-translate'));
                showAlert(response.message);
             } else {
                 showAlert(response.message);
             }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
            invitationsCount.html(Number(invitationsCount.html()) - 1);
        }).always(function() {
            
        });
    }
    
    
    
    $(".send-invitation").click(function(){ 
        const participantID = $(this).attr('target');

        sendAppointmentInvitation(participantID,$(this));

    })



    /************************************ */
    let profileKewordsFilter = '';
    let profileFilterValue = '';
    let countryFilterValue ='' 
    let sectorFilterValue = ''


    filter();
 
    $("#search-by-profile").on('change',function(e){
        const val = e.target.value;
        profileFilterValue = val;


        filter();
 
    })


    $("#search-by-sector").on('change',function(e){
            const val = e.target.value;
            sectorFilterValue = val;


            filter();
    
        })

    $("#search-by-country").on('change',function(e){
            const val = e.target.value;
            countryFilterValue = val;


            filter();
    
        })


        $("#search-by-name").on('keyup',function(e){
            const val = e.target.value.trim().toLowerCase();
            profileKewordsFilter = val;
    
            filter();
            
        })

   
    function filter(){
        $(".participant-search").each(function(){
            


            if (  

                ( $(this).attr('fullname').toLowerCase().indexOf(profileKewordsFilter) != -1 )
                ||
                $(this).attr('company').toLowerCase().indexOf(profileKewordsFilter) != -1
                ||
                $(this).attr('occupation').toLowerCase().indexOf(profileKewordsFilter) != -1


            ) {


                
                const sector = $(this).attr('sector');
                const country= $(this).attr('country');
                const profile = $(this).attr('profile');


                let condition = true;


                if ( profileFilterValue != ''  ) { 
                    condition = condition && ( profile == profileFilterValue );
                }
                
                if ( countryFilterValue != ''  ) { 
                    condition = condition && ( country == countryFilterValue );
                }
                
                if ( sectorFilterValue != ''  ) { 
                    condition = condition && ( sector == sectorFilterValue );
                }
                



                if ( condition ) {

                    $(this).show(); 

                } else {
                    $(this).hide();
                }


            } else {
                $(this).hide();
            }


        })
    }


});