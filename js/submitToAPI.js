function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://l1zzq02chg.execute-api.us-east-1.amazonaws.com/prod/contact-us";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert ("Name cannot be blank");
        return;
    }

    if ($("#email-input").val()=="") {
        alert ("Please enter your email");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email-input").val())) {
        alert ("Please enter a valid email address");
        return;
    }

    var Descriptione = /[A-Za-z]{1}[A-Za-z]/;
    if (!Descriptione.test($("#message-input").val())) {
        alert ("Message cannot be blank");
        return;
    }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var message = $("#message-input").val();
    var data = {
        name : name,
        email : email,
        message : message
    };

    $.ajax({
        type: "POST",
        url : URL,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            alert("Your message has been sent successfully. In the next 48 hours, one of our executives will contact you.");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("Unsuccessful");
        }});
}
