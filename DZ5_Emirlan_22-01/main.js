const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const edit = document.createElement('button')
        const del = document.createElement('button')
        const div = document.createElement('div')
        const text = document.createElement('p')
        const action = document.createElement('div')

        edit.textContent ='edit'
        del.textContent = 'delete'
        edit.addEventListener('click',()=>{
            let s = prompt(`change ToDo ${text.innerText}`)
            if (s.trim()=== ''){
                return false
            } else {
                text.innerText = s
            }
        })
        del.onclick = ()=> div.remove()
        del.setAttribute('class','delete')
        edit.setAttribute('class','ed')
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')


        text.innerText = input.value
        action.setAttribute('class','buttons')
        action.append(edit,del)

        div.append(text,action)
        todoList.prepend(div)


    }
    input.value = ''
}
createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)