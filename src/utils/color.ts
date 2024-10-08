import {StyleSheet} from 'react-native';

export const Grediants = [
  {0: '#48A2F1', 1: '#1B74E8'},
  {0: '#65BA69', 1: '#44A148'},
  {0: '#404048', 1: '#1A1A1A'},
  {0: '#EA3D77', 1: '#D91E62'},
  {0: '#FFA400', 1: '#FF6700'},
  {0: '#758BFD', 1: '#27187E'},
  {0: '#9B91FF', 1: '#8A4FFF'},
  {0: '#14BEC7', 1: '#119DA4'},
  {0: '#EE6D86', 1: '#E83F6F'},
];

const dark = true;

export const options = { // for drawer header
  headerStyle: {
    backgroundColor: '#6200ee', // Custom background color
  },
  headerTintColor: '#fff', // Custom title color
  headerTitleStyle: {
    fontWeight: 'bold', // Custom font style
    fontSize: 20, // Custom font size
  },
};


const Light = {
  background: '#F4F5FA',
  color: '#423B50',
  card: '#FFFFFF',
};
const Dark = {
  background: '#28243D',
  color: '#D5D1EA',
  // card:"#796CBD",
  card: '#4b456d',
  // card:"#312D4B",
};

export const Theme = dark ? Dark : Light;
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#79B8F4',
  '#8093F1',
  '#1F7A8C',
  '#E83F6F',
  '#18A999',
  '#F39A9D',
];

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
  gradientText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    margin: 10,
  },
});

// box-shadow : 0px 4px 10px rgb(46 38 61 / 0.2);
