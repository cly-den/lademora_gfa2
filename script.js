alert("Name: Cara \n Height: 5'2\" \n Weight: 125.663 lbs")
var firstname = prompt("Please enter your first name");
document.getElementById("fname")
var lastname = prompt("Please enter your last name");
document.getElementById("lname")
var birthyear = prompt("Please enter your Birth Year:");
document.getElementById("year")
var age = 2023 - parseInt(birthyear);
document.getElementById("age")

if(confirm("Is it ok for you to share your personal information with this site? \n Press OK if it's fine \n Cancel if not") == true){
document.write("Hello " + firstname + " " + lastname + "! How does it feel to be " + age +" years old?")
}
else{
	alert("User does not wish to share his/her information.");
}
