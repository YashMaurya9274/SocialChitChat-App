import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  postContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  postInput: {
    width: '80%',
    fontSize: 17,
    color: 'gray',
    padding: 5,
  },
  postButton: {
    marginLeft: 'auto',
    backgroundColor: '#FF5050',
    borderRadius: 20,
    width: '100%',
  },
});
