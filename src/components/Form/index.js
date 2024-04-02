import React, { useState } from 'react'
import {
    Keyboard,
    Pressable,
    Text,
    TextInput,
    View
} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

const Form = () => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [message, setMessage] = useState('Preencha peso e altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    const imcCalculator = () => setImc((weight / (height * height)).toFixed(2))

    const imcValidator = () => {
        console.log('imc Validator')

        if (weight != '' && height != '') {
            imcCalculator()
            setHeight('')
            setWeight('')
            setMessage('Seu IMC é de:')
            setTextButton('Calcular novamente')
            return
        }
        setTextButton('Calcular IMC')
        setMessage('Preencha peso e altura')
        setImc(null)
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.70"
                    inputMode="numeric"
                    style={styles.formField}
                />
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 70.32"
                    inputMode="numeric"
                    style={styles.formField}
                />

                <Pressable onPress={() => imcValidator()} onPressOut={() => { Keyboard.dismiss() }}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? styles.buttonCalculatePressed : styles.buttonCalculate,
                        },
                        styles.buttonCalculate,
                    ]}>

                    <Text style={styles.buttonText}>{textButton}</Text>
                </Pressable>
            </View>
            <ResultImc message={message} imc={imc} />
        </View >
    )
}

export default Form
