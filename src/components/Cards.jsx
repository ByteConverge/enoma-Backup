/* eslint-disable react/prop-types */

export default function Cards({img , text}){
    return(
        <div className="agric--Equip">
        <figure>
         <img src={img} alt="" />
        </figure>
        <h4>{text}</h4>
       </div>
    )
}