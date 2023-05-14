import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  post: {
    padding: 15,
    margin: 10,
    marginBottom: 5,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
  },
  postUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postUserImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  postUserName: {
    fontSize: 20,
    color: '#5D5D5D',
    marginLeft: 10,
  },
  postContent: {
    fontSize: 24,
    color: '#444444',
    fontWeight: '500',
    marginBottom: 10,
  },
  postBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  postTime: {
    width: '40%',
    color: 'gray',
  },
  postButton: {
    backgroundColor: '#FF5050',
    width: '80%',
    borderRadius: 40,
    marginLeft: 'auto',
  },
});
