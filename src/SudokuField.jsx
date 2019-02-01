import React from "react";
import styled from "styled-components";

const Field = styled.input`
  width: 90px;
  height: 90px;
  color: ${props => (props.disabled ? "gray" : "white")};
  background-color: black;
  text-align: center;
  font-size: 80px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin: 0;
  padding:0;

  border: 1px solid white;

  border-top-color: ${props => props.border.top ? 'red' : 'white'};
  border-bottom-color: ${props => props.border.bottom ? 'red' : 'white'};
  border-right-color: ${props => props.border.right ? 'red' : 'white'};
  border-left-color: ${props => props.border.left ? 'red' : 'white'};
`;

const MAX = 9,
  MIN = 1;

export class SudokuField extends React.Component {
  state = {
    x: this.props.x,
    y: this.props.y,
    val: this.props.val !== 0 ? this.props.val : ""
  };

  checkBorder = () => {
    const border = {};
    //top
    border.top = this.state.y % 3 === 0;
    //bottom
    border.bottom = (this.state.y + 1) % 3 === 0;
    //right
    border.right = (this.state.x + 1) % 3 === 0;
    //left
    border.left = this.state.x % 3 === 0;
    return border;
  };

  change = event => {
    const val =
      event.target.value < MIN
        ? ""
        : event.target.value > MAX
        ? MAX
        : event.target.value;
    this.setState({ val });
    this.props.changeValue(val, this.state.x, this.state.y);
  };

  render() {
    return (
      <Field
        border={this.checkBorder()}
        type="number"
        value={this.state.val !== 0 ? this.state.val : ""}
        min={MIN}
        max={MAX}
        disabled={this.props.disable}
        onChange={this.change}
        precision={0}
        noStyle
      />
    );
  }
}
