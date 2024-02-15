var photos =["https://www.suttons.co.uk/product_images/202951A1.jpg","https://miamifruit.org/cdn/shop/products/southfloridamangoesmiamifruit_1500x1500.jpg?v=1623113750","https://houseofnasheats.com/wp-content/uploads/2022/11/How-to-Cut-A-Pineapple-Square-4.jpg"];


var captions = ["Cherry","Mango","Pienapple"];
$.each(photos, function(index, value) {
    $(".muesum").append("<div class='image-container'><img src='" + value + "'>" + "<figcaption>" + captions[index] + "</figcaption></div>");
		});


$(".add").click(function() {
    var picone = $(".picture-url").val();
    var captone = $(".desc").val();
    photos.push(picone);
    captions.push(captone);
        $("#here").append("<div class='image-container'><img src='" + picone + "'>" + "<figcaption>" + captone + "</figcaption></div>"); 
    $(".numImg").text(photos.length);
});


		$(".clear").click(function() {
    		$(".muesum .image-container:last-child").remove();
});

