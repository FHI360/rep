jQuery(document).ready(function($) {

    // Drop down login animation
    $('#dropdown-login').addClass('enable-dd');    
    $('#dropdown-login .login').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').siblings('.dropdown').slideUp(100);
        } else {
            $(this).addClass('active').siblings('.dropdown').slideDown(100);
        }        
        return false;
    });

    var mouse_is_inside = false;

    $("body").mouseup(function(e){ 
        $('#dropdown-login .login').siblings('.dropdown').hover(function(){
            mouse_is_inside=true;
        }, function(){
            mouse_is_inside=false;
        });
        if((!mouse_is_inside) && (e.target.id !== 'login-link-container'))  $('#dropdown-login .login').siblings('.dropdown').slideUp(100).siblings('#dropdown-login .login').removeClass('active');
    });

});
