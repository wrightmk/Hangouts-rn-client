import React from 'react';
import {View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {Button} from 'react-native-elements';

import {TextInputWithValidations} from '../../../commons';
import {createHangoutValidations} from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateHangoutForm';

const CreateHangoutForm = ({
  createHangout,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.redColor}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        raised
        fontFamily="montserrat"
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.blackBlueColor}
        title="Create Hangout"
        raised
        fontFamily="montserrat"
        disabled={invalid || submitting}
        onPress={handleSubmit(createHangout)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createHangout',
  validate: createHangoutValidations
})(CreateHangoutForm);
