import React, {Component, PropTypes} from 'react';
import { Platform, StyleSheet, Text, Image, Button, View, TextInput } from 'react-native';
import api from '../../lib/api';
import ImageButton from '../../shared/ImageButton';

export default class MedicineScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          text: "Blood Pressure",
          source: "https://image.ibb.co/h8O1d0/check-blood-pressure.png",
          navigate: '',
        },
        {
          id: 2,
          text: "Guide",
          source: 'https://image.ibb.co/gQMbBL/room-guide.png',
          navigate: '',
        },
        {
          id: 3,
          text: "Statistics",
          source: "https://image.ibb.co/js1bBL/graph.png",
          navigate: '',
        },
        {
          id: 4,
          text: "Medicine",
          source: "https://image.ibb.co/cNCirL/drugs.png",
          navigate: '',
        },
        {
          id: 5,
          text: "Receptionist",
          source: "https://image.ibb.co/f5AxJ0/registration.png",
          navigate: '',
        },
        {
          id: 6,
          text: "Check Result",
          source: "https://image.ibb.co/ePt6BL/result.png",
          navigate: '',
        }
      ],
    };
  }

  renderImgBtn = () => {
    const result = [];
    this.state.data.map((item, idx) => {
      result.push(
        <ImageButton
          key={idx}
          source={{uri: item.source}}
          text={item.text}
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
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 120,
  }
});