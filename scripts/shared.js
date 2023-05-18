let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal-action-negative')

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener('click' , closeModal )
modalCloseBtn.addEventListener('click' , closeModal)

function closeModal() {
    backdrop.style.display = "none"
    modal.style.display = "none"

}
