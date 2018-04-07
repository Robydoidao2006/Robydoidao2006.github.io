//importing components to the app.js
import React, { Component } from "react";
import DragonCard from "./components/DragonCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
//importing the jpg files 
import dragonFriends from "./dragonfriends.json";
//contains an reset image png format
import clickreset from "./click.json";
// import Reset from "./components/Reset";
import "./App.css";


//randomly mixes the characters, this function will be added to the click event.
function mixCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
//when changes are made, the state updates it and then runs the render object.
class App extends Component {
  state = {
      dragonFriends,
      clickreset,
      clicked: [],
      score: 0,
      topScore: 0,
      alertBox: "",
  };

  //event listener wainting for click.
  imageClick = id => {
    // when image its clicked, it will subtract the image by id from the array
    if (this.state.clicked.indexOf(id) === -1) {
      //image clicked adds 1 point to score
      let newScore = this.state.score + 1;
        //displays the newscore
        this.setState({
          score: newScore,
        });
        // if newscore its greater than the topscore
        if (newScore > this.state.topScore) {
          //it will update the topscore
          this.setState({ topScore: newScore });
        }
      //this event will shuffle the cards everytime a card its clicked 
      this.shuffleCards();
      //this is keeping track of what image we clicked by refering the id
      this.setState({ clicked: this.state.clicked.concat(id) });
    } 
    else {
      //resets the game when we clicked the same image twice in a game.
      this.resetGame();
    }
  };

  //restart event 
  resetGame = () => {
  //this uptades the state and then runs the render function 
    this.setState({
      score: 0,
      clicked: []
    });
    this.shuffleCards();
  };

  //shuffle the cards 
  shuffleCards = () => {
    let newMixCharacters = mixCharacters(dragonFriends);
    //updates the state, and then it renders it
    this.setState({ dragonFriends: newMixCharacters });
  };

  //here is where every visual comes together, along with the structure of the page.
  render() {
    return (
      <Wrapper>
        <Navbar
    //      {this.state.clickreset.map(clicks => (
    //       <Reset
    //        key={}
    //             id={clicks.id}
    //             image={clicks.image}
    //  ))}
          score={this.state.score}
          topScore={this.state.topScore}
        />
            <Title
                 title={this.state.title}
                 alertBox={this.state.alertBox}
             /> 
             {this.state.dragonFriends.map(newDragonFriend => (
             <DragonCard
              key={newDragonFriend.id}
                  imageClick={this.imageClick}
                  resetGame={this.resetGame}
                  shuffleCards={this.shuffleCards}
                  id={newDragonFriend.id}
                  image={newDragonFriend.image}
             />
        ))}
      </Wrapper>
    );
  }
}

export default App;
