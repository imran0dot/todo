import MenuNavigation from "../menuItems";
import Logo from "../logo";

const Header = () => {

    return (
        <header className="bg-blue-600 text-white shadow-lg h-24 hidden md:flex">
            <Logo />
            <MenuNavigation />
        </header>
    );
};

export default Header;