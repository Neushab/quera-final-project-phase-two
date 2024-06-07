const addTodoBtn = document.querySelector(".main__form__todo__priority__bottom__addbtn");
const todoTitle = document.querySelector(".main__form__todo__title");
const todoDesc = document.querySelector(".main__form__todo__desc");
const todoPriorityBtn = document.querySelector(".main__form__todo__priority__btn");
const todoPriorityList = document.querySelector(".main__form__todo__priority__list");
const todoPriorityBtnSvg = document.querySelector(".main__form__todo__priority__btn svg");
const priority = document.querySelectorAll("input[name='priority']");
const inProgressTodoList = document.querySelector(".main__form__inprogresstodolist");
const actionBtn = document.querySelector("#action");
const actionList = document.querySelector(".main__form__inprogresstodolist__inprogresstodos__inner__actions");
const deleteButton = document.querySelector("#delete");
const edit = document.querySelector("#edit");
const check = document.querySelector("#input");



window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    addTodoBtn.addEventListener("click", e => {
        e.preventDefault();

        let SelectedPriority;
    for (let i = 0; i < priority.length; i++) {
        if (priority[i].checked) {
            SelectedPriority = priority[i].value;
        }
    }
    if (SelectedPriority===undefined) {
        alert("شما اولویتی برای تسک خود انتخاب نکرده‌اید");
    }

    const newTodo = {
        title: todoTitle.value,
        desc: todoDesc.value,
        Priority: SelectedPriority,
        done: false
    };

        todos.push(newTodo);

        localStorage.setItem('todos', JSON.stringify(todos));

        todoTitle.value = '';
        todoDesc.value = '';

        displayTodos();
    })
    displayTodos();
})

function displayTodos() {
    const todoList = document.querySelector('.main__form__inprogresstodolist');

    

    todos.forEach(newTodo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('main__form__inprogresstodolist__inprogresstodos__inner')

        const input = document.createElement('input');
        const a = document.createElement('a');
        const span = document.createElement('span');
        const p = document.createElement('p');
        const svg = document.createElement('svg');

        

        span.classList.add('main__form__todo__priority__list');

        if(newTodo.priority == 'low') {
            span.classList.add('main__form__todo__priority__list__low');
        }
        else if (newTodo.priority == 'mid') {
            span.classList.add('main__form__todo__priority__list__mid');
        }
        else {
            span.classList.add('main__form__todo__priority__list__high');
        }


        title.innerHTML= `<a class="main__form__inprogresstodolist__inprogresstodos__inner">${newtodo.title}</a>`;
        priority.innerHTML = `<span>${newTodo.Priority}</span>`;
        desc.innerHTML = `<p class="main__form__inprogresstodolist__inprogresstodos__inner">${newtodo.desc}</p>`;
        action.classList.add('main__form__inprogresstodolist__inprogresstodos__inner__actions')
        action.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="20" viewBox="0 0 1 20" fill="none">
            <line x1="0.5" x2="0.5" y2="20" stroke="#EBEDEF"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z" stroke="#5C5F61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`; 


        todoItem.appendChild(input);
        todoItem.appendChild(a);
        todoItem.appendChild(span);
        todoItem.appendChild(p);
        todoItem.appendChild(svg);

        todoList.appendChild(todoItem);


        if (newTodo.done) {
            todoItem.classList.add('done');
        }
        check.addEventListener('click', () => {
            newTodo.done = check.checked; 
            localStorage.setItem('todos', JSON.stringify(todos));

            if (newTodo.done) {
                todoItem.classList.add ('done');
            }
            else {
                todoItem.classList.remove('done');
            }

            displayTodos();

        })

        
    });
}


const TodoPriorityBtnHandler = ()=>{
    todoPriorityList.classList.toggle("show");
    todoPriorityBtnSvg.classList.toggle("rotate-90")

    if (!todoPriorityList.classList.contains("show")) {
        for (let i = 0; i < priorities.length; i++) {
            priorities[i].checked = false;
        }
    }
};
todoPriorityBtn.addEventListener("click", TodoPriorityBtnHandler);






const actionBtnHandler = ()=>{
    actionList.classList.toggle("show");
};
actionBtn.addEventListener("click", actionBtnHandler);


const deleteButtonHandler = (e) => {
    todos = todos.filter(t => t != newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();

}
deleteButton.addEventListener("click", deleteButtonHandler);

const editButtonHandler = () => {
    todoTitle.removeAttribute();
    todoDesc.removeAttribute();
    todoTitle.focus();
    todoTitle.addEventListener('blur', () => {
        todoTitle.setAttribute();
        newTodo.title = todoTitle.value;
        localStorage.setItem('todos', JSON.stringify(todos));
    })
    todoDesc.addEventListener('blur', () => {
            todoDesc.setAttribute();
            newTodo.desc = todoDesc.value;
            localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
    })

}
edit.addEventListener("click", editButtonHandler);

// const DOMContentLoadedHandler = () => {
//     const getInProgressTodos = JSON.parse(localStorage.getItem("inProgressTodos"));
//     getInProgressTodos.forEach(todo => {
//         const todoBox = document.createElement("div");
//         todoBox.classList.add("main__inprogresstodolist__inprogresstodos__inner");
//         if (todo.priority === "low") {
//             todoBox.innerHTML = `
//             <a class="main__inprogresstodolist__inprogresstodos__inner a">${todo.title}</a>
//             <span style background-color:#C3FFF1>${todo.desc}</span>
//             <p main__inprogresstodolist__inprogresstodos__inner p">${todo.priority}</p>
//             `; 
//             }
//             else if (todo.priority === "mid") {
//             todoBox.innerHTML = `
//             <a class="main__inprogresstodolist__inprogresstodos__inner a">${todo.title}</a>
//             <span style background-color:#FFEFD6>${todo.desc}</span>
//             <p main__inprogresstodolist__inprogresstodos__inner p">${todo.priority}</p>
//             `;
//             }
//             else {
//             todoBox.innerHTML = `
//             <a">${todo.title}</a>
//             <span style background-color: #FFE2DB>${todo.desc}</span>
//             <p>${todo.priority}</p>
//             `;
//             }
            
//         });
       

//         inProgressTodoList.appendChild(todoBox);
//     };

//      //console.log(getInProgressTodos);

// document.addEventListener("DOMContentLoaded", DOMContentLoadedHandler)