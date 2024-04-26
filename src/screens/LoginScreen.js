import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginForm({navigation}) {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Dummy data for demonstration
    const dummyEmail = 'user@example.com';
    const dummyPassword = 'password123';

    if (email === dummyEmail && password === dummyPassword) {
      // Login successful, save user session using AsyncStorage
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.navigate('Task');
    } else {
      setError('Invalid email or password');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.freepik.com/256/11207/11207604.png?semt=ais_hybrid',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{true: 'green', false: 'gray'}}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert('Forget Password!')}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText} onPress={handleLogin}>
            LOGIN
          </Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
        <Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon-thumbnail.png',
          }}
          style={styles.icons}
        />
        <Image
          source={{
            uri: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
          }}
          style={styles.icons}
        />

        <Image
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png',
          }}
          style={styles.icons}
        />
      </View>

      <Text style={styles.footerText}>
        Don't Have Account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate('Signup')}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
    flex:1
  },
  image: {
    height: 140,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: '#0066b2',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 16,
  },
  switch: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 14,
  },
  forgetText: {
    fontSize: 14,
    color: 'red',
  },
  button: {
    backgroundColor: '#0066b2',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'gray',
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  signup: {
    color: 'red',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
