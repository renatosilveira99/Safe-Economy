import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#32CD32',
    width: wp('90%'),
    height: hp('7%'),
    marginTop: hp('2%'),
  },
  button1: {
    backgroundColor: 'red',
    width: wp('90%'),
    height: hp('7%'),
    marginTop: hp('2%'),
  },
  input: {
    width: wp('100%'),
  }

});

export default styles;