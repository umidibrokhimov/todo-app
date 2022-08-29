window.addEventListener('DOMContentLoaded', (e) => {
    /* 
    -------------------------
    HTMl elements
    -------------------------
    */
    let form = document.querySelector('#form'),
    input = form.querySelector('input'),
    select = form.querySelector('#select'),
    modal = document.querySelector('.modal'),
    openModalBtn = document.querySelector('#open-modal'),
    hideModalBtn = modal.querySelector('#hide-modal')
    
    /* 
    -------------------------
    Modal settings
    -------------------------
    */
    openModalBtn.addEventListener('click', () =>{
        modal.dataset.modalOpen = true
    })
    window.addEventListener('click', (e) => {
        if(e.target.className === 'modal'){
            modal.dataset.modalOpen = false
        }
    })
    hideModalBtn.addEventListener('click', () => {
        modal.dataset.modalOpen = false
    })
    
    /* 
    -------------------------
    Todo
    -------------------------
    */
    
    let todosArr = []
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        makeTodo()
        
        input.value = null;
    })
    
    function makeTodo(){
        let date = new Date()
        
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        let todoObj = {
            id: date.getTime(),
            in: `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`,
            title: input.value,
            isComplated: false,
            from: select.value
        }
        
        todosArr.push(todoObj)
        console.log(todosArr);
    }
})

let btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    console.log('Modal ochilishi kerak edi');
})