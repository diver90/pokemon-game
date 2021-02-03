import cn from 'classnames';
import style from './style.module.css';

const NavBar = ({active, onClickMenu}) => {
   const handleClick = () => {
       onClickMenu && onClickMenu();
   }
    return (
        <nav id={style.navbar}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                    LOGO
                </p>
                <a  onClick={handleClick} className={cn(style.menuButton, {[style.active]: active})}>
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;