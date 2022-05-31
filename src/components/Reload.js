import "../App.css";

function Reload() {

    const Aggiorna = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <button type="button" onClick={Aggiorna} className="reload">RELOAD</button>
        </div>
    );
}

export default Reload;