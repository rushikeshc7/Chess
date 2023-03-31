import React, { LogBox, View } from 'react-native';
import Chessboard from './src/components/Chessboard';
LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Chessboard />
    </View>
  )
}

export default App;