import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { AppNavigator } from './components/navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import theme from "./theme/custom-theme.json";


const App = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </ApplicationProvider>
    </React.Fragment>
  )
}

export default App;