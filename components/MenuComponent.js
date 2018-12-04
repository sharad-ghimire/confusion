import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import logo from './images/buffet.png';

const Menu = (props) => {
  //each element in the array will become an item that is supplied to this particular function that is rendered here
  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        leftAvatar={{ source: require('./images/uthappizza.png') }}
      />
    );
  };

  return (
    // Flat List will be mapped into listview in android
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
  // data is array of item
  // renderItem will specify how each element will render taking a View
  // keyExtractor will extract one of the props off each item in array and use that as key
};

export default Menu;
