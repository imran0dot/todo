import NavMenu from "./navMenu";

const Todo = () => {
    const menuItems = [
        {
            "name": "Home",
            "path": "/"
        },
    ]
    return (
        <div>
            <body className="bg-gray-100">

                <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                    <nav>
                        <ul className="space-y-2">
                            {
                                menuItems?.map((menu, index) => <NavMenu key={index} menu={menu} />)
                            }
                        </ul>
                    </nav>
                </aside>
            </body>
        </div>
    );
};

export default Todo;