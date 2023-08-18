import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';
import {RF} from '../../theme/responsive';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    
    backgroundColor:COLORS.WHITE,
    borderRadius: 20,
    padding: 35,
    
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: RF(15),
      height: RF(2),
      
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 10,
     backgroundColor:COLORS.GREEN,
    padding: 10,
    
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor:COLORS.GREEN,
    
  },
  buttonClose: {
    backgroundColor:COLORS.Purple,
    marginHorizontal:RF(8),
    padding: 10,
    borderRadius: 10,
    elevation: 2,
     
  },
 
  textStyle: {
    color:COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
