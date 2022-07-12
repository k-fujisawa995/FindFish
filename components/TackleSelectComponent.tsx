import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

 class TackleSelectComponent extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 30 }}>
        <Text style={{ marginVertical: 20, marginLeft: 30 }}>仕掛け</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'サビキ', value: 'サビキ' },
            { label: 'ふかせ', value: 'ふかせ' }
          ]}
          style={styles}
          placeholder={{ label: '選択してください', value: '' }}
        />
      </View>
    );
  }
}

export default TackleSelectComponent;

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#1e3f4f',
    borderRadius: 4,
    color: '#1e3f4f',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 300,
    marginLeft: 30
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#1e3f4f',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 300,
    marginLeft: 30,
    backgroundColor:'#eee'
  },
});