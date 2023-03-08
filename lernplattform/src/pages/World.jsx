import React from 'react';

class World extends React.Component {

    constructor() {
        super();
    }

    getUsername() {
        return sessionStorage.getItem("username");
    }

    getPoints() {
        let points = sessionStorage.getItem("points");
        if (points === undefined) {
            points = 0
        }
        return points;
    }

    render() {
        return (
            <div id="world">
                <div id="player_information">
                    <h4>Username: {this.getUsername()}<br/>Punkte: {this.getPoints()}</h4>
                </div>

                <div id="ranking">
                    Player x 25pts<br/>
                    Player y 16pts<br/>
                    Player z 13pts<br/>
                    Du {this.getPoints()}pts
                </div>

                <h3>Welt 1 - Algorithmen, Komplexität und Datenstrukturen</h3>
                <div id="world1_popup">
                    <h3>Bitte wähle das Level aus!</h3>
                    <button>Level 1</button>
                    <button>Level 2</button>
                    <button>Level 3</button>
                </div>
            </div>

        )
    }
}

export default World;

