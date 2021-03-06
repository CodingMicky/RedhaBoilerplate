import * as React from 'react';

import 'react-native-gesture-handler';
import {isAndroid} from '@freakycoder/react-native-helpers';
import {StatusBar} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';

import Navigation from './src/services/navigation';

console.disableYellowBox = true;

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (isAndroid) {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 1350);
  }, []);

  return (
    <>
      <AnimatedSplash
        logoWidth={300}
        logoHeight={300}
        logoImage={null}
        isLoaded={isLoaded}
        backgroundColor={null}
        imageBackgroundResizeMode='cover'
        imageBackgroundSource={require('./src/assets/splash/lucas-benjamin-unsplash.jpg')}>
        <Navigation />
      </AnimatedSplash>
    </>
  );
};

export default App;
