/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// // ex1) inline styling
// class App extends Component {
//   render() {
//     return (
//       <View style={{
//         backgroundColor: 'green',
//         height: '100%',
//         marginTop: 10, // gap with external component
//         paddingTop:50  // gap with internal component
//       }}>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//         <View>
//           <Text>Hello world</Text>
//         </View>
//       </View>
//     )
//   }
// }

// ex2) stylesheet component
class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Text>Hello world</Text>
        </View>
        <View>
          <Text>Hello world</Text>
        </View>
        <View>
          <Text>Hello world</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    flex: 1,
    alignItems: 'center',     // horizontal alignment
    justifyContent: 'center', // vertical alignment
    marginTop: 10,            // gap with external component
    paddingTop:50             // gap with internal component
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})

export default App;