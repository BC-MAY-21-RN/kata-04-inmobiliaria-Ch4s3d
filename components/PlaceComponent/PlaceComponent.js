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
      <View style={styles.container}>
        <View style={styles.FavoriteButton}></View>
        <View style={styles.ImageContainer}>
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
          <View style={styles.StarContainer}>
            <Text style={styles.StarContainerText}>4.7</Text>
          </View>
        </View>
        <View style={styles.Right}>
          <Text>Title</Text>
          <Text>Ubication</Text>
          <View style={styles.Row}>
            <Text>3</Text>
            <Text>2</Text>
            <Text>230 ft</Text>
          </View>
          <Text>Price</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E8F8FF',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    position: 'relative',
  },
  FavoriteButton: {
    width: 25,
    height: 25,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 10,
    right: 15,
    borderRadius: 25 / 2,
  },
  ImageContainer: {
    width: 75,
    height: 75,
    backgroundColor: 'black',
    marginRight: 10,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  Right: {
    width: '75%',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  StarContainer: {
    backgroundColor: '#F2D785',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  StarContainerText: {
    fontSize: 8,
  },
});
