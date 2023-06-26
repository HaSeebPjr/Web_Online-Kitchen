let menuBar = document.querySelector(".menu");
let closeMenu = document.querySelector(".close-menu");
let menuContent = document.querySelector(".menu-contents");

menuBar.addEventListener("click", () => {
	menuBar.style.display = "none";
	closeMenu.style.display = "block";
	menuContent.style.display = "block";
	menuContent.style.overflowX = "visible";
	menuContent.style.width = "100%";
})

closeMenu.addEventListener("click", () => {
	menuBar.style.display = "flex";
	closeMenu.style.display = "none";
	menuContent.style.display = "none";
	menuContent.style.overflowX = "hidden";
	menuContent.style.width = "0";
})


//Search
/*
let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector(".search-icon");
let closeSearch = document.querySelector(".close-icon");
searchBtn.addEventListener("click", () => {
	searchForm.style.display="block";
	closeSearch.style.display="block";
	searchBtn.style.display="none";
})

closeSearch.addEventListener("click", () => {
	
	searchForm.style.display="none";
	closeSearch.style.display="none";
	searchBtn.style.display="block";
})
*/



// Discount
let dBtn = document.querySelector(".discount-btn");
let rndFood = document.querySelector(".rand-food");
let fName = document.querySelector(".food-name");
let fImg = document.querySelector(".food-img");
let foods = [
	{
		name: "You Got Free <br>Chicken Kabab",
		image: "images/foods/chicken-kabab.png"
	},
	{
		name: "You Got Free <br>Hamburger",
		image: "images/foods/hamburger.png"
	},
	{
		name: "You Got Free <br>Rice",
		image: "images/foods/rice.png"
	},
	{
		name: "You Got Free <br>Water",
		image: "images/foods/drinks/water.png"
	},
	{
		name: "You Got Free <br>Orange Juice",
		image: "images/foods/juice.png"
	},
	{
		name: "You Got Free <br>Coffee",
		image: "images/foods/coffee.png"
	},
	{
		name: "You Got Free <br>Chicken",
		image: "images/foods/life-chicken.png"
	},
	{
		name: "You Got Free <br>Biscuit",
		image: "images/foods/breakfast/biscuit.png"
	},
	{
		name: "You Got Free <br>Breakfast Package",
		image: "images/foods/breakfast/egg-cheese.png"
	},
	{
		name: "You Got Free <br>Breakfast Package",
		image: "images/foods/breakfast/tea -cake.png"
	},
	{
		name: "You Got Free <br>Chips",
		image: "images/foods/lunch-dinner/chips.png"
	},
	{
		name: "You Got Free <br>Sambosa",
		image: "images/foods/lunch-dinner/sambosa.png"
	},
	{
		name: "You Got Free <br>Spaghetti",
		image: "images/foods/lunch-dinner/spaghetti.png"
	}
]

dBtn.addEventListener("click", () => {
	rndFood.style.display = "block";
	dBtn.style.display = "none";
	let randF = randFood();
	fName.innerHTML = foods[randF].name;
	fImg.src = foods[randF].image;
})


function randFood() {
	return Math.floor(Math.random()*foods.length);
}


window.onscroll = function() {
	scroll();
}


let header = document.querySelector("header");

function scroll() {
	if(window.pageYOffset >= 300) {
		header.classList.add("sticky");
		header.style.backgroundColor = "rgba(0,0,0,0.9)";
		
	}else {
		header.classList.remove("sticky");
		header.style.backgroundColor = "transparent";
	}
}


let count = 0;
let cart = document.getElementById("cart-n");
let buy = document.querySelectorAll(".buy");

buy.forEach(function(item) {
	item.addEventListener("click", () =>{
	count++;
	cart.textContent = count;
})
}) 




let breakfast = document.querySelector(".br-food");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");


nextBtn.addEventListener("click", () => {
	breakfast.style.transform = "translateX(-200px)";
})

prevBtn.addEventListener("click", () => {
	breakfast.style.transform = "translateX(0px)";
})



let dinner = document.querySelector(".dn-food");
let nextDn = document.querySelector(".next-dn");
let prevDn = document.querySelector(".prev-dn");


nextDn.addEventListener("click", () => {
	dinner.style.transform = "translateX(-200px)";
})

prevDn.addEventListener("click", () => {
	dinner.style.transform = "translateX(0px)";
})

