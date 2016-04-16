var initGallPopup = function(){
	var popgall = $('<div>').addClass('popup_gallery');
	var cls = $('<div class="cls">&times;</div>');
	cls.click(function(){
		$('.popup_gallery').fadeOut(200);
	});
	popgall.append(cls);
	var vwp = $('<div>').addClass('visibimgwp');
	var vwi = $('<div>').addClass('visibimg');
	var imgtt = $('<div>').addClass('imgtt');
	vwp.append(vwi);
	vwp.append(imgtt);
	popgall.append(vwp);
	var btwp = $('<div>').addClass('btgalls');
	
	var i = 0;
	$('.slider-img-itm').each(function(){
		var $this = $(this);
		$(this).attr('index', i);
		var imgitm = $('<div>').addClass('itm').css('background-image','url(' + $this.attr('src') + ')').attr('rel', i);
		imgitm.click(function(){
			selectIndexGallImg($(this).attr('rel'));
		});
		btwp.append(imgitm);
		i++;
	});
	popgall.append(btwp);
	$('body').append(popgall);
  };
  
  var selectIndexGallImg = function(index){
	var smimg = $('.btgalls .itm[rel="' + index + '"]');
	console.log(smimg);
	if(smimg.length) {
		var uiimg = $('.slider-img-itm[index="' + index + '"]');
		var src = uiimg.attr('src');
		var caption = uiimg.attr('caption');
		$('.btgalls .itm').removeClass('selected');
		smimg.addClass('selected');
		if(caption) {
			$('.popup_gallery .imgtt').text(caption);
		} else {
			$('.popup_gallery .imgtt').empty();
		}
		$('.popup_gallery .visibimg').css('background-image', 'url(' + src + ')');
		$('.popup_gallery').fadeIn(100);
	} else {
		alert('no image available');
	}
  };
  
  $(document).ready(function(){
	initGallPopup();
  });
  
  $('.slider-img-itm').click(function(){
	var $this = $(this);
	var src = $this.attr('src');
	var index = $this.attr('index');
	selectIndexGallImg(index);
  });
  