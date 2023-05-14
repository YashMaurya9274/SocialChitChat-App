import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  message: {
    display: 'flex',
    position: 'relative',
    // alignSelf: 'baseline',
    width: 200,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    margin: 10,
  },
  messageContent: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: '600',
  },
  messageUserImage: {
    height: 20,
    position: 'absolute',
    bottom: -10,
    width: 20,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  messageTime: {
    fontSize: 13,
    marginLeft: 'auto',
  },
});
