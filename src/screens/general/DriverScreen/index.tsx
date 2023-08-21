import React, {useState} from 'react';
import {Pressable, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {arrowChevronIcon, hammburgerIcon} from '../../../assets/icons';
import CustomersCards from './data';
import {styles} from './styles';

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
          <FastImage
            source={hammburgerIcon}
            style={styles.arrowLeftIconImage}
          />
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
