import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      backgroundColor: '#EEE9E9'
    },
    highlight: {
      fontWeight: '800',
      color: 'white',
      fontSize: 40,
    },
    header: {
      width: '100%',
      // backgroundColor: '#4D8D6E',
    },
    body: {
      width: '100%',
      alignItems: 'center',
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textLogin: {
      textAlign: 'center',
      color: '#d82e4d',
      fontSize: 30,
      fontWeight: '500',
      padding: 30,
    },
    viewInput: {
      width: windowWidth - 60,
      height: 50,
      borderRadius: 20,
      margin: 15,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      elevation: 10,
    },
    iconInput: {
      marginLeft: 10,
      width: 25,
      height: 25
    },
    textInput: {
      height: '100%',
      flex: 1,
      paddingLeft: 20,
      color: 'black',
    },
    showPassword: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: 1
    },
    btnLogin: {
      width: windowWidth - 60,
      height: 50,
      borderRadius: 20,
      margin: 35,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#d82e4d',
      elevation: 10,
    },
    textBtnLogin: {
      color: 'white',
      width: '100%',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '500'
    },
    footerLogin: {
      width: '100%',
      paddingHorizontal: 30,
    },
    orLoginWith: {
      width: '100%',
      marginBottom: 30,
      flexDirection: 'row',
      alignItems: 'center',
    },
    Btns: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    iconBtn: {
      width: '47%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      height: 50,
      marginHorizontal: 5,
      marginVertical: 5,
      justifyContent: 'center'
    }
  });

  export default styles