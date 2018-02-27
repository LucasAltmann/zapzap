import {
  StyleSheet
} from 'react-native';


const FormsStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#115E54aa'
    },
    containerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flex: 1,
        padding: 50,
    },
    containers: {
        flex: 2,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    inputs: {
        fontSize: 20,
        height: 45,
        color: '#fff'
    },
    texts: {
        fontSize: 20,
        color: '#fff',
    },
    textErro: {
        fontSize: 20,
        color: 'red'
    },
    img: {
        width: 220,
        height: 220
    },
    navBar: {
        backgroundColor: '#115E54' 
    },
    navTitle: {
        color: '#fff'
    }
    
});


export default FormsStyles;
