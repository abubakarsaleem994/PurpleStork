import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {arrowChevronIcon, arrowLeftIcon} from '../../../assets/icons';
import {styles} from './styles';
import CustomersCards from './data';
import {RF} from '../../shared/theme/responsive';
import {COLORS} from '../../shared/theme/colors';

const DriverScreen = ({navigation}: any) => {
  const [isPending, setIsPending] = useState(true);
  
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.coustomer}>
        <Text style={styles.coustomerText}>Customers</Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FastImage source={arrowLeftIcon} style={styles.arrowLeftIconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.peddingView}>
        <Pressable
          onPress={() => {
            setIsPending(true);
          }}
          style={
            isPending ? styles.selectedBtnView : styles.nonSelectedBtnView
          }>
          <Text
            style={
              isPending ? styles.selectedBtnText : styles.nonSelectedBtnText
            }>
            Pending
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setIsPending(false);
          }}
          style={
            isPending ? styles.nonSelectedBtnView : styles.selectedBtnView
          }>
          <Text
            style={
              isPending ? styles.nonSelectedBtnText : styles.selectedBtnText
            }>
            Completed
          </Text>
           
        </Pressable>
      </View>
      {isPending ? (
        <>
          <View style={styles.showText}>
            <Text style={styles.textColor}>Oct 28 - Nov 03</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textColor}>Last 14 days</Text>
              <FastImage source={arrowChevronIcon} style={styles.image} />
            </View>
          </View>
          <CustomersCards completed={false} />
        </>
      ) : (
        <>
          <View style={styles.showText}>
            <Text style={styles.textColor}>Oct 12 - Nov 03</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textColor}>Last 14 days</Text>
              <FastImage source={arrowChevronIcon} style={styles.image} />
            </View>
          </View>
          <CustomersCards completed={true} />
        </>
      )}
    </SafeAreaView>
  );
};

export default DriverScreen;
