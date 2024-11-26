import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu, IoLockClosed } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' },
    ];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {open ? <IoLockClosed /> : <IoMenu />}
            </div>
            <ul className={`md:flex duration-1000 md:static absolute bg-yellow-200 px-6 ${open ? 'top-16' : '-top-60'} `}>
                {routes.map(route => (
                    <Link key={route.id} route={route}></Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
