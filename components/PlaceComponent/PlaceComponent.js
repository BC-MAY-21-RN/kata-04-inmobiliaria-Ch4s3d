import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export class PlaceComponent extends Component {
  constructor(props) {
    super(props);
    this.data = [];
  }

  render() {
    return (
      <View>
        <Text>Component</Text>
      </View>
    );
  }
}
