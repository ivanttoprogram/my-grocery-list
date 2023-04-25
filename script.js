import { LocalDB } from 'https://cdn.skypack.dev/peadb'
import shortid from 'https://cdn.skypack.dev/shortid'

const db = new LocalDB('grocery-list-db')
const groceries = db .getAll() || []

const grocerylist = document.getElementById('groceryList')
const newGroceryInput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const createGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery
    groceryElement.classList.add('groceryItem')
    groceryElement.addEventListener('click', () => {
        groceryElement.remove()
        db.delete(rocery.key)
    })
    return groceryElement
}

const addGrocery = newGrocery => {
    grocerylist.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    if(value) {
        const key = shortid.generate()
        addGrocery({key, value})
        db.set(key, value) 
        newGroceryInput.value = null
    }
})

groceries.map(grocery => addGrocery(grocery))