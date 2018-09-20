import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'

import { MonoText, StyledOpenSansText } from '../components/StyledText'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}><StyledOpenSansText>Get started by opening</StyledOpenSansText></Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  // homeScreenFilename: {
  // marginVertical: 7,
  // },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(0,0,0,0.4)',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  // test: {// bottom in absolute with Platform select
  // position: 'absolute',
  // bottom: 0,
  // left: 0,
  // right: 0,
  // ...Platform.select({
  // ios: {
  // shadowColor: 'black',
  // shadowOffset: { height: -3 },
  // shadowOpacity: 0.1,
  // shadowRadius: 3,
  // },
  // android: {
  // elevation: 20,
  // },
  // }),
  // alignItems: 'center',
  // backgroundColor: '#fbfbfb',
  // paddingVertical: 20,
  // },
})
