import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albumns: R3!'} />
    <AlbumList />
  </View>
);

export default App;