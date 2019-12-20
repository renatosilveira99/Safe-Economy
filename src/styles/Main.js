import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: wp('100%'),
  },
  button: {
    backgroundColor: '#32CD32',
    width: wp('90%'),
    height: hp('7%'),
    marginTop: hp('2%'),
  },

});

export default styles;