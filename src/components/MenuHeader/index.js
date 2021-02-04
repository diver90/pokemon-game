import {useState} from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {
    const [isActive, setActive] = useState(null);
    const handleClick = () => {
        setActive(!isActive);
    };
    return (
        <>
            <Menu active={isActive} onClickMenu={handleClick}/>
            <NavBar active={isActive} bgActive={bgActive} onClickMenu={handleClick}/>
        </>
    );
}

export default MenuHeader;