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
    hideModalBtn = modal.querySelector('#hide-modal'),
    createBtn = document.querySelector('.add-btn'),
    dropdownBtns = document.querySelector('.dropdown-menu');
    
    /* 
    -------------------------
    Modals settings
    -------------------------
    */
    /*
    -------------------------
    New modal
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
    ------------------------
    create dropdown
    ------------------------
    */
    
    createBtn.addEventListener('click', (e) => {
        if(dropdownBtns.dataset.dropdownMenu === "true"){
            dropdownBtns.dataset.dropdownMenu = false
        }else{
            dropdownBtns.dataset.dropdownMenu = true
        }
    })
    
    /* 
    -------------------------
    Todo
    -------------------------
    */
    
    let todosArr = []
    let todosSection = document.querySelector('.todos-section')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        makeTodo()

        todosSection.textContent = '';
        
        todosArr.forEach(todo => {
            let elDiv = document.createElement('div')
            let elh4 = document.createElement('h4')
            let elPi = document.createElement('p')
            let elDivDate = document.createElement('div')
            
            todosSection.appendChild(elDiv)
            elDiv.appendChild(elh4)
            elDiv.appendChild(elPi)
            elDiv.appendChild(elDivDate)
            elDiv.className = 'todo'
            elh4.textContent = todo.title
            elh4.className = 'title'
            elDivDate.textContent = 'April 3, 2022'
            elDivDate = 'date'
            elPi.textContent = todo.about
        })

        input.value = null;
    })
    
    function makeTodo(){
        let date = new Date()
        
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        let todoObj = {
            id: date.getTime(),
            in: `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`,
            title: input.value,
            about: "aboutInput.value",
            isComplated: false,
            from: select.value
        }
        
        todosArr.push(todoObj)
        console.log(todosArr);
    }
})