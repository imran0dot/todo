import { BsArrowUpLeftCircleFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
const NavMenu = ({ menu }) => {
    return (
        <li className="opcion-con-desplegable">
            <Link to={menu.path} className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center gap-2 text-3xl font-bold">
                    <BsArrowUpLeftCircleFill />
                    <span>{menu.name}</span>
                </div>
            </Link>
        </li>
    );
};

export default NavMenu;