import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {View} from 'react-native';
import {RF} from '../../shared/theme/responsive';
import {COLORS} from '../../shared/theme/colors';
import FastImage from 'react-native-fast-image';
import {arrowLeftIcon} from '../../../assets/icons';

const CustomerScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.GREEN, flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={{alignItems: 'flex-end', marginEnd: RF(20)}}>
        <View style={styles.toolbarView}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <FastImage
              source={arrowLeftIcon}
              style={{width: RF(17), height: RF(9.7)}}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomerScreen;
