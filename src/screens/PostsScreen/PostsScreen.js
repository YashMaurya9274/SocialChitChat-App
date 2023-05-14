import {
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Post from '../../components/Post/Post';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './PostsScreen.styles';
import auth from '@react-native-firebase/auth';
import {db} from '../../../firebase';
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import {selectUser} from '../../slices/userSlice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSelector} from 'react-redux';

const PostsScreen = () => {
  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);

  const signOutWithGoogle = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.5} onPress={signOutWithGoogle}>
          <Image
            source={{uri: user?.photoURL}}
            resizeMode="cover"
            style={{width: 40, height: 40, borderRadius: 100, marginBottom: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      snapshot => {
        setPosts(snapshot.docs);
      },
    );
  }, []);

  const post = async () => {
    if (content) {
      const tempContent = content;
      setContent('');

      await addDoc(collection(db, 'posts'), {
        username: user?.displayName,
        profileImg: user?.photoURL,
        content: tempContent,
        timestamp: serverTimestamp(),
      });
    }
  };

  console.log('POSTS', posts);

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#FF5050" />
      <View style={styles.postContent}>
        <TextInput
          style={styles.postInput}
          placeholder="What's on your mind ??"
          value={content}
          onChangeText={text => setContent(text)}
        />
        <Button
          containerStyle={{width: '20%'}}
          buttonStyle={styles.postButton}
          title="Post"
          onPress={post}
        />
      </View>
      <ScrollView bounces contentContainerStyle={{paddingBottom: 80}}>
        <StatusBar barStyle="light-content" />
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            content={post.data().content}
            timestamp={post.data().timestamp}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PostsScreen;
