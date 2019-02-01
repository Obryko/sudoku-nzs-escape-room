import React from "react";
import { onPop, refrashPage } from "./socket";
import styled from "styled-components";
import { Sudoku } from "./Sudoku";
import data from "./data";
import poop from "./assets/poop.png";
import valid from "./validationSudoku";
import Swal from "sweetalert2";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Poop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const PoopImg = styled.img`
  @keyframes jump {
  0% {
    transform: translate(-100px,-100px) scale(1) rotate(-20deg);
  }

  50% {
    transform: translate(0px,0px) scale(0.7,0.7) rotate(0deg);
  }

  100% {
    transform: translate(100px,-100px) scale(1) rotate(20deg);
  }
}
  animation: jump .9s ease-in-out alternate infinite;
`;

const ButtonContariner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Button = styled.div`
  text-align: center;
  margin: 170px auto;
  padding: 20px 0px;
  display: block;
  height: 30px;
  width: 175px;

  cursor: pointer;
  font-size: 25px;
  color: #f0f0f0;
  border-radius: 10px;
  border-bottom: 4px solid darkgreen;
  background: linear-gradient(green, darkgreen);
  transition: all 0.05s linear;

  &:hover {
    background-position: 100px;
  }

  &:active {
    box-shadow: 2px 2px 2px #777;
    border-bottom: 1px solid darkgreen;
    transform: translateY(3px);
  }
`;

export class SudokuPlayground extends React.Component {
  state = {
    isPopVisible: true,
    gridIsValid: false
  };

  componentDidMount() {
    refrashPage();
    onPop(this.showPop);
  }

  validGrid = grid => {
    if (valid(grid) && !this.state.isPopVisible) {
      this.showAlert();
    }
  };

  showAlert = () => {
    Swal.queue([
      {
        type: "question",
        title: "Gratulacje!",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading(),
        preConfirm: pass =>
          data()
            .then(({ password, message }) => {
              this.setState({ gridIsValid: true });
              if (pass === password) {
                Swal.insertQueueStep({
                  type: "success",
                  title: message
                });
              } else {
                throw Error("Bad password");
              }
            })
            .catch(error => {
              Swal.insertQueueStep({
                type: "error",
                title: "Błędne hasło!"
              });
            })
      }
    ]);
  };

  showPop = entry => {
    this.setState({ isPopVisible: entry });
  };

  render() {
    return (
      <Container>
        {this.state.isPopVisible && (
          <Poop>
            <PoopImg src={poop} alt="Poop" />
          </Poop>
        )}
        <Sudoku validation={this.validGrid} />
        {this.state.gridIsValid && !this.state.isPopVisible && (
          <ButtonContariner>
            <Button onClick={this.showAlert}>Podaj hasło!</Button>
          </ButtonContariner>
        )}
      </Container>
    );
  }
}
