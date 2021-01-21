import React from "react";
import style from './BaseLayout.module.css'
import {Link} from "react-router-dom";
export const BaseLayout=({children})=>{
    return(
        <div className={style.mainWrapper}>
            <header><Link to='/'>header data</Link></header>
            <main>
                {children}
            </main>
            <footer>footer data</footer>
        </div>
    )
}