// var users = [];
// var password = [];
// addUser = () => {
//     var newUser = $("#uname").val();
//     if(JQuery)
// }
checkPassword = () => {
    var number = /([0-9])/;
	var alphabets = /([a-zA-Z])/;
	var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	
	if($('#password').val().length<6) {
		$('#password-strength-status').removeClass();
		$('#password-strength-status').addClass('weak-password');
		$('#password-strength-status').html("Weak (should be atleast 6 characters.)");
		$("#submit").attr("disabled" , true);
	} else {  	
	    if($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {            
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('strong-password');
			$('#password-strength-status').html("Strong");
			$("#submit").attr("disabled" , false);
        } else {
			$('#password-strength-status').removeClass();
			$('#password-strength-status').addClass('medium-password');
			$('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
			$("#submit").attr("disabled" , true);
        } 
    }
}

checkUserName = () => {
    if($("#uname").val().length < 8) {
        $('#username-length-status').removeClass();
		$('#username-length-status').addClass('short-username');
		$('#username-length-status').html("Should be atleast 8 characters.");
		$("#submit").attr("disabled" , true);
    }
    else {
        $('#username-length-status').removeClass();
		$('#username-length-status').addClass('strong-username');
		$('#username-length-status').html("Good");
		$("#submit").attr("disabled" , false);
    }
}
