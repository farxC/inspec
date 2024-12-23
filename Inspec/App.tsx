
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Index';
import BootSplash from "react-native-bootsplash"
import { AnimatedBootSplash } from './src/components/AnimatedBootSplash';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  return (   
         <NavigationContainer>
            <Navigator/>
            {visible && <AnimatedBootSplash onAnimationEnd={() => {setVisible(false)}}/>}        
        </NavigationContainer>

  );
}


export default App;
