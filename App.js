import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import MyKoloApp from './navigation/myKoloNav'


export default class App extends React.Component {
    state = {
        appIsReady: false,
      };
    
      async componentDidMount() {
        // Prevent native splash screen from autohiding
        try {
          await SplashScreen.preventAutoHideAsync();
        } catch (e) {
          console.warn(e);
        }
        this.prepareResources();
      }
    
      /**
       * Method that serves to load resources and make API calls
       */
      prepareResources = async () => {
        try {
          await performAPICalls();
          await downloadAssets();
        } catch (e) {
          console.warn(e);
        } finally {
          this.setState({ appIsReady: true }, async () => {
            await SplashScreen.hideAsync();
          });
        }
      };
    
      render() {
        if (!this.state.appIsReady) {
          return null;
        }
      
  return (
    <MyKoloApp />
  );
}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
