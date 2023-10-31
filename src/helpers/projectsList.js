import movieMania from "../../src/imgs/projects/MovieMania.png"
import todoList from "../../src/imgs/projects/todoList.png"
import library from "../../src/imgs/projects/library.png"

const projects = [
    {
        name: "Film tracking app",
        skills: "React, TypeScript, axios, SASS, json-server",
        discription: "A web application for searching and tracking information about movies, TV series, and upcoming premieres.",
        github: "https://github.com/Glebee/MovieMania",
        image: movieMania,
        bigImage: "",
    },
    {
        name: "TodoList",
        skills: "JS(promises/async/fetch)",
        discription: "A small interactive web application aimed at training and practicing asynchronous operations and promises, DOM manipulation, data manipulation, and network requests to the server.",
        github: "https://github.com/Glebee/todoAppJS",
        image: todoList,
        bigImage: "",
    },
    {
        name: "node.js Library",
        skills: "node.js, Express.js",
        discription: "It's a web application for an online library, allowing users to borrow books in their name. The project was created to teach server application development using Node.js.",
        github: "https://github.com/Glebee/JSLibrary",
        image: library,
        bigImage: "",
    },
]

export {projects};