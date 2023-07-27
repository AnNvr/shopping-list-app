import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
  databaseURL: "https://playground-70d8c-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

// deafult settings to communicate with firebase database
const app = initializeApp(appSettings)
const database = getDatabase(app)
// variable to store items in the database through built-in firebase reference function
const itemsInDB = ref(database, "items")

const inputEl = document.getElementById("input-field")
const addButton = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

addButton.addEventListener("click", () => {
    let inputValue = inputEl.value

    push(itemsInDB, inputValue)

    inputEl.value = ""

    shoppingList.innerHTML += `<li>${inputValue}</li>`
})