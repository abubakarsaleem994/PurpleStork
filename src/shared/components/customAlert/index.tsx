import React, {useState} from 'react';
import {Alert, Modal, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

interface CustomAlertProps {
  modalVisible: boolean;
  setModalVisible: (val: boolean) => void;
  onYesPress: any;
}

const CustomAlert = ({
  modalVisible,
  setModalVisible,
  onYesPress,
}: CustomAlertProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Do you want Complete Task</Text>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                onYesPress();
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
