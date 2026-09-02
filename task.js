
emailjs.init({ publicKey: "Yyvz348QOGcUWby_s" });

const email = localStorage.getItem('user_email');
console.log(email);

function task_name(e) {
    e.preventDefault(); 
    let task_name_txt = e.currentTarget.textContent.trim(); 
    localStorage.setItem('selectedTaskTitle', task_name_txt);
    window.location.href = 'task.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const name_task_h1 = document.getElementById('name_task');
    if (name_task_h1) {
        const savedTitle = localStorage.getItem('selectedTaskTitle');
        if (savedTitle) {
            name_task_h1.textContent = savedTitle;
        }
    }
});

var register_btn = document.getElementById('register_btn');
var ok_btn = document.getElementById('ok_btn');
var result_div = document.getElementById('result_div');

if (ok_btn) {
    ok_btn.addEventListener('click', function() {
        result_div.style.display = 'none';
    });
}

if (register_btn) {
    register_btn.addEventListener('click', function() {

        result_div.style.display = 'flex';


        const name_task_h1 = document.getElementById('name_task');
        const activity_name = name_task_h1 ? name_task_h1.textContent : '';
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const templateParams = {
            user_email: email,             
            activity_name: activity_name,   
            location: location,            
            date: date,                     
            time: time                    
        };


        emailjs.send('service_2de4n4r', 'template_2a2zj3y', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}