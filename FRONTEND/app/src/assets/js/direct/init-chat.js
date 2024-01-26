$(document).ready(function(){
    try {
        //////////////////////////////// init firebase ////////////////////////////////////
        const firebaseConfig = {

          apiKey: "AIzaSyAemPEOI27Ktee4Z_VDlddjxaDeLCE0KMM",
          authDomain: "eventooweb.firebaseapp.com",
          projectId: "eventooweb",
          storageBucket: "eventooweb.appspot.com",
          messagingSenderId: "200852093381",
          appId: "1:200852093381:web:b17952374515cda17f73ac",
          measurementId: "G-K6L9R8218F"
      
        };
      
        
      
        // Initialize Firebase
      
        firebase.initializeApp(firebaseConfig);
        
        const db = firebase.firestore();
    
        const messaging = firebase.messaging();




        
        messaging.onMessage((payload) => {

         

            console.log('Message received. ', payload);
  
          
          
  
        });




      
    
        messaging.getToken({vapidKey: "BC_zmqDnDnUaX-1r2nYkT8fAnvyRbrzxkw8aJN_w2KceYTWPedIw6v_m7sI2Rnxf-tORRPwe1nrm_Fna9o32qsY"}).then((currentToken) => {
    
          if (currentToken) {
      
            console.log(currentToken);  
      
            const url = '/main-app/api/fcm/chat/update-my-token';
      
            $.post(
      
              url,
      
              {fcm:currentToken}
      
              
      
            ).done((data)=>{
      
              console.log(data);
      
            })
      
      
      
      
      
          } else {
      
            // Show permission request UI
      
            console.log('No registration token available. Request permission to generate one.');
      
            // ...
      
          }
      
        }).catch((err) => {
      
          console.log('An error occurred while retrieving token. ', err);
      
          // ...
      
        });
    } catch (error) {
      console.log(error);
    }
})