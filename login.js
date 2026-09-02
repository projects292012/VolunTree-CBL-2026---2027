const login_btn = document.getElementById('login_btn')
login_btn.addEventListener('click',function(){
	const user_email = document.getElementById('user_email').value
	if (user_email == "" || !user_email.includes("@")) {
		alert('Email Invalid, Enter valid email')
	}
	else{
		localStorage.setItem('user_email', user_email);
		console.log(user_email)
		alert('Account Made!')
		window.location.href = 'voluntree.html'
	}
})