import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/colors";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    chessboard: {
        borderColor: Colors.BLACK,
        borderWidth: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: width,
        backgroundColor: Colors.BLACK
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    btn: {
        width: '40%',
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: Colors.BLACK
    },
    btnText: {
        alignSelf: 'center',
        color: Colors.WHITE,
        fontWeight: '700'
    }
});

export default styles;