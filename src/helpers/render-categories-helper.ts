import { Category } from "../types/types"

export const renderCategories = (
    categories: Category[], 
    categoriesContainer: HTMLElement, 
    inputChangeCallback: (category: Category) => void
) => {
    categories.forEach(category => {
        const categoryElement: HTMLElement = document.createElement("li")
    
        const categoryInput: HTMLInputElement = document.createElement("input")
        categoryInput.type= "radio"
        categoryInput.name = "category"
        categoryInput.value = category
        categoryInput.id = `category-${category}`
        categoryInput.addEventListener("change", () => {
            inputChangeCallback(category)
        })
    
        const categoryLabel: HTMLLabelElement = document.createElement("label")
        categoryLabel.setAttribute("for", `category-${category}`)
        categoryLabel.innerText = category
    
        categoryElement.appendChild(categoryInput)
        categoryElement.appendChild(categoryLabel)
    
        categoriesContainer.appendChild(categoryElement)
    })
} 
  
const add = (v1:number, v2:number) => `${v1 + v2}`
let sum = add(5,10)