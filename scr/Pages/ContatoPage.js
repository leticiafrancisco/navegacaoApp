import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class ContatoPage extends React.Component {

    render() {

        return (
            <View>
                <Image style={styles.imagens} source={{ uri: 'https://cdn.pixabay.com/photo/2017/09/16/11/00/icon-2755160_960_720.png' }} />
            </View>

        )
    }
}

const styles = StyleSheet.create({

    imagens: {
        width: 400,
        height: 400,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }

})