/**
 * <!--begin::Message In-->
                        <div class="d-flex flex-column mb-5 align-items-start">
                            <div class="d-flex align-items-center">
                                <div class="symbol symbol-circle symbol-40 mr-3">
                                    <img alt="Pic" src="assets/media/users/300_12.jpg">
                                </div>
                                <div>
                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Matt Pears</a>
                                    <span class="text-muted font-size-sm">2 Hours</span>
                                </div>
                            </div>
                            <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                                How likely are you to recommend our company
                                to your friends and family?
                            </div>
                        </div>
                        <!--end::Message In-->

                        <!--begin::Message Out-->
                        <div class="d-flex flex-column mb-5 align-items-end">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span class="text-muted font-size-sm">3 minutes</span>
                                    <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
                                </div>
                                <div class="symbol symbol-circle symbol-40 ml-3">
                                    <img alt="Pic" src="assets/media/users/300_21.jpg">
                                </div>
                            </div>
                            <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                                Hey there, we’re just writing to let you know
                                that you’ve been subscribed to a repository on GitHub.
                            </div>
                        </div>
                        <!--end::Message Out-->
 */


$(document).ready(function(){






       

    let messageBox = $("#message-box");
    let sendButton = $("#send-button");
    let messagesList = $("#messages-list");
    let participantID = $("#participant_id").val()


   

    function sendMessage(message){
        


        const url = '/main-app/api/direct/send';
        const params = {
            dataType: 'json',
            method: 'POST', 
            timeout: 30000,
            data: { message:message, target: participantID },
            url:url
        }
        $.ajax(params).done(function(response, textStatus, jqXHR) {
            console.log(response);

            if( response.success == false ){
                let errorMSG = '';

                if( response.code == 0 ){
                    errorMSG  = "Vous n'êtes pas autorisé à envoyer des messages à ce participant"; 
                }else if( response.code == 1 ){
                     errorMSG = "vous avez atteint le nombre maximum de messages autorisés sur ce profil"; 
                }
 
                    $(".error-log-chat").html(errorMSG);
                    $(".error-log-chat").slideDown("slow");
                    setTimeout(() => {
                        $(".error-log-chat").slideUp();
                    }, 5000);
            }


        });
    }


    sendButton.click(function(){
        let message = messageBox.val();
        
        if ( message != '' ) {
            blocHTML = `<div class="d-flex flex-column mb-5 align-items-end">
            <div class="d-flex align-items-center">
                    
                </div>
                <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                    ${message}
                </div>
            </div>`;    

            messagesList.append(blocHTML);
            messageBox.val("");

            $("#messages-scroller").animate({ scrollTop: $('#messages-scroller').prop("scrollHeight")}, 1000);
            
            

            // send ajax call to server !!!
            sendMessage(message);


        }
    })





    function initCHAT(){
        console.log("init chat");
        const url = '/main-app/api/direct/init/'+participantID;
        const params = {
            dataType: 'json',
            method: 'GET', 
            timeout: 30000, 
            url:url
        }
        $.ajax(params).done(function(response, textStatus, jqXHR) {
            console.log(response);
            const participantIDNumber = Number(participantID);

            let messagesArray = response.sort(  (a,b) =>  a.message_id  - b.message_id )

            let BlocMessagesHTML = '';
            let blocHTML = '';

            
            //messagesArray.reverse();

            messagesArray.map( (direct)=>{

                if (direct.sender_id === participantIDNumber) {
                    // income  !!!!
                    
                        blocHTML = `<div class="d-flex flex-column mb-5 align-items-start">
                                        <div class="d-flex align-items-center">
                                            <div class="symbol symbol-circle symbol-40 mr-3">
                                                <img alt="Pic" src="${direct.sender_photoURL}">
                                            </div>
                                            <div>
                                                <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">${direct.sender_fullname}</a>
                                                
                                            </div>
                                        </div>
                                        <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                                            ${direct.message}
                                        </div>
                                    </div>`;
                        } else {
                            // sent !!!
                            blocHTML = `<div class="d-flex flex-column mb-5 align-items-end">
                            <div class="d-flex align-items-center">
                                    
                                </div>
                                <div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                                    ${direct.message}
                                </div>
                            </div>`;  
                        }

                        BlocMessagesHTML = BlocMessagesHTML + blocHTML;
                 
            } )



            messagesList.html(BlocMessagesHTML);

            // scroll to bottom !!
             

            $("#messages-scroller").animate({ scrollTop: $('#messages-scroller').prop("scrollHeight")}, 1000);


        });
    }



    initCHAT();

    try {
        


    //////////////////////////////// init firebase and hundle notifications ////////////////////////////////////
 
 

        const messaging = firebase.messaging();
        
        

        messaging.onMessage((payload) => {

         

            console.log('Message received. ', payload);
    
            // re open chat !!!!!! 
    
            initCHAT();
            
    
        });
        

    } catch (error) {
        console.log(error);
    }


})                 