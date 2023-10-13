import GuessNumberGame from "./components/guessingNumberGame/GuessNumberGame";
import React, { Component } from "react";
import ProfileDashboard from "./components/myProfile/ProfileDashboard";
import "bulma/css/bulma.css";
import AnimalButton from './components/animalShow/AnimalButton';

export default class App extends Component {
  state = {
    activeTab: "guess",
  };
  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  updateTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    let { activeTab } = this.state;
    return (
      <>
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a onClick={() => this.updateTab("guess")}>Guessing Game</a>
            </li>
            {/* <li>
              <a onClick={() => this.updateTab("voiceInputDashboard")}>
                Voice Assistant Dashboard
              </a>
            </li> */}
            <li>
              <a onClick={() => this.updateTab("animalShow")}>Animal Show</a>
            </li>
          </ul>
        </div>
        {activeTab === "guess" && <GuessNumberGame />}
        {activeTab === "voiceInputDashboard" && <ProfileDashboard />}
        {activeTab === "animalShow" && <AnimalButton/>}
      </>
    );
  }
}
