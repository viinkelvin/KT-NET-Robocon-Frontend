import React, {Component, PropTypes} from 'react';
import { Platform, StyleSheet, Text, Image, Button, View, TextInput } from 'react-native';
import api from '../../lib/api';
import ImageButton from '../../shared/ImageButton';

export default class MedicineScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    api.getMedicines("medicine")
    .then((res) => {
      this.setState({ data: res });
    })
    .catch(err => console.log(err, "error"));
  }

  renderImgBtn = () => {
    const result = [];
    this.state.data.map((item, idx) => {
      result.push(
        <ImageButton
          key={idx}
          source={require("../../images/img-placeholder.png")}
          text={item.medicine_name}
          styleBtn={styles.btnImg}
          styleImg={styles.image} />
      );
    });
    return result;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            style={styles.txtSearch} />
          <Button
            title="Submit"
            color="#007bff"
            onPress={() => console.log("not yet")}
          />
        </View>
        <View style={styles.imgContainer}>
          {this.renderImgBtn()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  txtSearch: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 6,
    paddingLeft: 15,
    marginRight: 10,
  },
  btnImg: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 4,
    margin: 10,
    width: 200,
    height: 175,
  },
  image: {
    width: 100,
    height: 120,
  }
});