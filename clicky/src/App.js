import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Header from "./components/Header";
import Cards from "./components/Cards";
import svg from "./cards.json";

class App extends Component {
  state = {
    svg,
    clickedSvgIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedSvgIds = this.state.clickedSvgIds;

    if (clickedSvgIds.includes(id)) {
      this.setState({
        clickedSvgIds: [],
        score: 0,
        status: "Game Over! PlayAgain?"
      });
      return;
    } else {
      clickedSvgIds.push(id);

      if (clickedSvgIds.length === 12) {
        this.setState({ score: 12, status: "You Won!" });
        return;
      }
      this.setState({svg, clickedSvgIds, score: clickedSvgIds.length, status: " "});

      for (let i = svg.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [svg[i], svg[j]] = [svg[j], svg[i]];
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Clicky Game</h1>
          <p>Try not to click the same image!</p>
        </header>
        <Score total={this.state.score} goal={12} status={this.state.status} />
        <Header>
          {this.state.svg.map(svgs => (
            <Cards
              shuffleScoreCard={this.shuffleScoreCard}
              id={svgs.id}
              key={svgs.id}
              image={svgs.image}
            />
          ))}
        </Header>
        <footer className="footer">
          <p>clicky game by denis plaster</p>
        </footer>
      </div>
    );
  }
}

export default App;
