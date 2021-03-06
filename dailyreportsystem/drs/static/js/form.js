
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    
    /*=================================================================*/
    $(document).ready(function(){
        $('.group-select').hide();
        // $('#id_form_type').prop("disabled", true)
        // $('#id_status').prop("disabled", true)
        if($('#id_form_type').find(":selected").val() == 'il'){
            $('#select1').show();
            $("[name='checkin_time']").prop("required", true);
        }
        if($('#id_form_type').find(":selected").val() == 'le'){
            $('#select2').show();
            $("[name='checkout_time']").prop("required", true);
        }
        if($('#id_form_type').find(":selected").val() == 'lo'){
            $('#select3').show()
            $("[name='leave_from']").prop("required", true);
            $("[name='leave_to']").prop("required", true);
        }
        $('#selection').change(function () {
            $('.group-select').hide();
            $("[name='checkin_time']").prop("required", false);
            $("[name='checkout_time']").prop("required", false);
            $("[name='leave_from']").prop("required", false);
            $("[name='leave_to']").prop("required", false);
            // $("[name='checkin_time']").empty()
            // $("[name='checkout_time']").empty()
            // $("[name='leave_from']").empty()
            // $("[name='leave_to']").empty()

            if($(this).val() == 'il'){
                $('#select1').show();
                $("[name='checkin_time']").prop("required", true);
            }
            if($(this).val() == 'le'){
                $('#select2').show();
                $("[name='checkout_time']").prop("required", true);
            }
            if($(this).val() == 'lo'){
                $('#select3').show()
                $("[name='leave_from']").prop("required", true);
                $("[name='leave_to']").prop("required", true);
            }
        })
    });
  
    /*==================================================================
    [ Validate ]*/
    var title = $('.validate-input input[name="title"]');
    var com_time1 = $('.validate-input input[name="compensation_from"]');
    var com_time2 = $('.validate-input input[name="compensation_to"]');
    var type = $('.validate-input select[name="compensation_from"]');
    var message = $('.validate-input textarea[name="content"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(title).val().trim() == ''){
            showValidate(title);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }
        if($(com_time1).val().trim() == ''){
            showValidate(input);
            check=false;
        }
        if($(com_time2).val().trim() == ''){
            showValidate(input);
            check=false;
        }
        if($(type).val().trim() == ''){
            showValidate(input);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(input);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
