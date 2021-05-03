import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class ConteudoPage extends React.Component {

    render() {

        return (
            <View>
                <Image style={styles.imagens} source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/19/16/newspaper-154444_960_720.png' }} />
            </View>

        )
    }
}

const styles = StyleSheet.create({

    imagens: {
        width: 400,
        height: 400,
        alignItems: 'center'
    }

})