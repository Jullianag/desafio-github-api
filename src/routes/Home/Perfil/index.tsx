import Card from "../../../components/Card";
import './styles.css';
import SearchBar from "../../../components/SearchBar";




export default function Perfil() {



    return (
        <main>
            <section>
                <div className="card-container card mt54">
                    <div className="text-title-card pt54">
                        <Card title="Encontre um perfil Github"/>
                    </div>

                    <div>
                        <SearchBar />
                    </div>


                </div>
            </section>
        </main>
    );
}