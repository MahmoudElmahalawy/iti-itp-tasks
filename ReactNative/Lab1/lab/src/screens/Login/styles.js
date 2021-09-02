import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#161616',
    justifyContent: 'center',
    color: '#DDD',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30,
  },
  backBtn: {
    // backgroundColor: 'transparent',
    padding: 10,
    paddingRight: 15,
    marginRight: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#333',
  },
  paragraph: {
    color: '#606060',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    // marginBottom: '10%',
    color: '#DDD',
  },
  loginOptionsPanel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '8%',
    // height: '20',
  },
  loginOption: {
    backgroundColor: '#1D1D1D',
    paddingHorizontal: '20%',
    // paddingVertical: '5%',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 15,
    justifyContent: 'center',
  },
  form: {},
  formControlTitle: {
    marginTop: 15,
    // marginBottom: 5,
    color: '#EEE',
  },
  formControl: {
    // paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#333',
    backgroundColor: '#1D1D1D',
    paddingStart: 10,
    color: 'white',
    marginTop: 10,
  },
  formSubmit: {
    marginVertical: '10%',
    paddingVertical: '5%',
    backgroundColor: '#BC1BC1',
    borderRadius: 15,
    paddingStart: 10,
    textAlign: 'center',
  },
  formHaveAccBtn: {
    marginStart: 5,
  },
  formLabel: {
    color: '#EEE',
  },
  passwordViewIco: {
    position: 'absolute',
    right: 20,
    top: 55,
  },
});

export {styles};
