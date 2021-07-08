import React, {useContext} from 'react';
import InfoCard from "../infoCard/infoCard";
import CartContext from "../../store/cartContext";
import css from './TeamPage.module.css'
import {useSelector} from "react-redux";

const TeamPage = () => {
    const items = useSelector(store=> store.items)
    const liked = useSelector(store=> store.liked)
console.log(items)
console.log(liked)
    return (
     <div className={css.row}>
         <div>
            <p>Your team</p>
             <div className={css.board}>
            {items.length !== 0 &&
                items.map(el=>
                    <InfoCard
                        card={false}
                        key={el.src}
                        name={el.name}
                        src={el.src}
                        abiltties={el.abilities}
                        types={el.types}>
                    </InfoCard>
                )
            }
             </div>
         </div>

         <div>
             <p>Like</p>
             <div className={css.board}>
             {liked.length !== 0 &&
                 liked.map(el=>
                     <InfoCard
                         card={false}
                         key={el.src}
                         name={el.name}
                         src={el.src}
                         abiltties={el.abilities}
                         types={el.types}>
                     </InfoCard>
                 )
             }
             </div>
         </div>

     </div>
    );
}

export default TeamPage;