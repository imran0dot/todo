import NavMenu from "./navMenu";

const Sidebar = () => {
    const menuItems = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "List",
            "path": "/list"
        }
    ]
    return (
            <div className="bg-gray-100">

                <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                    <nav>
                        <ul className="space-y-2">
                            {
                                menuItems?.map((menu, index) => <NavMenu key={index} menu={menu} />)
                            }
                        </ul>
                    </nav>
                </aside>
            </div>
    );
};

export default Sidebar;