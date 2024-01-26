
$(document).ready(function(){

    /*var KTCkeditor = function () {
        // Private functions
        var demos = function () {
            
            $(".ckeditor").each(function(){
                const elementID =  $(this).attr('id');
                
                ClassicEditor .create( document.getElementById(elementID) )
                .then( editor => {
                    console.log( editor );
                } )
                .catch( error => {
                    console.error( error );
                } );
            }) 
        }
    
        return {
            // public functions
            init: function() {
                demos();
            }
        };
    }();
    
    // Initialization
    jQuery(document).ready(function() {
        KTCkeditor.init();
    });*/




    var KTSummernoteDemo = function () {
        // Private functions
        var demos = function () {
            $('.ckeditor').summernote({
                height: 150
            });
        }
    
        return {
            // public functions
            init: function() {
                demos();
            }
        };
    }();
    
    // Initialization
    jQuery(document).ready(function() {
        KTSummernoteDemo.init();
    });

    
}); 
