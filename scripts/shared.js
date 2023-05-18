let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = backdrop.querySelectorAll('.plan button')

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}
