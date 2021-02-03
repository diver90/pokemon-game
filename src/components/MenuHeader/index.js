import {useState} from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
    };
    return (
        <>
            <Menu active={isActive}/>
            <NavBar active={isActive} onClickMenu={handleClick}/>
        </>
    );
}

export default MenuHeader;