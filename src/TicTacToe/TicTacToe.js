import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
	const [turn, setTurn] = useState("x");
	const [cells, setCells] = useState(Array(9).fill(""));

	const checkForWinner = () => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};
	};

	const handleClick = (num) => {
		if (cells[num] !== "") {
			alert("already clicked");
			return;
		}

		let squares = [...cells];

		if (turn === "x") {
			squares[num] = "x";
			setTurn("o");
		} else {
			squares[num] = "o";
			setTurn("x");
		}

		checkForWinner(squares);
		setCells(squares);
		// console.log(squares);
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]} </td>;
	};

	return (
		<div className="container">
			<table>
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={6} />
					</tr>
					<tr>
						<Cell num={7} />
						<Cell num={8} />
						<Cell num={9} />
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TicTacToe;
