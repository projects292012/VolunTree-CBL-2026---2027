var date_picker = document.getElementById('date_chosen')
date_picker.addEventListener('change',function(){
	console.log(date_picker.value)
	var	calender_txt = document.getElementById('calendar_txt')
	if (date_picker.value == '2026-08-22') {
		calender_txt.textContent = "You packed 20 meals at Foodhub society for underpriveleged children, SDG 2: Zero Hunger"
	}
	else if(date_picker.value == '2026-08-14') {
		calender_txt.textContent = "Spent 2 hours with the elderly in a old age home, SDG 3: Good Health And Wellbeing"
	}
	else if(date_picker.value == '2026-09-2') {
		calender_txt.textContent = "Collected 2 Kgs of trash on the beach, SDG 14: Life Below Water"
	}
	else if(date_picker.value == '2026-08-29') {
		calender_txt.textContent = "Planted 20 - 25 trees in the Greenhouse Observatory, SDG 13: Climate Action"
	}
	else if(date_picker.value == '2026-09-17') {
		calender_txt.textContent = "Planned to help in mental health campaign; Check email for details, SDG 3: Good Health And Wellbeing "
	}
	
	else{
		calender_txt.textContent = "Nothing Planned :)"
	}
})