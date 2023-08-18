import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {RF} from '../../theme/responsive';
import {styles} from './styles';
import FastImage from 'react-native-fast-image';
import {checkIcon, successIcon} from '../../../../assets/icons';
import { ScrollView } from 'react-native-gesture-handler';

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
      <Pressable
        onPress={onpress}
        style={
          !completed
            ? styles.nonSelectedcheckBoxView
            : styles.selectedcheckBoxView
        }>
        {completed && (
          <FastImage
            source={checkIcon}
            style={{width: RF(13), height: RF(11), marginBottom: RF(1)}}
          />
        )}
      </Pressable>
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
