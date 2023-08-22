import {StyleSheet} from 'react-native';
import {COLORS} from '../../../shared/theme/colors';
import {FONTS} from '../../../shared/theme/fonts';
import {RF} from '../../../shared/theme/responsive';

export const styles = StyleSheet.create({
  main: {backgroundColor: COLORS.WHITE, flex: 1},
  coustomer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: RF(38),
    marginTop: RF(24),
    marginHorizontal: RF(16),
  },
  coustomerText: {
    color: COLORS.Dark,
    fontFamily: FONTS.BOLD,
    fontSize: RF(25),
  },
  arrowLeftIconImage: {width: RF(21), height: RF(12), marginTop: RF(10)},
  peddingView: {
    backgroundColor: COLORS.Soft_Silver,
    flexDirection: 'row',
    borderRadius: RF(40),
    marginTop: RF(20),
    marginHorizontal: RF(16),
    marginBottom: RF(35),
  },
  selectedBtnView: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RF(40),
    height: RF(42),
    margin: RF(4),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  nonSelectedBtnView: {
    height: RF(48),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBtnText: {
    color: COLORS.Purple,
  },
  nonSelectedBtnText: {
    color: COLORS.BLACK,
  },

  touchableOpacityImage: {
    width: RF(20),
    height: RF(20),
  },

  showText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RF(5),
    marginBottom: RF(5),
    marginHorizontal: RF(16),
  },
  textColor: {
    color: COLORS.BLACK,
  },
  image: {
    width: RF(18),
    height: RF(18),
  },
  // CustomAlert
  view: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
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
  container: {flex: 1, paddingBottom: 20},
});
