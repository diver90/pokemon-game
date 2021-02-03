import style from './style.module.css';
import cn from 'classnames';

const Layout = ({id, title, urlBg, colorBg, children, colorTitle}) => {
    const styleBg = { backgroundImage: `url(${urlBg})`, backgroundColor: colorBg};
    return (
        <section className={style.root} id={id} style={styleBg}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3 style={{color: colorTitle}}>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={cn(style.desc, style.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;