$(document).ready(function(){


    
    
        /** datatable settings */
 
    
        var exposerTable= function () {
            // Private functions
    
            // demo initializer
            var demo = function () {
    
                var datatable = $('#participants').KTDatatable({
                    data: {
                        saveState: { cookie: false },
                    },
                    search: {
                        input: $('#participant_search_feild'),
                        key: 'generalSearch'
                    },
                    columns: [
                        {
                            field: 'first',
                            width: 20,
                        }, 

                        
                        {
                            field: 'profile',
                            width: 120,
                            margin:0
                        }, 
                        {
                            field: 'actions',
                            width: 80,
                        }, 
    
                        
                        
    
                        
                    ],
                });
    
    
                $('#profile_list_search').on('change', function() {
                    console.log("ping");
                    datatable.search($(this).val().toLowerCase(), 'profile');
                });
    
     

                
    
            };
    
            return {
                // Public functions
                init: function () {
                    // init dmeo
                    demo();
                },
            };
        }();
    
        exposerTable.init();




        
            
        var directTable= function () {
            // Private functions
    
            // demo initializer
            var demo = function () {
    
                var datatable = $('#directly-affected-participants').KTDatatable({
                    data: {
                        saveState: { cookie: false },
                    },
                    search: {
                        input: $('#directly_participant_search_feild'),
                        key: 'participant'
                    },
                    columns: [
                        {
                            field: 'first',
                            width: 20,
                        }, 

                        {
                            field: 'profile',
                            width: 120,
                            margin:0
                        }, 
                         
                        {
                            field: 'actions',
                            width: 80,
                        }, 
    
                        
                        
    
                        
                    ],
                });
    

                $('#directly_profile_list_search').on('change', function() {
                     
                    datatable.search($(this).val().toLowerCase(), 'profile');
                });
    
     

                
    
            };
    
            return {
                // Public functions
                init: function () {
                    // init dmeo
                    demo();
                },
            };
        }();
    
        directTable.init();



 
    
    
    

})