jQuery(document).ready(function () { 
    let translation = {
        eventName: {
            fr: {
                message : "Veuillez saisir le nom de l'événement."
            },
            en: {
                message : 'Please enter the name of the event.'
            },
            
        },
        totalSubscribersNumber: {
            fr: {
                message : "Veuillez saisir le nombre d’inscrits Total de l'événement."
            },
            en: {
                message : 'Please enter the total number of registrants for the event.'
            },
            
        },
        eventsLengthInDays: {
            fr: {
                message : "Veuillez saisir le nombre de jours de l'événement."
            },
            en: {
                message : 'Please enter the number of days of the event.'
            },
            
        },
        typeZone: {
            fr: {
                message : "Veuillez choisir le fuseau horaire de l'événement."
            },
            en: {
                message : 'Please choose the timezone of the event.'
            },
            
        },
        startDate: {
            fr: {
                message : "Veuillez choisir la date de début de l'événement."
            },
            en: {
                message : 'Please choose the start date of the event.'
            },
            
        },
        endDate: {
            fr: {
                message : "Veuillez choisir la date de fin de l'événement."
            },
            en: {
                message : 'Please choose the end date of the event.'
            },
            
        },
        location:{
            fr: {
                message : "Veuillez choisir le lieu de l'événement."
            },
            en: {
                message : 'Please choose the location of the event.'
            },
            
        },
        eventAccessibility:{
            fr: {
                message : "Veuillez choisir la confidentialité de l'événement."
            },
            en: {
                message : "Please choose the privacy of the event."
            },
            
        },
        eventLng:{
            fr: {
                message : "Veuillez choisir la langue de l'événement."
            },
            en: {
                message : "PPlease choose the language of the event."
            },
            
        },
        eventLng:{
            fr: {
                message : "Veuillez choisir la langue de l'événement."
            },
            en: {
                message : "PPlease choose the language of the event."
            },
            
        },
        willBeAvailableForNMonths:{
            fr: {
                message : "Veuillez choisir la durée de l'événement."
            },
            en: {
                message : "PPlease choose the duration of the event."
            },
            
        },
    
    }
    
    let lng = document.getElementById('translation').getAttribute('trans');
     
     
    let eventValidation  = FormValidation.formValidation(
        document.getElementById('add_event_form'),
        {
            fields: {
                eventName: {
                    selector: '[event-selector="eventName"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.eventName.en.message : translation.eventName.fr.message
                        }
                    }
                },
                totalSubscribersNumber: {
                    selector: '[event-selector="totalSubscribersNumber"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.totalSubscribersNumber.en.message : translation.totalSubscribersNumber.fr.message
                        }
                    }
                },
                eventsLengthInDays: {
                    selector: '[event-selector="eventsLengthInDays"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.eventsLengthInDays.en.message : translation.eventsLengthInDays.fr.message
                        }
                    }
                },

                typeZone: {
                    selector: '[event-selector="typeZone"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.typeZone.en.message : translation.typeZone.fr.message
                        }
                    }
                },
                startDate: {
                    selector: '[event-selector="startDate"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.startDate.en.message : translation.startDate.fr.message
                        }
                    }
                },
                endDate: {
                    selector: '[event-selector="endDate"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.endDate.en.message : translation.endDate.fr.message
                        }
                    }
                },
                location: {
                    selector: '[event-selector="location"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.location.en.message : translation.location.fr.message
                        }
                    }
                },
                eventAccessibility: {
                    selector: '[event-selector="eventAccessibility"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.eventAccessibility.en.message : translation.eventAccessibility.fr.message
                        }
                    }
                },
                eventLng: {
                    selector: '[event-selector="eventLng"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.eventLng.en.message : translation.eventLng.fr.message
                        }
                    }
                },
                willBeAvailableForNMonths: {
                    selector: '[event-selector="willBeAvailableForNMonths"]',
                    validators: {
                        notEmpty: {
                            message: lng =='en_EN' ? translation.willBeAvailableForNMonths.en.message : translation.willBeAvailableForNMonths.fr.message
                        }
                    }
                },


                

                
 
            },
    
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                // Bootstrap Framework Integration
                bootstrap: new FormValidation.plugins.Bootstrap(),
                // Validate fields when clicking the Submit button
                submitButton: new FormValidation.plugins.SubmitButton(),
                                                // Submit the form when all fields are valid
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            }
        }
    );
    


    $("#pre-validation").click(function(){ 
 


		eventValidation.validate()
			.then(function(status) {
				console.log(status);
				if (status ==='Invalid') {
					KTUtil.scrollTop();
				}else{
					$("#add_client_form").submit();
				}
			});
 
		
	})


    function removeSpecialCharsAndSpaces(str) {
        // Remove special characters and white spaces using a regular expression
        const cleanedStr = str.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
      
        return cleanedStr;
      }
        



    /*$("#events_publicShareName").on("keyup",function(e){
        const tmp = e.target.value;

        const val = removeSpecialCharsAndSpaces(tmp);

        $(this).val(val);




        const elem = $(this);

        


        // POST request

        const ajaxParams = {
            dataType: 'json',
            method: 'POST',
            data: { name: val },
            timeout: 30000,
            url:'/common/events/add-api/check-public-share-link-duplicity'
        }
        $.ajax(ajaxParams).done(function(response, textStatus, jqXHR) {
            $(".public-name-check-message").remove();

           
            if (response.success === true) {
                elem.parent().append('<div   class="public-name-check-message alert alert-success">'+response.message+'</div>')

            } else {
                elem.parent().append('<div   class=" public-name-check-message alert alert-danger">'+response.message+'</div>')


            }
            
        }).fail(function(jqXHR, textStatus, errorThrown) {
            elem.parent().append('<div   class=" public-name-check-message alert alert-danger">Quelque chose s’est mal passé, veuillez réessayer</div>')

        }).always(function() {
            
        });
    })*/








    /* map sections */

    



mapboxgl.accessToken = 'pk.eyJ1IjoiYWZyazUwYWRtaW4iLCJhIjoiY2t2d2F2ZXJuYzRkYTMwczdoZTh5N3BzZiJ9.ev6y63e37s0_YkF-54EZgg';

mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true // Lazy load the plugin
    );


var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

const marker = new mapboxgl.Marker({
draggable: true
})
.setLngLat([0, 0])
.addTo(map);

function onDragEnd() {
const lngLat = marker.getLngLat();

console.log(lngLat);

let api = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+lngLat.lng+','+lngLat.lat+'.json?access_token=pk.eyJ1IjoiYWZyazUwYWRtaW4iLCJhIjoiY2t2d2F2ZXJuYzRkYTMwczdoZTh5N3BzZiJ9.ev6y63e37s0_YkF-54EZgg';

$("#events_longitude").val(lngLat.lng);
$("#events_latitude").val(lngLat.lat);


var jqxhr = $.get( api, function() {

})
.done(function(data) {
console.log(data);
if(data.features != null){
    let place_name=data.features[0].place_name;

    $("#events_location").val(place_name);
}

})
.fail(function() {

})
.always(function() {

}); 
}

marker.on('dragend', onDragEnd);


$("#events_location").on('keyup',function(e){ 
    var query = e.target.value;
    var jqxhr = $.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoiYWZyazUwYWRtaW4iLCJhIjoiY2t2d2F2ZXJuYzRkYTMwczdoZTh5N3BzZiJ9.ev6y63e37s0_YkF-54EZgg` , function() {

    })
    .done(function(data) {
        console.log("result")
        console.log(data);

        features: Array(5) 
    let htmlBloc='';

    for (let i = 0; i < data.features.length; i++) {
        const suggestion = data.features[i];

        htmlBloc+=`
            <div class="location-suggestion" lng="${suggestion.center[0]}" lat="${suggestion.center[1]}" >
                ${suggestion.place_name}
            </div>
        `;

        
    }
    
    $("#search-location-result").html(htmlBloc)



    $(".location-suggestion").click(function(){
        console.log("clicked !!")
        const lat = $(this).attr('lat');
        const lng = $(this).attr('lng');
        const text = $(this).text();

        $("#events_latitude").val(lat);
        $("#events_longitude").val(lng);
        

        console.log(lat,lng,text)

        map.jumpTo({
        center: [lng,lat ],
        zoom: 8, 
        });


        marker.setLngLat([lng, lat]);

        $("#events_location").val(text.trim());

        $("#search-location-result").html(''); 
        
    })
        
        
    })
    .fail(function() {
        
    })
    .always(function() {
    
    }); 

})


	  

});
