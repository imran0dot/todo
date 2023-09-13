const Todo = () => {
    return (
        <div>
            <body className="bg-gray-100">

                <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                    <nav>
                        <ul className="space-y-2">
                            <li className="opcion-con-desplegable">
                                <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                    <div className="flex items-center">
                                        <i className="fas fa-file-alt mr-2"></i>
                                        <span>Documentación</span>
                                    </div>
                                    <i className="fas fa-chevron-down text-xs"></i>
                                </div>
                                <ul className="desplegable ml-4 hidden">
                                    <li>
                                        <a href="#" className=" p-2 hover:bg-gray-700 flex items-center">
                                            <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                            Firmas pendientes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="p-2 hover:bg-gray-700 flex items-center">
                                            <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                            Documentos
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </body>
        </div>
    );
};

export default Todo;