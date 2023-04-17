import React from "react";
import {Link} from "react-router-dom";

class Level_bs2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            process: ''
        };
    }
    getUsername() {
        return sessionStorage.getItem("username");
    }

    getPoints() {
        return sessionStorage.getItem("points");
    }

    handleProcessChange(e) {
        this.setState({process: e.target.value});
        console.log("Process selected")
    }

    calculateResult(){
        window.sessionStorage.setItem("won", false)
        const process_list = [["prozessA", 18, 7], ["prozessB", 9, 7], ["prozessC", 16, 13], ["prozessD", 4, 3], ["prozessE", 4, 2], ["prozessF", 15, 5]];
        let next_process = ["", 10000, 10000];
        for (let i in process_list) {
            if (process_list[i][2] < next_process[2]) {
                next_process = process_list[i]
            }

        }

        const user_input = this.state.process
        if (user_input == next_process[0]){
            console.log("User input was correct");
            window.sessionStorage.setItem("won", true)
            let current_points = Number(sessionStorage.getItem("points"));
            let new_points = current_points + 500;
            window.sessionStorage.setItem("points", new_points)
        }
        else {
            console.log("User input was incorrect");
            window.sessionStorage.setItem("won", false);
        }
    }
    render() {
        return (

            <div id="level">
                <div id="player_information">
                    <h4>Username: {this.getUsername()}<br/>Punkte: {this.getPoints()}</h4>
                </div>

                <div id="ranking">
                    Player x 25pts<br/>
                    Player y 16pts<br/>
                    Player z 13pts<br/>
                    Du {this.getPoints()}pts
                </div>

                <div id="explanation">
                    <h3>Erklärung vom Spiel</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>

                <div id="prerequisites">
                    <ul>
                        <li>Scheduling-Algorithmus: Shortest Remaining Time First</li>
                        <li>Laufzeit der CPU: 12 Zeiteinheiten</li>
                        <li>Aktuelle Prozesse:</li>
                    </ul>
                    <table>
                        <tr>
                            <td></td>
                            <td>Laufzeit</td>
                            <td>Verbleibende Rechenzeit</td>
                        </tr>
                        <tr>
                            <td>Prozess A</td>
                            <td>18 ZE</td>
                            <td>7 ZE</td>
                        </tr>
                        <tr>
                            <td>Prozess B</td>
                            <td>9 ZE</td>
                            <td>7 ZE</td>
                        </tr>
                        <tr>
                            <td>Prozess C</td>
                            <td>16 ZE</td>
                            <td>13 ZE</td>
                        </tr>
                        <tr>
                            <td>Prozess D</td>
                            <td>4 ZE</td>
                            <td>3 ZE</td>
                        </tr>
                        <tr>
                            <td>Prozess E</td>
                            <td>4 ZE</td>
                            <td>2 ZE</td>
                        </tr>
                        <tr>
                            <td>Prozess F</td>
                            <td>15 ZE</td>
                            <td>5 ZE</td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </div>

                <div id="user_input">
                    <label>Welcher Prozess darf als nächstes rechnen?</label>
                    <select id="process_input" name="process" onChange={event => this.handleProcessChange(event)}>
                        <option value="prozessA">Prozess A</option>
                        <option value="prozessB">Prozess B</option>
                        <option value="prozessC">Prozess C</option>
                        <option value="prozessD">Prozess D</option>
                        <option value="prozessE">Prozess E</option>
                        <option value="prozessF">Prozess F</option>
                    </select>

                    <Link to="/finish">
                        <button id="confirm-button" onClick={event => {this.calculateResult()}}>Bestätigen</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Level_bs2