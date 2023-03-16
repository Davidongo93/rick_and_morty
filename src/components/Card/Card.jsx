import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {addFavorite, removeFavorite} from "../../redux/actions"
import { useState } from "react";

function Card({id, name, species, gender, image, onClose }) {
  const [isFav,setIsFav] = useState(false);
  const handleFavorite=()=>{

    if (isFav){
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite()
    }
  }
  return (
    <>
    <div className={style.card}>
    {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
      <button onClick={ () => onClose(id)} className={style.closeButton}>
        x
      </button>
      <Link to={`/detail/${id}`}>
      <h2 className={style.name}>Nombre: {name}</h2>
       </Link>
      <div className={style.imageContainer}>
        <img src={image} alt= "" className={style.profileImage} />
      </div>
      <h2 className={style.species}>Especie: {species}</h2>
      <h2 className={style.gender}>Género: {gender}</h2>
    </div>
    </>
  );
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addFavorite:(character)=>{dispatch(addFavorite(character))},
    removeFavorite:(id)=>{dispatch(removeFavorite(id))}
  }

};
export default connect(null,mapDispatchToProps)(Card);