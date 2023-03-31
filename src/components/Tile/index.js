import React from 'react';
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native';
import Colors from '../../utils/colors';
const { width } = Dimensions.get('window');
const TABLE_WIDTH = (width - 30) / 8;

const Tile = ({ num, horizontalAxis, index1, index2, img }) => {
    if (num % 2 == 0) {
        return (
            <View style={styles.chessboardTileBlack}>
                {index2 == 0 && <Text style={styles.leftVerticalAxis}>{index1 + 1}</Text>}
                {index2 == 7 && <Text style={styles.rightVerticalAxis}>{index1 + 1}</Text>}
                {index1 == 0 && <Text style={styles.topHorizontalAxis}>{horizontalAxis[index2].toUpperCase()}</Text>}
                {index1 == 7 && <Text style={styles.bottomHorizontalAxis}>{horizontalAxis[index2].toUpperCase()}</Text>}
                {img && img != '' ? <Image source={img} style={styles.pieceImg} /> : null}
            </View>)
    } else {
        return (
            <View style={styles.chessboardTileWhite}>
                {index2 == 0 && <Text style={styles.leftVerticalAxis}>{index1 + 1}</Text>}
                {index2 == 7 && <Text style={styles.rightVerticalAxis}>{index1 + 1}</Text>}
                {index1 == 0 && <Text style={styles.topHorizontalAxis}>{horizontalAxis[index2].toUpperCase()}</Text>}
                {index1 == 7 && <Text style={styles.bottomHorizontalAxis}>{horizontalAxis[index2].toUpperCase()}</Text>}
                {img && img != '' ? <Image source={img} style={styles.pieceImg} /> : null}
            </View>)
    }
}

const styles = StyleSheet.create({
    chessboardTileWhite: {
        width: TABLE_WIDTH,
        height: TABLE_WIDTH,
        backgroundColor: Colors.WHITE
    },
    chessboardTileBlack: {
        width: TABLE_WIDTH,
        height: TABLE_WIDTH,
        backgroundColor: Colors.DARK_GRAY
    },
    leftVerticalAxis: {
        position: 'absolute',
        left: -10,
        top: TABLE_WIDTH / 3.5,
        color: Colors.WHITE,
        fontSize: 12,
        fontWeight: 'bold'
    },
    rightVerticalAxis: {
        position: 'absolute',
        right: -10,
        top: TABLE_WIDTH / 3.5,
        color: Colors.WHITE,
        fontSize: 12,
        fontWeight: 'bold'
    },
    topHorizontalAxis: {
        position: 'absolute',
        bottom: -15,
        left: TABLE_WIDTH / 2.5,
        color: Colors.WHITE,
        fontSize: 12,
        fontWeight: 'bold'
    },
    bottomHorizontalAxis: {
        position: 'absolute',
        top: -15,
        left: TABLE_WIDTH / 2.5,
        color: Colors.WHITE,
        fontSize: 12,
        fontWeight: 'bold'
    },
    pieceImg: {
        width: TABLE_WIDTH,
        height: TABLE_WIDTH
    }
})

export default Tile;
