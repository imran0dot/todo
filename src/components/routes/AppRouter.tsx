import App from "@/App";
import HomePage from "@/pages/home";
import TodoList from "@/pages/todoList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <HomePage />
        }, {
            path: "/list",
            element: <TodoList />
        }]
    },
]);
export default router;