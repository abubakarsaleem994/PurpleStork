import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme/colors';
import {RF} from '../../shared/theme/responsive';

export const styles = StyleSheet.create({
  textColor: {
    color: COLORS.BLACK,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  toolbarView: {
    backgroundColor: COLORS.WHITE,
   // marginTop: RF(15),
    borderRadius: 180,
    width: RF(36),
    height: RF(36),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
