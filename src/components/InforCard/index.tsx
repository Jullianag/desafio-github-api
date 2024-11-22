import './styles.css';
import {PerfilDTO} from "../../model/perfil.ts";

type Props = {
    perfil: PerfilDTO;

}

export default function InforCard({perfil}: Props) {

    return (
        <div className="info-card info-container">
            <div className="div-info">

                <div className="div-img mt43">
                    <img src={perfil.avatar_url} alt={perfil.name}/>
                </div>


                <div className="card-letras mt43">
                    <h2>Informaçoes</h2>

                    <div className="caixa"><label>Perfil: </label>{perfil.url}</div>
                    <div className="caixa"><label>Seguidores: </label> {perfil.followers}</div>
                    <div className="caixa"><label>Localidade: </label> {perfil.location}</div>
                    <div className="caixa"><label>Nome: </label> {perfil.name}</div>

                </div>

            </div>


        </div>
    );
}