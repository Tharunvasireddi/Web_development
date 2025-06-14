document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("input");
    let button = document.getElementById("button");
    let list = document.getElementById("list");

    let toDos = JSON.parse(localStorage.getItem("todos")) || [];
    button.addEventListener("click", () => {
        let toDoText = input.value.trim();
        if (toDoText === "") return;
        let newToDo = {
            id: Date.now(),
            text: toDoText,
            completed: false
        };
        toDos.push(newToDo);
        localStorage.setItem("todos", JSON.stringify(toDos));
        renderToDos();
        input.value ="";
    });
    renderToDos();
    
    function renderToDos() {
        list.innerHTML = ""; // Clear existing list items to avoid duplicates
        toDos.forEach(toDo => {
            let li = document.createElement("li");
            li.setAttribute("data-id", toDo.id);
            li.innerHTML = `
                <span class="block flex-1">${toDo.text}</span>
                <button class="bg-red-700 px-2 py-1 text-white rounded-sm hover:bg-red-800 transition duration-300">Delete</button>`;
            li.classList.add("text-white", "py-2", "px-4", "bg-gray-900", "flex", "justify-between", "gap-4", "items-center", "rounded", "mb-2");
            list.appendChild(li);

            li.addEventListener("click", (event) => {
                if (event.target.tagName === "BUTTON") { 
                    toDos = toDos.filter((t) => t.id !== toDo.id);
                    li.remove();
                    localStorage.setItem("todos", JSON.stringify(toDos));
                }
            });
        });
    }
});