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
  view: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    // flex: 1,
    backgroundColor: COLORS.Grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: COLORS.WHITE,
    height: RF(100),
    // width: RF(300),
    marginHorizontal: RF(50),
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(10),
  },
});
