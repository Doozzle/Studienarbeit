import React from 'react';
import {Link} from "react-router-dom";

class World extends React.Component {
    world: string
    level: string
    constructor() {
        super();

        this.setState({
            level: "level0",
            world: "world0"
        })
    }

    getUsername() {
        return sessionStorage.getItem("username");
    }

    getPoints() {
        return sessionStorage.getItem("points");
    }

    setLevel(world, level) {
        sessionStorage.setItem("world", world);
        sessionStorage.setItem("level", level)
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
                    <Link to="/level_adk1"><button className="level-button" onClick={() => this.setLevel("world1", "level1")}>Level 1</button></Link>
                    <Link to="/level_adk2"><button className="level-button" onClick={() => this.setLevel("world1", "level2")}>Level 2</button></Link>
                    <Link to="/level_adk3"><button className="level-button" onClick={() => this.setLevel("world1", "level3")}>Level 3</button></Link>

                </div>

                <h3>Welt 2 - Betriebssysteme</h3>
                <div id="world2_popup">
                    <h3>Bitte wähle das Level aus!</h3>
                    <Link to="/Level_bs1"><button className="level-button" onClick={() => this.setLevel("world2", "level1")}>Level 1</button></Link>
                    <Link to="/Level_bs2"><button className="level-button" onClick={() => this.setLevel("world2", "level2")}>Level 2</button></Link>
                    <Link to="/Level_bs3"><button className="level-button" onClick={() => this.setLevel("world2", "level3")}>Level 3</button></Link>
                </div>


            </div>

        )
    }
}

export default World;

