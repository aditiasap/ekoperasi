import React from 'react';
import {
    BackHandler,
    ToastAndroid,
    Platform
} from 'react-native';

import Router from './Router';

class RouterWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = { backPress: false };
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);            
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);            
        }
    }

    onBackButtonPressAndroid = () => {
      if (!this.state.backPress) {
        ToastAndroid.show('Tekan tombol BACK sekali lagi untuk Keluar', ToastAndroid.SHORT);
        this.setState({ backPress: true });
        this.timer = setTimeout(() => {
          this.setState({ backPress: false });
        }, 1500);
      }
      else {
        clearTimeout(this.timer);
        return false;
      }
      return true;        
    };

    render() {
        return <Router />
    }
}

export default RouterWrapper;
