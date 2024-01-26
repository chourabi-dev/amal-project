$(document).ready(function(){


    $(".participant_search_dropdown").on('change',function(){

        searchFor();

    });


    $("#p_search").on("keyup",function(){
        console.log("ping");
        searchFor();
    })

    function searchFor(){ 
        $(".participant-row-data").each(function(){
            const fullname = $(this).attr("fullname");
            const sexe = $(this).attr("sexe");
            const validation = $(this).attr("validation");
            const profile = $(this).attr("profile");
            const country = $(this).attr("country");
            const sector = $(this).attr("sector");
            const badge = $(this).attr("badge");
            const payments = $(this).attr("payments");
 

            // get Filters values

            const p_search = $("#p_search").val();
            const p_sexe = $("#p_sexe").val();
            const p_validity = $("#p_validity").val();
            const p_profile = $("#p_profile").val();
            const p_country = $("#p_country").val();
            const p_sector = $("#p_sector").val();
            const p_payment = $("#p_payment").val();
            const p_badge = $("#p_badge").val(); 


            let searchCondition = true;


            if (p_search != "") {
                searchCondition = searchCondition && ( fullname.toLowerCase().indexOf( p_search.toLowerCase() ) != -1 )
            }

            if (p_sexe != "") {
                searchCondition = searchCondition && ( p_sexe == sexe )
            }
            if (p_validity != "") {
                searchCondition = searchCondition && ( p_validity == validation )
            }
            if (p_profile != "") {
                searchCondition = searchCondition && ( p_profile == profile )
            }
            if (p_country != "") {
                searchCondition = searchCondition && ( p_country == country )
            }
            if (p_sector != "") {
                searchCondition = searchCondition && ( p_sector == sector )
            }
            if (p_badge != "") {
                searchCondition = searchCondition && ( p_badge == badge )
            } 
            if (p_payment != "") {
                searchCondition = searchCondition && ( p_payment == payments )
            }
            
 

            if (searchCondition) {
                $(this).css({ display:"table-row" })
            
            } else {
                $(this).css({ display:"none" })
            
            }
        

            
             
        })
    }

})