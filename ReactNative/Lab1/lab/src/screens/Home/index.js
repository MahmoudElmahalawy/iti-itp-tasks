import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    source: require('../../assets/images/1.png'),
  },
  {
    id: '2',
    source: require('../../assets/images/2.png'),
  },
  {
    id: '3',
    source: require('../../assets/images/3.png'),
  },
  {
    id: '4',
    source: require('../../assets/images/4.png'),
  },
  {
    id: '5',
    source: require('../../assets/images/5.png'),
  },
  {
    id: '6',
    source: require('../../assets/images/6.png'),
  },
  {
    id: '7',
    source: require('../../assets/images/7.png'),
  },
  {
    id: '8',
    source: require('../../assets/images/8.png'),
  },
];

const Item = ({source}) => (
  <View style={styles.imageContainer}>
    <Image style={styles.image} source={source} />
  </View>
);

export default function Home({navigation}) {
  const renderItem = ({item}) => <Item source={item.source} />;
  const handleBackBtn = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBackBtn}>
          <Icon name="chevron-left" size={20} color="#DDD" />
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
      </View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
}
