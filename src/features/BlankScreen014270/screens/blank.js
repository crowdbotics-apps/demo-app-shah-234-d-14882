import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_4: "",
    DateTimePicker_6: new Date(""),
    TextInput_7: "",
    TextInput_19: ""
  }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Text>Sample text content</Text>
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_6}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_6: selectedDate })
        }
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <Text>Sample text content</Text>
      <View style={styles.View_9}>
        <View />
        <View />
      </View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <View style={styles.View_13}>
        <View />
        <View />
      </View>
      <View>
        <View />
        <View />
      </View>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_19}
        onChangeText={nextValue => this.setState({ TextInput_19: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  Text_5: {},
  DateTimePicker_6: {},
  TextInput_7: {},
  Text_8: {},
  View_9: { flexDirection: "row" },
  View_10: {},
  View_11: {},
  Button_12: {},
  View_13: { flexDirection: "row" },
  View_14: {},
  View_15: {},
  View_16: {},
  View_17: {},
  View_18: {},
  TextInput_19: {}
})
