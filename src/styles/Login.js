import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'green',
  },
 
  button:{
    height: hp('7%'), 
    width: wp('70%'),
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 60
  },
  buttonCad:{
    height: hp('7%'), 
    width: wp('70%'),
    borderRadius: 10,
    backgroundColor: 'white',

  },

  input:{
    width: hp('50%'),
    marginTop: 70,
  },
  inputSenha:{
    width: hp('50%'),
    marginBottom: 20,
  },
  circle: {
    height: 200, 
    width: 200,    
    borderRadius: 100,  
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset:{
      width: 0,
      height: 2,
  }
} 

});

export default styles;