import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, setUser} from '../slices/userSlice';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import PostsScreen from '../screens/PostsScreen/PostsScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const globalScreenOptions = {
    headerStyle: {backgroundColor: '#FF5050'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
  };

  // Handle user state changes
  const onAuthStateChanged = user => {
    // setUser(user);
    console.log('auth state chenged ran', user);
    dispatch(setUser(user));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Posts" component={PostsScreen} />
            <Stack.Screen name="Chats" component={ChatScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
