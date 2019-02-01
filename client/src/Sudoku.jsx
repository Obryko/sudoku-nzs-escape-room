import React from "react";
import styled from "styled-components";
import { SudokuField } from "./SudokuField";

const Container = styled.div`
  width: 810px;
  margin: auto;
`;
const SudokuGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
`;

export class Sudoku extends React.Component {
  state = {
    grid: [
      [0, 5, 7, 6, 1, 3, 2, 8, 4],
      [4, 8, 3, 2, 5, 7, 1, 9, 6],
      [6, 1, 2, 8, 4, 9, 5, 3, 7],
      [1, 7, 8, 3, 6, 4, 9, 5, 2],
      [5, 2, 4, 9, 7, 1, 3, 6, 8],
      [3, 6, 9, 5, 2, 8, 7, 4, 1],
      [8, 4, 5, 7, 9, 2, 6, 1, 3],
      [2, 9, 1, 4, 3, 6, 8, 7, 5],
      [7, 3, 6, 1, 8, 5, 4, 2, 9]
    ],
    // grid: [
    //   [0, 0, 0, 0, 0, 0, 2, 0, 0],
    //   [0, 8, 0, 0, 0, 7, 0, 9, 0],
    //   [6, 0, 2, 0, 0, 0, 5, 0, 0],
    //   [0, 7, 0, 0, 6, 0, 0, 0, 0],
    //   [0, 0, 0, 9, 0, 1, 0, 0, 0],
    //   [0, 0, 0, 0, 2, 0, 0, 4, 0],
    //   [0, 0, 5, 0, 0, 0, 6, 0, 3],
    //   [0, 9, 0, 0, 0, 0, 0, 7, 0],
    //   [0, 0, 6, 0, 0, 0, 0, 0, 0]
    // ],
    disabledGrid: []
  };

  componentWillMount() {
    const disabledGrid = this.state.grid.map(row => row.map(val => val !== 0));
    this.setState({ disabledGrid });
    console.log(disabledGrid);
  }

  componentDidUpdate() {
    this.props.validation(this.state.grid);
  }

  changeValue = (val, x, y) => {
    const grid = this.state.grid;
    grid[y][x] = +val;
    this.setState({ grid });
  };

  render() {
    return (
      <Container>
        <SudokuGrid>
          {this.state.grid.map((row, y) => {
            return row.map((val, x) => (
              <SudokuField
                key={x + "" + y}
                x={x}
                y={y}
                disable={this.state.disabledGrid[y][x]}
                val={val}
                changeValue={this.changeValue}
              />
            ));
          })}
        </SudokuGrid>
      </Container>
    );
  }
}
