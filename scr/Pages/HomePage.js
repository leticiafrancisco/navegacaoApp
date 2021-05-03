import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

    constructor(props) {

        super(props)
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {

                        this.props.navigation.navigate('ContatoPage')

                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttontxt}>Contato</Text>
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {

                        this.props.navigation.navigate('ConteudoPage')

                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttontxt}>Contéudo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                        this.props.navigation.navigate('RedeSocialPage')

                    }}
                    style={styles.button}
                >
                    <Text style={styles.buttontxt}>Rede Social</Text>
                </TouchableOpacity>
            </View>


        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        width: 300,
        paddingVertical: 15,
        paddingHorizontal: 30,
        padding: 10,
        backgroundColor: '#bab8b5',
        borderRadius: 20,
        elevation: 5,

    },
    buttontxt: {
        fontWeight: 'bold',
        color: '#ffff',
        textAlign: 'center',
        fontSize: 30,

    },

});

