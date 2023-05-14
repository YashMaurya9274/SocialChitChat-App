import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Post.styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import TimeAgo from 'react-native-timeago';

const Post = ({id, username, userImg, content, timestamp}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.post}>
      <View style={styles.postUser}>
        <Image
          source={{uri: userImg}}
          resizeMode="cover"
          style={styles.postUserImage}
        />
        <Text style={styles.postUserName}>{username}</Text>
      </View>

      <Text style={styles.postContent}>{content}</Text>

      <View style={styles.postBottom}>
        <Text style={styles.postTime}>
          <TimeAgo time={timestamp?.toDate()} />
        </Text>
        <Button
          title="View Chat"
          buttonStyle={styles.postButton}
          onPress={() =>
            navigation.navigate('Chats', {
              id: id,
            })
          }
          containerStyle={{width: '60%'}}
        />
      </View>
    </View>
  );
};

export default Post;
