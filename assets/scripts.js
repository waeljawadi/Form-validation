function validity(the_input_id) {
    var valid = 0;
    $('#' + the_input_id).keyup(function () {
        if (($('#' + the_input_id).val().length != 0) && ($('#' + the_input_id).val().replace(/\s/g, '').length)) {
            $('.alert-info').css({
                "display": "none"
            });
            valid = 1;
        } else {
            $('.alert-info').css({
                "display": "block"
            });
            valid = 0;
        }
    });
}

function perinput(the_input_id_) {
    var valid = 0
    if (($('#' + the_input_id_).val().length != 0) && ($('#' + the_input_id_).val().replace(/\s/g, '').length)) {
    
        valid = 1;

    } else {
    
        valid = 0;
    }
    return valid;
}

function validateStrings() {
    var string = $('#password').val();
    var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return $.trim(string).match(pattern) ? 1 : 0;
}

function checkif_valid()
{
    var x = perinput('name') + perinput('email') + perinput('phone') + perinput('comment') + validateStrings();
    if (x == 5) {
     $("#submit_").css('pointer-events','initial');
        $("#submit_").addClass('btn-primary');
        $("#submit_").removeClass('btn-secondary')
    } else {
    $("#submit_").css('pointer-events','none');

     $("#submit_").removeClass('btn-primary');
        $("#submit_").addClass('btn-secondary')
    }
}
$(document).ready(function (e) {
    $('#reset').click(function (e) {
        $('input').val("");
        $('textarea').val("");
    });
    validity('name');
    validity('email');
    validity('phone');
    validity('comment');
    window.setInterval(function(e){
        checkif_valid()
    },1000);
        
   
});