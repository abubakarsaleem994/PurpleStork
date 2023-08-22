import React from 'react';
import {Text, View} from 'react-native';
import {RF} from '../../theme/responsive';
import CustomCheckbox from '../customCheckbox';
import {styles} from './styles';

const CustomerCard = ({
  id,
  name,
  phone,
  date,
  completed,
  onpress,
}: {
  id: number;
  name: string;
  phone: string;
  date: string;
  completed: boolean;
  onpress: () => void;
}) => {
  return (
    <View style={styles.mainView}>
      <CustomCheckbox isChecked={completed} onPress={onpress} containerStyle={styles.checkboxContainer}/>
      <View style={styles.textView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.phoneText}>{phone}</Text>
      </View>
      <View style={{marginTop: RF(25), marginRight: RF(15)}}>
        <Text style={styles.showdate}>{date}</Text>
      </View>
    </View>
  );
};

export default CustomerCard;
