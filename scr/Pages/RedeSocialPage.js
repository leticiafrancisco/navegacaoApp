import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class RedeSocialPage extends React.Component {

    render() {
        return (
            <View>
                <Image style={styles.imagens} source={{ uri: 'https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_960_720.jpg' }} />
            </View>
        )
    }
}
const styles = StyleSheet.create({

    imagens: {
        width: 450,
        height: 400,
        alignItems: 'center'
    }

})