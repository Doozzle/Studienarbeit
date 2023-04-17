import React from 'react';
import {Link} from "react-router-dom";

const graph = [
    [0,0,6,0,7,0,0],
    [0,0,0,4,8,0,9],
    [6,0,0,0,2,2,0],
    [0,4,0,0,10,1,5],
    [7,8,2,10,0,3,0],
    [0,0,2,1,3,0,0],
    [0,9,0,5,0,0,0]
]
function dijkstra_algorithm (iterations, starting_point) {
    /*graph: 2-dimensional array
    iterations: integer
    starting_point: integer
     */

    /*Initialise*/
    let distances = []

    for (let i in graph) {
        distances.push({
            distance: Number.POSITIVE_INFINITY,
            previous: ''
        })
    }

    /*Initialise Starting Point */
    distances[starting_point] = {
        distance: 0,
        previous: ''
    }

    /*Algorithm*/
    let visited = [];
    let watched = starting_point;
    let iterator = 0;

    while (iterator<= iterations) {
        /*Update of the shortest distances*/
        for (let x in graph[watched]) {
            if (x > 0 && !(visited.includes(x)) && distances[watched]["distance"] + x < distances[x]["distance"]){
                distances[x] = {
                    distance: graph[watched][x] + distances[watched]["distance"],
                    previous: watched
                }
            }
        }

        visited.push(watched)

        /*Check if we are already done*/
        if (visited.length == graph.length) {
            return distances
        };

        /*Determine next node*/
        let shortest = Number.POSITIVE_INFINITY;

        for (let i in distances) {
            if (i["distance"] < shortest && !(visited.includes(i))) {
                shortest = i["distance"]
                watched = i
            }
        }

        iterator++
    }

    return distances

}
class Level_adk2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            node: '',
            predecessorA: '',
            predecessorB: '',
            predecessorC: '',
            predecessorD: '',
            predecessorE: '',
            predecessorF: '',
            costA: '',
            costB: '',
            costC: '',
            costD: '',
            costE: '',
            costF: '',
        };
    }
    getUsername() {
        return sessionStorage.getItem("username");
    }

    getPoints() {
        return sessionStorage.getItem("points");
    }

    handleNodeChange(e) {
        this.setState({node: e.target.value});
        console.log("Node selected")
    }

    handleInputChange(e) {
        switch(e.target.id){
            case "predecessorA":
                this.setState({predecessorA: e.target.value})
                break;
            case "predecessorB":
                this.setState({predecessorB: e.target.value})
                break;
            case "predecessorC":
                this.setState({predecessorC: e.target.value})
                break;
            case "predecessorD":
                this.setState({predecessorD: e.target.value})
                break;
            case "predecessorE":
                this.setState({predecessorE: e.target.value})
                break;
            case "predecessorF":
                this.setState({predecessorF: e.target.value})
                break;
            case "costA":
                this.setState({costA: e.target.value})
                break;
            case "costB":
                this.setState({costB: e.target.value})
                break;
            case "costC":
                this.setState({costC: e.target.value})
                break;
            case "costD":
                this.setState({costD: e.target.value})
                break;
            case "costE":
                this.setState({costE: e.target.value})
                break;
            case "costF":
                this.setState({costF: e.target.value})
                break;
        }
    }

    calculateResult() {
        window.sessionStorage.setItem("won", false)
        if(this.state.node == "knotenD" &&
        this.state.predecessorA == "none" &&
        this.state.costA == "" &&
        this.state.predecessorB == "none" &&
        this.state.costB == "" &&
        this.state.predecessorC == "knotenE" &&
        this.state.costC == "9" &&
        this.state.predecessorD == "knotenB" &&
        this.state.costD == "7" &&
        this.state.predecessorE == "knotenA" &&
        this.state.costE == "6" &&
        this.state.predecessorF == "knotenB" &&
        this.state.costF == "10"){
            window.sessionStorage.setItem("won", true)
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

                <div id="graph">
                    <img src={require('../img/graph_adk2.jpg')}></img>
                </div>

                <div id="shortest-path-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Betrachteter Knoten</th>
                            <th>Kosten für A</th>
                            <th>Kosten für B</th>
                            <th>Kosten für C</th>
                            <th>Kosten für D</th>
                            <th>Kosten für E</th>
                            <th>Kosten für F</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Initial</td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>1. Schritt</td>
                            <td>
                                <table>
                                    <tr>
                                        <b>
                                            <td>0</td>
                                            <td>&#8210;</td>
                                        </b>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>5</td>
                                        <td>A</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>8</td>
                                        <td>A</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>6</td>
                                        <td>A</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>&infin;</td>
                                        <td>&#8210;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>2. Schritt</td>
                            <td>

                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>5</td>
                                        <td>A</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <b>
                                            <td>&infin;</td>
                                            <td>&#8210;</td>
                                        </b>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>7</td>
                                        <td>B</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>6</td>
                                        <td>A</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <td>10</td>
                                        <td>B</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>3. Schritt</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <label>Betrachteter Knoten:</label>
                    <select id="watched-node" onChange={event => this.handleNodeChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                    </select>

                    <br/>
                    <br/>
                    <label>Knoten A</label>
                    <label>Kosten</label>
                    <input type="number" id="costA" value={this.state.costA} onChange={event => this.handleInputChange(event)}/>
                    <label>Vorgänger</label>
                    <select id="predecessorA" onChange={event => this.handleInputChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                        <option value="none">Keine Veränderung</option>
                    </select>


                    <br/>
                    <br/>
                    <label>Knoten B</label>
                    <label>Kosten</label>
                    <input type="number" id="costB" value={this.state.costB} onChange={event => this.handleInputChange(event) }/>
                    <label>Vorgänger</label>
                    <select id="predecessorB" onChange={event => this.handleInputChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                        <option value="none">Keine Veränderung</option>
                    </select>


                    <br/>
                    <br/>
                    <label>Knoten C</label>
                    <label>Kosten</label>
                    <input type="number" id="costC" value={this.state.costC} onChange={event => this.handleInputChange(event) }/>
                    <label>Vorgänger</label>
                    <select id="predecessorC" onChange={event => this.handleInputChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                        <option value="none">Keine Veränderung</option>
                    </select>


                    <br/>
                    <br/>
                    <label>Knoten D</label>
                    <label>Kosten</label>
                    <input type="number" id="costD" value={this.state.costD} onChange={event => this.handleInputChange(event)} />
                    <label>Vorgänger</label>
                    <select id="predecessorD" onChange={event => this.handleInputChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                        <option value="none">Keine Veränderung</option>
                    </select>

                        <br/>
                        <br/>
                        <label>Knoten E</label>
                        <label>Kosten</label>
                        <input type="number" id="costE" value={this.state.costE} onChange={event => this.handleInputChange(event)} />
                        <label>Vorgänger</label>
                        <select id="predecessorE" onChange={event => this.handleInputChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                        <option value="none">Keine Veränderung</option>
                        </select>

                        <br/>
                        <br/>
                        <label>Knoten F</label>
                        <label>Kosten</label>
                        <input type="number" id="costF" value={this.state.costF} onChange={event => this.handleInputChange(event)} />
                        <label>Vorgänger</label>
                        <select id="predecessorF" onChange={event => this.handleInputChange(event)}>
                        <option value="knotenA">Knoten A</option>
                        <option value="knotenB">Knoten B</option>
                        <option value="knotenC">Knoten C</option>
                        <option value="knotenD">Knoten D</option>
                        <option value="knotenE">Knoten E</option>
                        <option value="knotenF">Knoten F</option>
                        <option value="none">Keine Veränderung</option>
                        </select>

                    <br/>
                    <br/>
                    <Link to="/finish">
                        <button onClick={event => this.calculateResult(event)}>Bestätigen</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Level_adk2;