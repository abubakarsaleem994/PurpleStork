import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {arrowLeftIcon, chevronIcon} from '../../../assets/icons';
import {COLORS} from '../../shared/theme/colors';
import {RF} from '../../shared/theme/responsive';
import {FONTS} from '../../shared/theme/fonts';

import CustomDrawer from '../../shared/components/customDrawer';
import {styles} from './styles';

const CustomerScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.WHITE, flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          width: RF(300),
          height: RF(38),
          marginTop: RF(59),
        }}>
        <Text
          style={{
            color: COLORS.Dark,
            fontFamily: FONTS.BOLD,
            fontSize: RF(25),
          }}>
          Customers
        </Text>

        <TouchableOpacity>
          <FastImage
            source={arrowLeftIcon}
            style={{width: RF(21), height: RF(12), marginTop: RF(10)}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: COLORS.Soft_Silver,
          flexDirection: 'row',
          width: RF(330),
          height: RF(48),
          borderRadius: RF(40),
          marginLeft: RF(12),
          marginTop: RF(20),
        }}>
        <View
          style={{
            backgroundColor: COLORS.WHITE,
            borderRadius: RF(40),
            height: RF(48),
            width: RF(165),
            marginLeft: RF(5),
            marginTop: RF(3),

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: COLORS.Purple}}>Pending</Text>
        </View>
        <Text
          style={{
            color: COLORS.BLACK,
            alignSelf: 'center',
            marginLeft: RF(40),
          }}>
          Completed
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: RF(35),
          height: RF(18),
          margin: RF(22),
          
        }}>
        <Text style={{color: COLORS.BLACK}}>Oct 28 - Nov 03</Text>

        <Text style={{color: COLORS.BLACK}}>Last 14 days</Text>
      </View>

     <View style={{backgroundColor:'blue',width:330,height:72,margin:22}}>
      <View style={{borderRadius:2,width:20,height:20,backgroundColor:COLORS.Grey}}>
        
      </View>
      </View>
     
      <Button title="SwipeDrawer" onPress={() => navigation.openDrawer()} />
    </SafeAreaView>
  );
};

export default CustomerScreen;
