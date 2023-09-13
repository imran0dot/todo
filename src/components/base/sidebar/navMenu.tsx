import { BsArrowUpLeftCircleFill } from 'react-icons/bs'
const NavMenu = ({menu}) => {
    return (
        <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                <div className="flex items-center gap-2 text-3xl font-bold">
                    <BsArrowUpLeftCircleFill />
                    <span>{menu.name}</span>
                </div>
            </div>
        </li>
    );
};

export default NavMenu;