export const renderCategories = (categories, categoriesContainer, inputChangeCallback) => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const categoryInput = document.createElement("input");
        categoryInput.type = "radio";
        categoryInput.name = "category";
        categoryInput.value = category;
        categoryInput.id = `category-${category}`;
        categoryInput.addEventListener("change", () => {
            inputChangeCallback(category);
        });
        const categoryLabel = document.createElement("label");
        categoryLabel.setAttribute("for", `category-${category}`);
        categoryLabel.innerText = category;
        categoryElement.appendChild(categoryInput);
        categoryElement.appendChild(categoryLabel);
        categoriesContainer.appendChild(categoryElement);
    });
};
const add = (v1, v2) => `${v1 + v2}`;
