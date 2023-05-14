import {View} from 'react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Button} from 'react-native-elements';
import {styles} from './LoginScreen.styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '98615996231-hi2d8njnlro8rpdpb86nl1p7ck2tqfdl.apps.googleusercontent.com',
});

const LoginScreen = () => {
  Icon.loadFont();

  const signInWithGoogle = async () => {
    console.log('IN SIGNIN FUNC');
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const result = auth().signInWithCredential(googleCredential);

    result.then(re => console.log(re));
  };

  return (
    <View style={styles.login}>
      <StatusBar barStyle="light-content" backgroundColor="#FF5050" />
      <Icon name="chat" size={100} color="#FF5050" />
      <Button
        title="LOGIN"
        buttonStyle={styles.loginButton}
        titleStyle={{marginLeft: 'auto', marginRight: 'auto'}}
        containerStyle={{width: '60%'}}
        onPress={signInWithGoogle}
      />
    </View>
  );
};

export default LoginScreen;
