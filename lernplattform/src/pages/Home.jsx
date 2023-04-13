import React from 'react';
import {Link} from "react-router-dom";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            uname: ''
        };
    }

    handleNameOnChange(e) {
        this.setState({
            uname: e.target.value
        });
    }

    onStartButtonClick() {
        window.sessionStorage.setItem("username", this.state.uname);
        window.sessionStorage.setItem("points", 0)
    }

    render() {
        return (
            <div id='homepage_container'>
                <div id='homepage_left'>
                    <h1>Herzlich Willkommen zu "<i>Hier fancy Namen einfügen</i>"</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>

                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                        blandit
                        praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna
                        aliquam erat volutpat.
                    </p>

                    <p>
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                        esse
                        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                        iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
                        nulla
                        facilisi.
                    </p>
                </div>

                <div id='homepage_right'>
                    <img src="../img/mainpage.jpg"/>

                    <div id="user_input">
                        <h3 id="username_headline">Sag mir wie du heißt!</h3>
                        <input type="text" id="uname" name="uname" value={this.state.name}
                               onChange={(e) => this.handleNameOnChange(e)}/>
                        <br/>
                        <Link to="/world">
                            <button id="button_world" onClick={this.onStartButtonClick()}>Los geht's</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
}



export default Home;
