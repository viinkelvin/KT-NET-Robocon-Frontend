import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Alert, TextInput } from 'react-native';
// import { strings } from './localization';
import api from '../../lib/api';
import ImageButton from '../../shared/ImageButton';
import { localizationStrings } from './localization';


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

	render() {
    const { data } = this.state;
		return(
			<View style={styles.container}>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 80}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={[data.physical_measurement ? data.physical_measurement : '', 'H2']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text} />
              <Col data={tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>
 
          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>
          </TableWrapper>
        </Table>

				<Text style={styles.title}>{this.state.strings.title}</Text>
				<View style={styles.resultContainer}>
			    <View style={styles.text}>
            <Text>{data.last_name ? data.last_name.text : '' } : {data.last_name ? data.last_name.value : '' }</Text>
            <Text>{data.first_name ? data.first_name.text : '' } : {data.first_name ? data.first_name.value : '' }</Text>

            <Text>{data.user_code ? data.user_code.text : '' } : {data.user_code ? data.user_code.value : '' }</Text>
            <Text>{data.address ? data.address.text : '' } : {data.address ? data.address.value : '' }</Text>

          </View>
          <View>
            <Text>{data.physical_measurement ? data.physical_measurement : '' }</Text>
            <View>
              <Text>{data.height ? data.height.text : '' } : {data.height ? data.height.value : '' } cm</Text>
              <Text>{data.body_weight ? data.body_weight.text : '' } : {data.body_weight ? data.body_weight.value : '' } kg</Text>
              <Text>{data.abdominal_circumference ? data.abdominal_circumference.text : '' } : {data.abdominal_circumference ? data.abdominal_circumference.value : '' } </Text>
              <Text>{data.actual_measurement ? data.actual_measurement : ''}</Text>
              <Text>{data.self_measurement ? data.self_measurement : ''}</Text>
              <Text>{data.self_assessment ? data.self_assessment : ''}</Text>
              <Text>BMI : {data.bmi ? data.bmi :''}</Text>
            </View>
          </View>

          <View>
            <Text>{data.blood_pressure_measurement ? data.blood_pressure_measurement : '' }</Text>
            <View>
              <Text>{data.systole ? data.systole.text : '' } : {data.systole ? data.systole.value : '' } mmHg</Text>
              <Text>{data.diastolic_phase ? data.diastolic_phase.text : '' } : {data.diastolic_phase ? data.diastolic_phase.value : '' } mmHg</Text>
              <Text>{data.number_of_measurements ? data.number_of_measurements.text : '' } : {data.number_of_measurements ? data.number_of_measurements.value : '' } </Text>
            </View>
          </View>

          <View>
            <Text>{data.blood_pressure_measurement ? data.blood_pressure_measurement : '' }</Text>
            <View>
              <Text>{data.urinalysis ? data.urinalysis.text : '' } : {data.urinalysis ? data.urinalysis.value : '' }</Text>
              <Text>{data.protein ? data.protein.text : '' } : {data.protein ? data.protein.value : '' }</Text>
              <Text>{data.sugar ? data.sugar.text : '' } : {data.sugar ? data.sugar.value : '' } </Text>
            </View>
          </View>

          <View>
            <Text>{data.blood_lipids ? data.blood_lipids : '' }</Text>
            <View>
              <Text>{data.neutral_fat ? data.neutral_fat.text : '' } : {data.neutral_fat ? data.neutral_fat.value : '' } mg/dl</Text>
              <Text>{data.hdl_cholesterol ? data.hdl_cholesterol.text : '' } : {data.hdl_cholesterol ? data.hdl_cholesterol.value : '' } mg/dl</Text>
              <Text>{data.ldl_cholesterol ? data.ldl_cholesterol.text : '' } : {data.ldl_cholesterol ? data.ldl_cholesterol.value : '' } mg/dl</Text>
            </View>
          </View>

          <View>
            <Text>{data.liver_function ? data.liver_function : '' }</Text>
            <View>
              <Text>GOT : {data.got ? data.got.value : '' } IU/I</Text>
              <Text>GPT : {data.gpt ? data.gpt.value : '' } IU/I</Text>
              <Text>Y-GPT : {data.y_gpt ? data.y_gpt.value : '' } IU/I</Text>
            </View>
          </View>

          <View>
            <Text>{data.diabetes_mellitus ? data.diabetes_mellitus : '' }</Text>
            <View>
              <Text>{data.blood_glucose_level ? data.blood_glucose_level.text : '' } : {data.blood_glucose_level ? data.blood_glucose_level.value : '' } mg/dl</Text>
              <Text>glucose level type : {data.blood_glucose_level_type ? data.blood_glucose_level_type : '' }</Text>
              <Text>{data.hba1c ? data.hba1c.text : '' } {data.hba1c ? data.hba1c.value : '' } %</Text>
            </View>
          </View>

					<View>
						<ImageButton
	            source={require('../../images/main-menu/check-blood-pressure.png')}
	            styleBtn={[styles.btnImg, {marginTop: 0}]}
	            styleImg={styles.image} />
            <ImageButton
	            source={require('../../images/main-menu/check-blood-pressure.png')}
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
  title: {
    fontSize: 30,
    marginBottom: 15,
  },
  resultContainer: {
    flexDirection: 'row'
  },
  textarea: {
  	flex: 1,
  	height: 500,
  	borderWidth: 1,
  	borderColor: "black",
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
  text:{
    fontSize: 15,
  }
});