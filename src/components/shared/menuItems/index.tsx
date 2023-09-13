const MenuNavigation = () => {
    const menuItems = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Home",
            "path": "/"
        }
    ]
    return (

        <nav className="header-links contents font-semibold text-base lg:text-lg">
            <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                {
                    menuItems?.map(({ name, path }, index) => {
                        return (
                            <li key={index} className="p-3 xl:p-6">
                                <a href={path}>
                                    <span>{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default MenuNavigation;