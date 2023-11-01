import movieMania from "../../src/imgs/projects/MovieMania.png"
import todoList from "../../src/imgs/projects/todoList.png"
import library from "../../src/imgs/projects/library.png"

const projects = [
    {
        name: "Film tracking app",
        skills: ["JS", "React", "TypeScript", "SASS", "JSON-server"],
        discription: "A web application for searching and tracking information about movies, TV series, and upcoming premieres.",
        additionalInfo: [`Search for movies by title, genre, release year, and other parameters.`,
            `View detailed information about movies, including descriptions, ratings, cast, and more.`,
            `Ability to add movies to a "Favorites" list for tracking.`,
            `Create a personal profile to save settings and movie lists.`,
            `User-friendly interface.`
        ],
        github: "https://github.com/Glebee/MovieMania",
        image: movieMania,
        bigImage: "",
    },
    {
        name: "TodoList",
        skills: ["JS"],
        discription: "A small interactive web application aimed at training and practicing asynchronous operations and promises, DOM manipulation, data manipulation, and network requests to the server.",
        additionalInfo: [`Asynchronous & Promises: Project uses async operations and promises for server interaction, involving data retrieval and CRUD operations.`,
            `DOM Manipulation: Dynamic manipulation of web page elements for interactivity.`,
            `Data Handling: Task and user data processing, including adding, updating, deleting tasks.`,
            `Server-Side Network Requests: Communication with external API for data retrieval and updates.`],
        github: "https://github.com/Glebee/todoAppJS",
        image: todoList,
        bigImage: "",
    },
    {
        name: "node.js Library",
        skills: ["node.js", "Express.js"],
        discription: "It's a web application for an online library, allowing users to borrow books in their name. The project was created to teach server application development using Node.js.",
        github: "https://github.com/Glebee/JSLibrary",
        image: library,
        bigImage: "",
    },
]

export { projects };