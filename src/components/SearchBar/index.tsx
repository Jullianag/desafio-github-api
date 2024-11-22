import './styles.css';
import Button from "../Button";
import InforCard from "../InforCard";
import {useState} from "react";
import {PerfilDTO} from "../../model/perfil.ts";
import findByName from "../../services/perfil-services.ts";

type formData = {
    Github: string;
}


export default function SearchBar() {


    const [address, setAddress] = useState<PerfilDTO>();

    const [formData, setFormData] = useState<formData>(
        {
            Github: "",
        }
    );

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value});
    }

    function handleFormSubmit(event: any) {
        event.preventDefault();

        findByName(formData.Github)
            .then((response) => {
                setAddress(response.data);
            })
            .catch((error) => {
                setAddress(undefined);
                console.log(error);
            });
    }


    return (
        <>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input className="form"
                               type="text"
                               name="Github"
                               value={formData.Github}
                               placeholder="Usuário Github"
                               onChange={handleInputChange}
                        />
                    </div>
                    <Button text="encontrar"/>
                </form>

                <div className="error">
                    {
                    address ? <InforCard perfil={address}/> : <p>Erro ao buscar usuário</p>

                    //address &&
                    //<InforCard perfil={address}/>
                    }
                </div>
            </div>

        </>
    );
}