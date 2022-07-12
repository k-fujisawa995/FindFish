import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import * as PropTypes from "prop-types";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function DatePickerComponent(props) {
  const { value, title, placeholder, setFieldValue, setFieldTouched } = props;
  const [active, setActive] = useState(false);

  const open = () => {
    setActive(true);
  };

  const dismiss = () => {
    setActive(false);
    setFieldTouched(true);
  };

  return (
    <>
      <View style={styles.container}>
        <DateTimePickerModal
          isVisible={active}
          date={
            value ||
            moment()
              .startOf("day")
              .toDate()
          }
          onConfirm={date => {
            dismiss();
            setFieldValue(moment(date).startOf('day').toDate());
          }}
          headerTextIOS={title}
          cancelTextIOS="キャンセル"
          confirmTextIOS="OK"
          onCancel={dismiss}
          locale="ja"
        />
        <Button
          title={value ? moment(value).format("YYYY年MM月DD日") : placeholder}
          onPress={open}
        />
      </View>
    </>
  );
}

DatePickerComponent.defaultProps = {
  title: "日付を選択してください",
  placeholder: "日付を選択してください"
};

DatePickerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 10
  },
});

export default DatePickerComponent;