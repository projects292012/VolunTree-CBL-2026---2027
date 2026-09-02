//TOGGLE BTN CODE THINGY
const body = document.querySelector("body")
sidebar = body.querySelector("nav")
sidebartoggle = body.querySelector(".sidebar-toggle")
sidebartoggle.addEventListener("click", () =>{
	sidebar.classList.toggle("close")
	if (sidebar.classList.contains("close")) {
		localStorage.setItem("status", "close")
	}
	else{
		localStorage.setItem("status","open")
	}
})
//SDG SECTIONS
const sdg_arrow = document.querySelectorAll(".sdg-arrow");
sdg_arrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const sdg_organizer = arrow.closest(".sdg_small_organizer");
    const dropdown = sdg_organizer.querySelector(".sidebar_items");
    dropdown.classList.toggle("showAnswer");
  });
});