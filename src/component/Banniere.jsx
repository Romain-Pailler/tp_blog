import logo from '../assets/logo_blogeo.png';
import '../style/Banniere.css';
function Banniere(){
    return (
    <div className="banniere">
        <img src={logo} className='img_logo' alt='logo du site' />
        <h1>Bienvenue sur Blogeo</h1>
    </div>
    );
}
export default Banniere;