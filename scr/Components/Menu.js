import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const Menu = (props) =>{

    const {onPressItem} = props;

    return(
        <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
            <Button 
                title="Contatos"
                onPressItem={() =>{
    
                    this.props.navigation.navigate('ContatoPage')
            
                }}
            />
        </View>
    )
}