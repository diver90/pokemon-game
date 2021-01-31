import layout from './style.module.css';

const Layout = ({id, title, urlBg, colorBg, children, colorTitle}) => {
    const styleBg = { backgroundImage: `url(${urlBg})`, backgroundColor: colorBg};
    return (
        <section className={layout.root} id={id} style={styleBg}>
            <div className={layout.wrapper}>
                <article>
                    <div className={layout.title}>
                        <h3 style={{color: colorTitle}}>{title}</h3>
                        <span className={layout.separator}></span>
                    </div>
                    <div className={`${layout.desc} ${layout.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;