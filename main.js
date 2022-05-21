const ul = document.querySelector("ul")
const numberOfTasks = document.querySelector("span")
const textInput = document.querySelector("#textInput")
const submitBtn = document.querySelector("#submitButton")
let numberOfLis
let inputValue
let newLi
let pInNewLi

const getTask = (e) => {
    inputValue = e.target.value  
}
textInput.addEventListener("input", getTask)

const addTask = (e) => {
    e.preventDefault()
    if (inputValue) {

        newLi = document.createElement('li')
        pInNewLi = document.createElement('p')
        newLi.appendChild(pInNewLi)
        ul.appendChild(newLi)
        ul.style.display = "block"
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "X"
        newLi.appendChild(deleteBtn)
        const checkBox = document.createElement("input")
        checkBox.setAttribute("type", "checkbox")
        newLi.appendChild(checkBox)
        
        numberOfLis = ul.getElementsByTagName("li").length
        
        pInNewLi.textContent = inputValue
        textInput.value = ""
        
        
        
        document.querySelectorAll("li button").forEach((item) => {
            item.addEventListener('click', (e) => {
                e.target.parentNode.remove()
                numberOfLis = ul.getElementsByTagName("li").length
                numberOfTasks.textContent = numberOfLis
                if (numberOfLis === 0) {
                    ul.style.display = "none"
                }
            })  
        })

        checkBox.addEventListener("change", (e) => {
            if (checkBox.checked) {
                e.target.parentNode.firstChild.style.textDecoration = "line-through"
                numberOfLis -= 1
                numberOfTasks.textContent = numberOfLis
            } else {
                e.target.parentNode.firstChild.style.textDecoration = "none"
                numberOfLis += 1
                numberOfTasks.textContent = numberOfLis
            }
        })

        numberOfTasks.textContent = numberOfLis
        inputValue = ""
    }
}



submitBtn.addEventListener("click", addTask)