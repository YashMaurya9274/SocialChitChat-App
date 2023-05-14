import {Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {styles} from './Message.styles';
import TimeAgo from 'react-native-timeago';
import {selectUser} from '../../slices/userSlice';
import {useSelector} from 'react-redux';

const Message = ({id, userId, username, userimage, message, timestamp}) => {
  const user = useSelector(selectUser);

  return (
    <View
      style={[
        styles.message,
        {
          marginLeft: user.uid === userId ? 'auto' : 10,
          backgroundColor: user.uid === userId ? '#FF5252' : 'lightgray',
        },
      ]}>
      <Text
        style={[
          styles.messageContent,
          {
            color: user.uid === userId ? 'white' : '#464646',
          },
        ]}>
        {message}
      </Text>
      <Image
        source={{uri: userimage}}
        resizeMode="cover"
        style={[
          styles.messageUserImage,
          {
            right: user.uid === userId ? 0 : null,
          },
        ]}
      />
      <Text
        style={[
          styles.messageTime,
          {
            color: user.uid === userId ? '#F1F1F1' : '#515151',
          },
        ]}>
        <TimeAgo time={timestamp?.toDate()} />
      </Text>
    </View>
  );
};

export default Message;
