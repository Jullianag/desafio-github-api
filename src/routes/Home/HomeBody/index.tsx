import './styles.css';
import Button from "../../../components/Button";
import {NavLink} from "react-router-dom";

export default function HomeBody() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="text-des mt27">
                        Desafio Github API
                    </div>
                    <div className="text-dev">
                        DevSuperior - Escola de programação
                    </div>
                    <div className="mt27">
                        <NavLink to="/perfil">
                            <Button text="começar"/>
                        </NavLink>
                    </div>

                </div>
            </section>
        </main>
    );
}