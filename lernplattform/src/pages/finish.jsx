import React from "react";
import {Link} from "react-router-dom";

function Result() {

    const result = sessionStorage.getItem("won")

    if(result) {
        return(
            <div>
                <p>Herzlichen Glückwunsch, Sie haben gewonnen!</p>
                <p>Sie erhalten 500 Punkte</p>
            </div>
        )
    }else{
        return(
            <div>
                <p>Das war leider nicht richtig, versuchen Sie es doch nocheinmal</p>
            </div>
        )

    }
}
class Finish extends React.Component{
    render() {
        const result = sessionStorage.getItem("won")
        if(result=="true") {
            return(
                <div>
                    <p>Herzlichen Glückwunsch, Sie haben gewonnen!</p>
                    <p>Sie erhalten 500 Punkte</p>
                    <Link to="/world">
                        <button>Zurück zur Levelauswahl</button>
                    </Link>
                </div>
            )
        }else{
            return(
                <div>
                    <p>Das war leider nicht richtig, versuchen Sie es doch nocheinmal</p>
                    <Link to="/world">
                        <button>Zurück zur Levelauswahl</button>
                    </Link>
                </div>
            )

        }
    }
}

export default Finish