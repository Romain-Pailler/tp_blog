import React from 'react';
import '../style/FormBlog.css';

function valider(e){
    e.preventDefault();
    alert(e.target['mon_nom'].value);
}
export default function formBlog() {
  return (
    <form className='form' onSubmit={valider}>
        <input type="text" name="mon_nom" id="nom" />
        <input type="text" name="mon_commentaire" id="commentaire" />
        <button type="submit">Valider votre commentaire</button>
    </form>
  )
}
