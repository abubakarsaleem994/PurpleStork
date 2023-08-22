import React from 'react';
import {Pressable, StatusBar, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../../shared/theme/colors';
import {RF} from '../../../shared/theme/responsive';
import {styles} from './styles';
import {hammburgerIcon} from '../../../assets/icons';

const CustomerScreen = ({navigation}: any) => {
  return (
    <>
      <SafeAreaView style={styles.customerstyles}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={styles.toolbarView}>
          <FastImage
            source={hammburgerIcon}
            style={{width: RF(17), height: RF(17)}}
          />
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default CustomerScreen;
