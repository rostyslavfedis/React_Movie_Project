import React from "react";
import {FilmItem} from "../film-item";
import style from './FilmList.module.css'

export const FilmList = ({items, onFilmClick}) => {

    console.log(items, 'from FilmList');

    return (
        <div className={style.listWrapper}>
            {items.map(item =>
                (<div className={style.itemWrapper} key={item.id}
                      onClick={()=>onFilmClick(item)}>
                    < FilmItem  {...item}/>
                </div>)
            )}
        </div>
    )
}