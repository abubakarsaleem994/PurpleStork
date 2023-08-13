import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {arrowIcon, calendarIcon, logoIcon} from '../../../assets/icons';
import {COLORS} from '../../shared/theme/colors';
import {FONTS} from '../../shared/theme/fonts';
import {RF, WP} from '../../shared/theme/responsive';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const TermOfServices = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: RF(20),
          marginHorizontal: RF(20),
          width: WP(55),
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.arrowContainer}>
          <FastImage
            source={arrowIcon}
            resizeMode={FastImage.resizeMode.stretch}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <FastImage source={logoIcon} style={{width: RF(75), height: RF(40)}} />
      </View>
      <View
        style={{
          marginTop: RF(32),
          marginHorizontal: RF(20),
        }}>
        <Text
          style={{
            color: COLORS.BLACK,
            fontSize: RF(24),
            fontFamily: FONTS.BOLD,
          }}>
          Terms of Services
        </Text>
        <View
          style={{
            borderRadius: RF(8),
            height: RF(26),
            marginTop: RF(12),
            flexDirection: 'row',
            width: RF(123),
            backgroundColor: 'rgba(134,16,139,0.1)',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <FastImage
            source={calendarIcon}
            style={{width: RF(16), height: RF(16)}}
          />
          <Text
            style={{
              fontSize: RF(12),
              color: COLORS.BLACK,
              marginRight: RF(16),
            }}>
            Aug 11, 2023
          </Text>
        </View>

        <ScrollView style={{marginTop: RF(30)}}>
          <Text style={{color: COLORS.Grey, fontSize: RF(14)}}>
            Not everyone knows how to make a Privacy Policy agreement,
            especially with CCPA or GDPR or CalOPPA or PIPEDA or Australia's
            Privacy Act provisions. If you are not a lawyer or someone who is
            familiar to Privacy Policies, you will be clueless. Some people
            might even take advantage of you because of this. Some people may
            even extort money from you. These are some examples that we want to
            stop from happening to you. We will help you protect yourself by
            generating a Privacy Policy.Our Privacy Policy Generator can help
            you make sure that your business complies with the law. We are here
            to help you protect your business, yourself and your customers.Fill
            in the blank spaces below and we will create a personalized website
            Privacy Policy for your business. No account registration required.
            Simply generate & download a Privacy Policy in seconds!
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TermOfServices;
