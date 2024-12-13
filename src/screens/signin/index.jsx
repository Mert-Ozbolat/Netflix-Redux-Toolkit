import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import StartButton from '../../components/button'
import signIn from '../../styles/signIn'


const SigninScreen = () => {
    return (
        <View style={signIn.container}>
            <View style={signIn.textInputSection}>
                <TextInput
                    placeholder='Enter Your Email'
                    style={signIn.textInput}
                    autoComplete='email'
                    inputMode='email'
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder='Password'
                    style={signIn.textInput}
                    autoComplete='password'

                />
                <StartButton />
            </View>

            <View style={signIn.titleContainer}>
                <Text style={signIn.titleHelp}>Need help?</Text>
                <Text style={signIn.titleSign}>New to Netflix? Sign up now.</Text>
                <Text style={signIn.titleLearn}>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot. Learn more.</Text>
            </View>


        </View>
    )
}

export default SigninScreen

