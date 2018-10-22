import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert, TextInput } from 'react-native';
// import { strings } from './localization';
import api from '../../lib/api';
import ImageButton from '../../shared/ImageButton';
import Header from '../../shared/Header';
import { localizationStrings } from './localization';
import { Container, Content, Card, CardItem, Body } from "native-base";
import Dimensions from 'Dimensions';

export default class CheckResultScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      strings: {},
      data: {},
    }
  }

  componentWillMount() {
    this.setState({ strings: localizationStrings() });
    api.getResult("user/1234567890")
    .then((res) => {
      this.setState({ data: res });
      console.log(res, 'api res');
    })
    .catch(err => console.log(err, "error"));
  }

  _renderProfile(data) {
    return(
      <View style={styles.table}>
        <View style={styles.tr}>
          <View style={styles.tdText}><Text>{data.last_name ? data.last_name.text : '' }</Text></View>
          <View style={styles.tdValue}><Text>: {data.last_name ? data.last_name.value : '' }</Text></View>
        </View>
        <View style={styles.tr}>
          <View style={styles.tdText}><Text>{data.first_name ? data.first_name.text : '' }</Text></View>
          <View style={styles.tdValue}><Text>: {data.first_name ? data.first_name.value : '' }</Text></View>
        </View>
        <View style={styles.tr}>
          <View style={styles.tdText}><Text>{data.user_code ? data.user_code.text : '' }</Text></View>
          <View style={styles.tdValue}><Text>: {data.user_code ? data.user_code.value : '' }</Text></View>
        </View>
        <View style={styles.tr}>
          <View style={styles.tdText}><Text>{data.address ? data.address.text : '' }</Text></View>
          <View style={styles.tdValue}><Text>: {data.address ? data.address.value : '' }</Text></View>
        </View>
      </View>
    );
  }

  _renderPhsycal(data) {
    return(
      <View style={[styles.table, {flexDirection: 'row'}]}>
        <View style={styles.col1}><Text>{data.physical_measurement ? data.physical_measurement : '' }</Text></View>
        <View>
          <View style={styles.col2row}><Text>{data.height ? data.height.text : '' }</Text></View>
          <View style={styles.col2row}><Text>{data.body_weight ? data.body_weight.text : '' }</Text></View>
          <View style={[styles.col2row, { height: 60 }]}><Text>{data.abdominal_circumference ? data.abdominal_circumference.text : '' }</Text></View>
          <View style={styles.col2row}><Text>BMI</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.col3row}><Text>: {data.height ? data.height.value : '' } cm</Text></View>
          <View style={styles.col3row}><Text>: {data.body_weight ? data.body_weight.value : '' } Kg</Text></View>
          <View style={styles.col3row}><Text>: {data.abdominal_circumference_value ? data.abdominal_circumference_value : "" } cm</Text></View>
          <View style={styles.col3row}><Text>: {data.abdominal_circumference ? this.getTextPhsycal(data) : '' }</Text></View>
          <View style={styles.col3row}><Text>: {data.bmi ? data.bmi :''}</Text></View>
        </View>
      </View>
    );
  }

  getTextPhsycal(data) {
    if (data.abdominal_circumference.value == 1) {
      return data.actual_measurement;
    } else if (data.abdominal_circumference.value == 2) {
      return data.self_measurement;
    } else {
      return data.self_assessment
    }
  }

  _renderBloodPreasure(data) {
    return(
      <View style={[styles.table, {flexDirection: 'row'}]}>
        <View style={styles.col1}><Text>{data.blood_pressure_measurement ? data.blood_pressure_measurement : '' }</Text></View>
        <View>
          <View style={styles.col2row}><Text>{data.systole ? data.systole.text : '' }</Text></View>
          <View style={styles.col2row}><Text>{data.diastolic_phase ? data.diastolic_phase.text : '' }</Text></View>
          <View style={styles.col2row}><Text>{data.number_of_measurements ? data.number_of_measurements.text : '' }</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.col3row}><Text>: {data.systole ? data.systole.value : '' } mmHg</Text></View>
          <View style={styles.col3row}><Text>: {data.diastolic_phase ? data.diastolic_phase.value : '' } mmHg</Text></View>
          <View style={styles.col3row}><Text>: {data.number_of_measurements ? data.number_of_measurements.value : '' } X</Text></View>
        </View>
      </View>
    );
  }

 _renderUrinalysis(data) {
    return(
      <View style={[styles.table, {flexDirection: 'row'}]}>
        <View style={styles.col1}><Text>{data.urinalysis ? data.urinalysis : '' }</Text></View>
        <View>
          <View style={styles.col2row}><Text>{data.protein ? data.protein.text : '' }</Text></View>
          <View style={styles.col2row}><Text>{data.sugar ? data.sugar.text : '' }</Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.col3row}><Text>: {data.protein ? data.protein.value : '' } </Text></View>
          <View style={styles.col3row}><Text>: {data.sugar ? data.sugar.value : '' } </Text></View>
        </View>
      </View>
    );
  }

  _renderBloodLipids(data) {
    return(
      <View style={[styles.table, {flexDirection: 'row'}]}>
        <View style={styles.col1}><Text>{data.blood_lipids ? data.blood_lipids : '' }</Text></View>
        <View>
          <View style={styles.col2row}><Text>{data.neutral_fat ? data.neutral_fat.text : '' }</Text></View>
          <View style={styles.col2row}><Text>{data.hdl_cholesterol ? data.hdl_cholesterol.text : '' } </Text></View>
          <View style={styles.col2row}><Text>{data.ldl_cholesterol ? data.ldl_cholesterol.text : '' } </Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.col3row}><Text>: {data.neutral_fat ? data.neutral_fat.value : '' } mg/dl</Text></View>
          <View style={styles.col3row}><Text>: {data.hdl_cholesterol ? data.hdl_cholesterol.value : '' } mg/dl</Text></View>
          <View style={styles.col3row}><Text>: {data.ldl_cholesterol ? data.ldl_cholesterol.value : '' } mg/dl</Text></View>
        </View>
      </View>
    );
  }

  _renderLiver(data) {
    return(
      <View style={[styles.table, {flexDirection: 'row'}]}>
        <View style={styles.col1}><Text>{data.liver_function ? data.liver_function : '' }</Text></View>
        <View>
          <View style={styles.col2row}><Text>GOT</Text></View>
          <View style={styles.col2row}><Text>GPT</Text></View>
          <View style={styles.col2row}><Text>Y-GPT </Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.col3row}><Text>: {data.got ? data.got : '' } IU/I</Text></View>
          <View style={styles.col3row}><Text>: {data.gpt ? data.gpt : '' } IU/I</Text></View>
          <View style={styles.col3row}><Text>: {data.y_gpt ? data.y_gpt : '' } IU/I</Text></View>
        </View>
      </View>
    );
  }

  _renderDiabetes(data) {
    return(
      <View style={[styles.table, {flexDirection: 'row'}]}>
        <View style={styles.col1}><Text>{data.diabetes_mellitus ? data.diabetes_mellitus : '' }</Text></View>
        <View>
         <View style={styles.col2row}><Text>{data.blood_glucose_level ? data.blood_glucose_level.text : '' }</Text></View>
          <View style={styles.col2row}><Text>{data.hba1c ? data.hba1c.text : '' } </Text></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.col3row}><Text>: {data.blood_glucose_level ? data.blood_glucose_level.value : '' } mg/dl</Text></View>
          <View style={styles.col3row}><Text>: {data.hba1c ? data.hba1c.value : '' } %</Text></View>
        </View>
      </View>
    );
  }


	render() {
    const {width, height} = Dimensions.get('window');
    const { data, strings } = this.state;
    const dataContainerHeight = height - 125;

		return(
			<View style={styles.container}>
        <Header
          title={strings.title}
          back={() => this.props.navigation.goBack()} />
				<View style={styles.content}>
			    <View style={[styles.dataContainer, {height: dataContainerHeight}]}>
            <Content padder>
              <Card>
                <CardItem header bordered>
                  {this._renderProfile(data)}
                </CardItem>
                <CardItem style={{ paddingBottom: 0 }}>
                  {this._renderPhsycal(data)}
                </CardItem>
                <CardItem style={{ paddingTop: 0, paddingBottom: 0 }} >
                  {this._renderBloodPreasure(data)}
                </CardItem>
                <CardItem style={{ paddingTop: 0, paddingBottom: 0 }} >
                  {this._renderUrinalysis(data)}
                </CardItem>
                <CardItem style={{ paddingTop: 0, paddingBottom: 0 }} >
                  {this._renderBloodLipids(data)}
                </CardItem>
                <CardItem style={{ paddingTop: 0, paddingBottom: 0 }} >
                  {this._renderLiver(data)}
                </CardItem>
                <CardItem style={{ paddingTop: 0, paddingBottom: 0 }} >
                  {this._renderDiabetes(data)}
                </CardItem>
              </Card>
            </Content>
          </View>
					<View>
						<ImageButton
	            source={require('../../images/check-result/Translate.png')}
	            styleBtn={[styles.btnImg, {marginTop: 0}]}
	            styleImg={styles.image} />
            <ImageButton
	            source={require('../../images/check-result/speak.png')}
	            styleBtn={styles.btnImg}
	            styleImg={styles.image} />
					</View>
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
  content: {
    flexDirection: 'row'
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
  },
  btnImg: {
    margin: 10,
    marginRight: 0,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },
  image: {
    width: 50,
    height: 50,    
  },
  table: {
    flex: 1,
  },
  tr: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tdText: {
    width: 150,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  tdValue: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  col1: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
  },
  col2row: {
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
    height: 30,
  },
  col3row: {
    flex: 1,
    padding: 3,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
  }
});