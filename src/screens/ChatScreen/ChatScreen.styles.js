import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatInput: {
    backgroundColor: '#dcdcdc',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // position: 'absolute',
    // bottom: 30,
    // width: '100%',
    marginBottom: 30,
    marginTop: 'auto',
    marginLeft: 10,
    marginRight: 10,
  },
  chatInputMessage: {
    color: 'gray',
    fontSize: 17,
    width: '90%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  postInputSend: {
    marginLeft: 'auto',
    color: 'gray',
  },
});
