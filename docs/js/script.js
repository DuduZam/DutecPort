/*	Typing Animation	*/
var typed = new Typed(".typing", {
	strings:["Web Designer","Web Developer","Graphic Designer","Youtuber"],
	typeSpeed:100,
	BackSpeed:60,
	loop:true
})
/*	Aside	*/
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
	  for(let i=0; i<totalNavList; i++)
	  {
	  	//console.log(navList[i])
	  	const a = navList[i].querySelector("a");
	  	a.addEventListener("click", function()
	  	{
	  		removeBackSection();
	  		for(let j=0; j<totalNavList; j++)
	  		{
	  			if(navList[j].querySelector("a").classList.contains("active"))
	  			{
	  				addBackSection(j);
	  				//allSection[j].classList.add("back-section");
	  			}
	  			navList[j].querySelector("a").classList.remove("active");
	  		}
	  		this.classList.add("active")
	  		showSection(this);
	  		if(window.innerWidth < 1200)
	  		{
	  			asideSectionTogglerbtn();
	  		}
	  	})
	  }
	  function removeBackSection()
	  {
	  	for(let i=0; i<totalSection; i++)
			{
				allSection[i].classList.remove("back-section");
			}
	  }
	  function addBackSection(num)
	  {
	  	allSection[num].classList.add("back-section");
	  }
	  function showSection(element)
	  {
		for(let i=0; i<totalSection; i++)
		{
			allSection[i].classList.remove("active");
		}
		const target = element.getAttribute("href").split("#")[1];
		document.querySelector("#" + target).classList.add("active")
	  }
	  function updateNav(element)
	  {
	  	for(let i=0; i<totalNavList; i++)
	  	{
	  		navList[i].querySelector("a").classList.remove("active");
	  		const target = element.getAttribute("href").split("#")[1];
	  		if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
	  		{
	  			navList[i].querySelector("a").classList.add("active");
	  		}
	  	}
	  }
	  document.querySelector(".hire-me").addEventListener("click", function()
	  {
	  	showSection(this);
	  	updateNav(this);
	  	removeBackSection();
	  	addBackSection(sectionIndex);
	  })	  

const navTogglerbtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
	  navTogglerbtn.addEventListener("click", () =>
	  {
	  	asideSectionTogglerbtn();
	  })
	  function asideSectionTogglerbtn()
	  {
	  	aside.classList.toggle("open");
	  	navTogglerbtn.classList.toggle("open");
	  	for(let i=0; i<totalSection; i++)
		{
			allSection[i].classList.toggle("open");
		}
	  }