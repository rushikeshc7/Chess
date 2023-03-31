import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Tile from '../Tile';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let pieces = [];

const Chessboard = () => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        setChessPieces();
        setChessboard();
        return () => {
            setBoard([]);
        }
    }, []);

    const setChessPieces = () => {
        pieces = [];
        for (let i = 0; i < 8; i++) {
            pieces.push({ img: require('../../utils/assets/pawn_black.png'), x: 6, y: i });
        }
        for (let i = 0; i < 8; i++) {
            pieces.push({ img: require('../../utils/assets/pawn_white.png'), x: 1, y: i });
        }
        pieces.push({ img: require('../../utils/assets/rook_black.png'), x: 7, y: 0 });
        pieces.push({ img: require('../../utils/assets/knight_black.png'), x: 7, y: 1 });
        pieces.push({ img: require('../../utils/assets/bishop_black.png'), x: 7, y: 2 });
        pieces.push({ img: require('../../utils/assets/king_black.png'), x: 7, y: 3 });
        pieces.push({ img: require('../../utils/assets/queen_black.png'), x: 7, y: 4 });
        pieces.push({ img: require('../../utils/assets/bishop_black.png'), x: 7, y: 5 });
        pieces.push({ img: require('../../utils/assets/knight_black.png'), x: 7, y: 6 });
        pieces.push({ img: require('../../utils/assets/rook_black.png'), x: 7, y: 7 });
        pieces.push({ img: require('../../utils/assets/rook_white.png'), x: 0, y: 0 });
        pieces.push({ img: require('../../utils/assets/knight_white.png'), x: 0, y: 1 });
        pieces.push({ img: require('../../utils/assets/bishop_white.png'), x: 0, y: 2 });
        pieces.push({ img: require('../../utils/assets/queen_white.png'), x: 0, y: 3 });
        pieces.push({ img: require('../../utils/assets/king_white.png'), x: 0, y: 4 });
        pieces.push({ img: require('../../utils/assets/bishop_white.png'), x: 0, y: 5 });
        pieces.push({ img: require('../../utils/assets/knight_white.png'), x: 0, y: 6 });
        pieces.push({ img: require('../../utils/assets/rook_white.png'), x: 0, y: 7 });
    }

    const setChessboard = () => {
        const chessboard = [];
        for (let i = verticalAxis.length - 1; i >= 0; i--) {
            for (let j = 0; j < horizontalAxis.length; j++) {
                const num = i + j + 2;
                let img = undefined;
                pieces.map((piece) => {
                    if (piece.x == i && piece.y == j) {
                        img = piece.img;
                    }
                })
                chessboard.push(<Tile key={chessboard.length} num={num} img={img} verticalAxis={verticalAxis} index1={i} index2={j} horizontalAxis={horizontalAxis} />)
            }
        }
        setBoard(chessboard);
    }

    const kingsPawnOpening = () => {
        pieces.push({ img: '', x: 1, y: 4 });
        pieces.push({ img: require('../../utils/assets/pawn_white.png'), x: 3, y: 4 });
        setChessboard();
    }

    const queensPawnOpening = () => {
        pieces.push({ img: '', x: 1, y: 3 });
        pieces.push({ img: require('../../utils/assets/pawn_white.png'), x: 3, y: 3 });
        setChessboard();
    }

    const retiOpening = () => {
        pieces.push({ img: '', x: 0, y: 6 });
        pieces.push({ img: require('../../utils/assets/knight_white.png'), x: 2, y: 5 });
        setChessboard();
    }

    const englishOpening = () => {
        pieces.push({ img: '', x: 1, y: 2 });
        pieces.push({ img: require('../../utils/assets/pawn_white.png'), x: 3, y: 2 });
        setChessboard();
    }

    const kingsFianchettoOpening = () => {
        pieces.push({ img: '', x: 1, y: 6 });
        pieces.push({ img: require('../../utils/assets/pawn_white.png'), x: 2, y: 6 });
        setChessboard();
    }

    const onRandomPressed = () => {
        const number = Math.floor(Math.random() * (6 - 1)) + 1;
        switch (number) {
            case 1:
                kingsPawnOpening();
                break;
            case 2:
                queensPawnOpening();
                break;
            case 3:
                retiOpening();
                break;
            case 4:
                englishOpening();
                break;
            case 5:
                kingsFianchettoOpening();
                break;
            default:
                kingsPawnOpening();
        }
    }

    const onResetPressed = () => {
        setChessPieces();
        setChessboard();
    }

    return (
        <View style={styles.container}>
            <View style={styles.chessboard}>
                {board}
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={() => onRandomPressed()}>
                    <Text style={styles.btnText}>Random</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => onResetPressed()}>
                    <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chessboard;