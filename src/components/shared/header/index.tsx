import SimpleButton from "@/components/base/simpleBtn";
import MenuNavigation from "../menuItems";
import Logo from "../logo";

const Header = () => {

    return (
        <header className="bg-blue-600 text-white shadow-lg h-24 hidden md:flex">
            <Logo />
            <MenuNavigation />
            <SimpleButton color={"E5412E"}>Contact Me</SimpleButton>
        </header>
    );
};

export default Header;