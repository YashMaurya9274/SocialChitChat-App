import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './ChatScreen.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Message from '../../components/Message/Message';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import {db} from '../../../firebase';
import {selectUser} from '../../slices/userSlice';
import {useSelector} from 'react-redux';

const ChatScreen = () => {
  const route = useRoute();
  const {id} = route.params;
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const user = useSelector(selectUser);
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  Icon.loadFont();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chats',
    });
  }, []);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, 'posts', id, 'messages'),
        orderBy('timestamp', 'asc'),
      ),
      snapshot => {
        setMessages(snapshot.docs);
      },
    );
  }, []);

  const sendMessage = async () => {
    if (message) {
      const tempMessage = message;
      setMessage('');
      await addDoc(collection(db, 'posts', id, 'messages'), {
        userId: user?.uid,
        message: tempMessage,
        userimage: user?.photoURL,
        username: user?.displayName,
        timestamp: serverTimestamp(),
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        bounces
        contentContainerStyle={{paddingBottom: 20}}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        {messages.map(message => (
          <Message
            key={message.id}
            id={message.id}
            userId={message.data().userId}
            message={message.data().message}
            userimage={message.data().userimage}
            username={message.data().username}
            timestamp={message.data().timestamp}
          />
        ))}
      </ScrollView>

      <View style={styles.chatInput}>
        <TextInput
          placeholder="Enter your message here!!"
          placeholderTextColor="gray"
          style={styles.chatInputMessage}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Icon
            name="send"
            style={styles.postInputSend}
            size={24}
            color="whitesmoke"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
