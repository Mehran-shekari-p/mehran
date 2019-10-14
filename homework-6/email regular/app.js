$(document).ready(init);

function init() {
    function validateEmail(email) {
        var regular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regular.test(email);
    }

    function validate() {
        var $res = $("#result");
        var email = $("#email").val();
        $res.text("");

        if (validateEmail(email)) {
            $res.text(email + " is email");
            $res.css("color", "rgb(39, 163, 39)");
        } else if (email == "") {
            $res.text("Please Enter Your Email");
            $res.css("color", "");
        } else {
            $res.text(email + " is not  email");
            $res.css("color", "darkred");
        }
        return false;
    }

    $("#validate").on("click", validate);
}