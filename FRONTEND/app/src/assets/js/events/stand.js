$(document).ready(function(){
    $('#event_stands_tags').select2({ 
        tags: true
    });




	$(".c-logo").click(function(){
		$("#event_stands_logoURL").click();
	  })
	  

	  $(".c-couverture").click(function(){
		$("#event_stands_photoURL").click();
	  })
 
 



	   
	var coverPhoto = $("#couverture-modal-placeholder");
	var inputCover = $("#event_stands_photoURL");
 
	var $modalCover = $('#couverture-modal-change');
	var cropper;

	$('[data-toggle="tooltip"]').tooltip();

	inputCover.on('change', function (e) {
	  var files = e.target.files;
	  var done = function (url) {
		  console.log(url);
		  inputCover.value = '';
		  coverPhoto.attr('src',url); 
		$modalCover.modal('show');
	  };
	  var reader;
	  var file;
	  var url;

	  if (files && files.length > 0) {
		file = files[0];

		if (URL) {
		  done(URL.createObjectURL(file));
		} else if (FileReader) {
		  reader = new FileReader();
		  reader.onload = function (e) {
			done(reader.result);
		  };
		  reader.readAsDataURL(file);
		}
	  }
	});

	$modalCover.on('shown.bs.modal', function () {
		 
	       cropper = new Cropper(document.getElementById('couverture-modal-placeholder'), {
	  		
		   });


	}).on('hidden.bs.modal', function () {
	  cropper.destroy();
	  cropper = null;
	});




    document.getElementById('crop-cover-photo').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;
  
        $modalCover.modal('hide');
  
        if (cropper) {
          canvas = cropper.getCroppedCanvas({
           
          });
          initialAvatarURL = inputCover.src;
          
		  $(".c-couverture").attr('src',canvas.toDataURL());
           
          canvas.toBlob(function (blob) {
  
  
              let file = new File([blob], "img.jpg",{type:"image/jpeg", lastModified:new Date().getTime()});
              let container = new DataTransfer();
  
              container.items.add(file);
  
              document.getElementById('event_stands_photoURL').files = container.files ;
              
                 
  
  
          });
        }
      });
	  

  
 
      




	  /****************************************************************************************************************** */


	  
 
	var imageLogo = $("#modal-main-placeholder");
	var inputLogo = $("#event_stands_logoURL");
 
	var $modalLogo = $('#cover-modal-main-logo');
	var cropper;

	$('[data-toggle="tooltip"]').tooltip();

	inputLogo.on('change', function (e) {
	  var files = e.target.files;
	  var done = function (url) {
		  console.log(url);
		  inputLogo.value = '';



		  imageLogo.attr('src',url); 
		$modalLogo.modal('show');
	  };
	  var reader;
	  var file;
	  var url;

	  if (files && files.length > 0) {
		file = files[0];

		if (URL) {
		  done(URL.createObjectURL(file));
		} else if (FileReader) {
		  reader = new FileReader();
		  reader.onload = function (e) {
			done(reader.result);
		  };
		  reader.readAsDataURL(file);
		}
	  }
	});

	$modalLogo.on('shown.bs.modal', function () {
		 
	       cropper = new Cropper(document.getElementById('modal-main-placeholder'), {
	  		
		   });


	}).on('hidden.bs.modal', function () {
	  cropper.destroy();
	  cropper = null;
	});




    document.getElementById('crop-cover-main-logo-btn').addEventListener('click', function () {
        var initialAvatarURL;
        var canvas;
  
        $modalLogo.modal('hide');
  
        if (cropper) {
          canvas = cropper.getCroppedCanvas({
           
          });
          initialAvatarURL = inputLogo.src;
          //avatar.src = canvas.toDataURL();
           
		  $(".c-logo").attr('src',canvas.toDataURL());
           
          canvas.toBlob(function (blob) {
  
  
              let file = new File([blob], "img.jpg",{type:"image/jpeg", lastModified:new Date().getTime()});
              let container = new DataTransfer();
  
              container.items.add(file);
  
              document.getElementById('event_stands_logoURL').files = container.files ;
              
                 
  
  
          });
        }
      });
  
 
      








    
})