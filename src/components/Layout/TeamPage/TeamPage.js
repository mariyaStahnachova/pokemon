import React, {useContext} from 'react';
import InfoCard from "../infoCard/infoCard";
import CartContext from "../../store/cartContext";
import css from './TeamPage.module.css'

const TeamPage = () => {
    const ctx = useContext(CartContext)
    return (
     <div className={css.row}>
         <div>
            <p>Your team</p>
             <div className={css.board}>
            {ctx.items.length !== 0 &&
                ctx.items.map(el=>
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
             {ctx.liked.length !== 0 &&
                 ctx.liked.map(el=>
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