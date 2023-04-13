import React from 'react';

class Level extends React.Component {
    getUsername() {
        return sessionStorage.getItem("username");
    }

    getPoints() {
        return sessionStorage.getItem("points");
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

                <div id="shortest-path-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Betrachteter Knoten</th>
                                <th>Kosten für A</th>
                                <th>Kosten für B</th>
                                <th>Kosten für C</th>
                                <th>Kosten für D</th>
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
                                            <td>15</td>
                                            <td>A</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>2</td>
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
                                            <td>6</td>
                                            <td>C</td>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <tr>
                                            <b>
                                            <td>2</td>
                                            <td>A</td>
                                            </b>
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
                                <td>3. Schritt</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Level;