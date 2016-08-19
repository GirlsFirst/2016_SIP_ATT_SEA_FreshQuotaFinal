function userExists(userId)
{
	var userExists = true;
	var userData = localStorage.getItem(userId);
	if (userData == null){
		userExists = false; 
	}
	
	return userExists;
} 

function saveUserProfileData()
{
	var userProfile = {};
	userProfile.email = document.getElementById('email').value;
	userProfile.fullName = document.getElementById('fullname').value;
	userProfile.birthDate = document.getElementById('birthDate').value;
	userProfile.password = document.getElementById('password').value;
	
	var breakfast = {};
	breakfast.foodItem1 = "";
	breakfast.foodItem2 = "";
	breakfast.foodItem3 = "";
	breakfast.foodItem4 = "";
	breakfast.foodItem5 = "";

	var lunch = {};
	lunch.foodItem1 = "";
	lunch.foodItem2 = "";
	lunch.foodItem3 = "";
	lunch.foodItem4 = "";
	lunch.foodItem5 = "";
	
	var dinner = {};
	dinner.foodItem1 = "";
	dinner.foodItem2 = "";
	dinner.foodItem3 = "";
	dinner.foodItem4 = "";
	dinner.foodItem5 = "";
	
	var userData = {userProfile, breakfast, lunch, dinner};
	
	localStorage.setItem(userProfile.email, JSON.stringify(userData));
}

function saveBreakfastData()
{
	var userData = JSON.parse(localStorage.getItem(getCurrentUser()));

	userData.breakfast.foodItem1 = document.getElementById('bfoodItem1').value;
	userData.breakfast.foodItem2 = document.getElementById('bfoodItem2').value;
	userData.breakfast.foodItem3 = document.getElementById('bfoodItem3').value;
	userData.breakfast.foodItem4 = document.getElementById('bfoodItem4').value;
	userData.breakfast.foodItem5 = document.getElementById('bfoodItem5').value;

	localStorage.setItem(userData.userProfile.email, JSON.stringify(userData));
}

function saveLunchData()
{
	var userData = JSON.parse(localStorage.getItem(getCurrentUser()));

	userData.lunch.foodItem1 = document.getElementById('lfoodItem1').value;
	userData.lunch.foodItem2 = document.getElementById('lfoodItem2').value;
	userData.lunch.foodItem3 = document.getElementById('lfoodItem3').value;
	userData.lunch.foodItem4 = document.getElementById('lfoodItem4').value;
	userData.lunch.foodItem5 = document.getElementById('lfoodItem5').value;

	localStorage.setItem(userData.userProfile.email, JSON.stringify(userData));
}

function saveDinnerData()
{
	var userData = JSON.parse(localStorage.getItem(getCurrentUser()));

	userData.dinner.foodItem1 = document.getElementById('dfoodItem1').value;
	userData.dinner.foodItem2 = document.getElementById('dfoodItem2').value;
	userData.dinner.foodItem3 = document.getElementById('dfoodItem3').value;
	userData.dinner.foodItem4 = document.getElementById('dfoodItem4').value;
	userData.dinner.foodItem5 = document.getElementById('dfoodItem5').value;

	localStorage.setItem(userData.userProfile.email, JSON.stringify(userData));
}

function getParameterByName(name) 
{
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
	
function isValidUser(userId, password)
{
	var isValidUser = false;
	var userData = JSON.parse(localStorage.getItem(userId));
	if (userData !== null && userData.userProfile.password == password){
		isValidUser = true;
	}
	
	return isValidUser;
}
	
function setCurrentUser(userId)
{
	sessionStorage.setItem('currentUser', userId);
}

function getCurrentUser()
{
	return sessionStorage.getItem('currentUser');
}

function getCurrentUserData()
{
	return JSON.parse(localStorage.getItem(getCurrentUser()));
}

function showBreakfast(userData)
{
	document.getElementById('bfoodItem1').value = userData.breakfast.foodItem1;
	document.getElementById('bfoodItem2').value = userData.breakfast.foodItem2;
	document.getElementById('bfoodItem3').value = userData.breakfast.foodItem3;
	document.getElementById('bfoodItem4').value = userData.breakfast.foodItem4;
	document.getElementById('bfoodItem5').value = userData.breakfast.foodItem5;
}

function showLunch(userData)
{
	document.getElementById('lfoodItem1').value = userData.lunch.foodItem1;
	document.getElementById('lfoodItem2').value = userData.lunch.foodItem2;
	document.getElementById('lfoodItem3').value = userData.lunch.foodItem3;
	document.getElementById('lfoodItem4').value = userData.lunch.foodItem4;
	document.getElementById('lfoodItem5').value = userData.lunch.foodItem5;
}

function showDinner(userData)
{
	document.getElementById('dfoodItem1').value = userData.dinner.foodItem1;
	document.getElementById('dfoodItem2').value = userData.dinner.foodItem2;
	document.getElementById('dfoodItem3').value = userData.dinner.foodItem3;
	document.getElementById('dfoodItem4').value = userData.dinner.foodItem4;
	document.getElementById('dfoodItem5').value = userData.dinner.foodItem5;
}