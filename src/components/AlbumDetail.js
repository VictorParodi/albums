import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    const { title, artist, thumbnail_image, image, url } = props.album;

    const { 
        headerContentStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle, 
        headerTextStyle,
        imageStyle 
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}> 
                    <Image source={{ uri: thumbnail_image}} style={thumbnailStyle} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> {title} </Text>
                    <Text> {artist} </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image source={{uri: image}} style={imageStyle} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;