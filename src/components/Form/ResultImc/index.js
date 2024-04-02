import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const ResultImc = (props) => {
    return (
        <View style={styles.boxResult}>
            <Text style={styles.textMessage}>{props.message}</Text>
            <Text style={styles.textResult}>{props.imc}</Text>
        </View>
    )
}

export default ResultImc
