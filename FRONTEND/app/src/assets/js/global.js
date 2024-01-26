$(document).ready(function () {


    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": 0,
        "extendedTimeOut": 0,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut",
        "tapToDismiss": false
      };



      function hundleNotificationsPopUps(){
        const url = '/main-app/api/notifications';
        var newNotifications = [];
    
        const ajaxParams = {
            dataType: 'json',
            method: 'GET', 
            timeout: 30000,
            url:url
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
            //  console.info("checking pop ups...");
            // console.log(response);

             response.map((n)=>{
                if( n.poped_up == false ){
                    toastr.info('<b>'+n.title+'</b> <br/>'+n.content);
 
                }
             })


 


    
             
        }).fail(function(jqXHR, textStatus, errorThrown) {
           // console.log(jqXHR, textStatus, errorThrown);
           
        }).always(function() {
            
        });
      }

      hundleNotificationsPopUps();
      setInterval(()=>{
        hundleNotificationsPopUps();
      },4000)
  



    // hundle notifications

    function initNOTIFBloc() {
        
    const url = '/main-app/api/notifications';
    var newNotifications = [];

    const ajaxParams = {
        dataType: 'json',
        method: 'GET', 
        timeout: 30000,
        url:url
    }
    $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
        // console.info("Notifications");
        // console.log(response);

         

         let blocHTML = '';

         response.forEach(notif => {

            if (notif.seen == 0) {
                newNotifications.push(notif);
            }
            blocHTML += `
                <!--begin::Text-->
                <div class="d-flex flex-column font-weight-bold">
                    <a href="${notif.link}" target="_blank" class="text-dark text-hover-primary mb-1 font-size-lg ${ notif.seen == 0 ? 'font-weight-bolder' : '' } ">${ notif.title }</a>
                    <span class="text-muted ${ notif.seen == 0 ? 'font-weight-bolder' : '' }">${ notif.content }</span> <br>
                    <span class="text-muted ${ notif.seen == 0 ? 'font-weight-bolder' : '' }">
                    ${ notif.date }
                    
                    </span> 
                    
                    <hr>

                    
                </div>
                <!--end::Text-->
            `;



         });
          
         $("#notifications-zone").html(blocHTML);

       

         if (newNotifications.length != 0) {
             $("#notification-icon").addClass("pulse pulse-danger");
             $("#notification-icon-svp").addClass("svg-icon-danger")

             // show popups !!!

             
         }
         

         
    }).fail(function(jqXHR, textStatus, errorThrown) {
       // console.log(jqXHR, textStatus, errorThrown);
       
    }).always(function() {
        
    });

    }

    initNOTIFBloc();


    function clearNotifications(){
        const url = '/main-app/api/clear-notifications';

        const ajaxParams = {
            dataType: 'json',
            method: 'GET', 
            timeout: 30000,
            url:url
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
            // console.info("Clear notifications");
            // console.log(response);

             if (response.success === true) {
                $("#notification-icon").removeClass("pulse pulse-danger");
                $("#notification-icon-svp").removeClass("svg-icon-danger")
            
                $("#notification-icon-svp").addClass("svg-icon-secondary")
             }
        
        }).fail(function(jqXHR, textStatus, errorThrown) {
          //  console.log(jqXHR, textStatus, errorThrown);
           
        }).always(function() {
            
        });


    }


    $("#clear-notifications").click(function(e){
        e.preventDefault();

        clearNotifications();
        
    })


    
    $("#clear-notifications").click(function(e){
        e.preventDefault();

        clearNotifications();
        
    })



    $("#notification-icon").click(function(){ 

        clearNotifications();
        
    })


    /******************************************************* let the system know that i'm here ******************************** */

    const pingURL = '/main-app/api/update-last-time-connected';
    const params = {
        dataType: 'json',
        method: 'POST', 
        timeout: 30000,
        url:pingURL
    }
    $.ajax(params).done(function(response, textStatus, jqXHR) {
       // console.log(response);
    });





    /************************************************************ do i have any chat messages ? ***************************** */


        // hundle notifications

        function initChatBadge(){
            const url = '/main-app/api/messages-count';
        var newMessages = [];
    
        const ajaxParams = {
            dataType: 'json',
            method: 'GET', 
            timeout: 30000,
            url:url
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
            
            // console.log(response);
     
         
           
           if (response.non_read_message != 0) {
                $("#messages-icon").addClass("pulse pulse-danger");
                $("#messages-icon-svp").addClass("svg-icon-danger")
            } 
             
        }).fail(function(jqXHR, textStatus, errorThrown) {
            // console.log(jqXHR, textStatus, errorThrown);
           
        }).always(function() {
            
        });
        }



        initChatBadge();





        //////////////////////////////////////////////////////////////////////////QR code scanner////////////////////////////////////////////////////////////

        var video;
        var videoStream;
        var codeReader;



        function saveContact(uid){

            $.get(`/main-app/scan-qr-code-participant/user/${uid}`).then((res)=>{
                
                Swal.fire(res.success === true ? "Great!" : "Oups!", res.message, res.success === true ? "success" : "error");


            }).catch((err)=>{ 

                Swal.fire("Oups!", "Network error", "error");
                    
            })

        }


        function closeScanner() {
            // Stop video stream and hide the modal
            if (videoStream) {
              videoStream.getTracks().forEach(track => track.stop());
            }
            $("#qrScannerModal").modal('hide');
          }


        function openScanner() {


            //saveContact(12386);


            // Show the modal
             

            $("#qrScannerModal").modal('show');
      
            // Initialize the video element and start capturing frames
            video = document.getElementById("qrVideo");
            codeReader = new ZXing.BrowserQRCodeReader();
      
            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
              .then((stream) => {
                video.srcObject = stream;
                videoStream = stream;
      
                // Start decoding frames
                codeReader.decodeFromVideoDevice(undefined, 'qrVideo', (result, err) => {
                  if (result) {

                    // console.log("QR Code Decoded: " + result.text);

                    saveContact(result.text);

                    // Hide the modal after decoding
                    closeScanner();
                  }
                  if (err && !(err instanceof ZXing.NotFoundException)) {
                   //  console.error(err);
                  }
                });
              })
              .catch((error) => {
                console.error("Error accessing camera: ", error);
                alert("Error accessing camera. Please try again.");
                closeScanner();
              });
          }


      

        
        

        $("#fab").click(function(){
            openScanner();
        })


})