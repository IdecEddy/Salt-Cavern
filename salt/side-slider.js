
$(document).ready(function(){
    $(document).on('scroll', function(e){
            var scrollY = window.scrollY;
            var test = $('#side-container').offset().top;
            console.log(test + '\n' + scrollY);
            if(scrollY >= test){
                $("#slider").css("top",scrollY);
            }else{
                $("#slider").css("top",522);

            }
    });
}); 
