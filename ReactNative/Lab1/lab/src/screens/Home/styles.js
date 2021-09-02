import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    justifyContent: 'center',
    color: '#DDD',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30,
  },
  backBtn: {
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
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
});

export {styles};
