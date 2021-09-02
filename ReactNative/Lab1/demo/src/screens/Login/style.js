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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    color: '#606060',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: '10%',
    color: '#DDD',
  },
  loginOptionsPanel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '10%',
    // height: '20',
  },
  loginOption: {
    backgroundColor: '#1D1D1D',
    paddingHorizontal: '15%',
    paddingVertical: '5%',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 15,
  },
  form: {},
  formControlTitle: {
    marginTop: 10,
    marginBottom: 5,
    color: '#EEE',
  },
  formControl: {
    paddingVertical: '5%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#333',
    backgroundColor: '#1D1D1D',
    paddingStart: 10,
    color: 'white',
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
});

export {styles};
