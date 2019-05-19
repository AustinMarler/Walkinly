import React, { Component } from "react";
import { View, Text, AsyncStorage, StyleSheet, ImageBackground } from "react-native";
import { Button } from 'react-native-elements';

export default class UserSettingsScreen extends Component {
  static navigationOptions = {
    header: null
  }

  handleLogout = async () => {
    const { navigation } = this.props;

    await AsyncStorage.removeItem('userToken');
    navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/grady11.jpg')}
        style={styles.img}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
          <Text style={styles.headerText}>
            Change Settings
        </Text>

          <Button
            style={{
              marginBottom: 20,
              shadowColor: "#fff",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6,
            }}
            buttonStyle={{
              height: 50,
              width: 150,
              backgroundColor: '#e2e4e9',
              /* border: '#e2e4e9' */
            }}
            titleStyle={{ color: '#767689', fontSize: 20 }}

            type='solid'
            title='Logout'
            onPress={() => this.handleLogout()}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
})