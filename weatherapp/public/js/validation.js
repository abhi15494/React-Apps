$(document).ready(function(){

    $.validator.addMethod("strongPassword", function(value, element){
        return this.optional(element) || ( value.length > 7 ) && /\d/.test(value) && /[a-z]/i.test(value);
    }, "Your password have atleast 1 character, symbol, alphabet and more than 7 characters");

    $("#reg-form").validate({
        rules: {
            email: {
                required: true,
                email: true,
                remote: "http://localhost:3002"
            },
            password: {
                required: true,
                strongPassword: true
            },
            password_v: {
                required: true,
                strongPassword: true,
                equalTo: "#password"
            },
            fname: {
                required: true,
                nowhitespace: true,
                lettersonly: true
            }, 
            lname: {
                required: true,
                nowhitespace: true,
                lettersonly: true
            } 
        },
        messages: {
            email: {
                required: "Don't Forget this",
                email: "Enter Valid email information please",
                remote: "Email Already Exist, <a href='#'>Sign in</a>"
            }
        }
    });
});