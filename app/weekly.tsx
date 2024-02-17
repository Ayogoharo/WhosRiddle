import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Tab from './components/tab';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Semi-Bold': require('./app/assets/fonts/Poppins-SemiBold.ttf'),
    'Extra-Bold': require('./app/assets/fonts/Poppins-ExtraBold.ttf'),
    'Medium': require('./app/assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or return a loading spinner
  }

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 0.4, y: 0.9 }}
      colors={['#F0F2FF', '#E7EBFF']}
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: 42,
        paddingBottom: 20,
        paddingHorizontal: 40,
      }}
    >
      {/* main */}
      <View style={{
        flex: 1,
        width: '100%',
        gap: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Tab isActive={true} text='Weekly' />

        <Tab text='3 Days' />

        <Tab text='1 Day' />

        <Tab text='Special' />
      </View>

      <View style={{
        flex: 1,
      }}>
        <Text style={{
          fontFamily: 'Extra-Bold',
          color: '#3D444F',
          lineHeight: 30,
          letterSpacing: -0.1,
          fontSize: 24,
          paddingBottom: 17,
        }}
        >Weekly Riddles</Text>

        <Text style={{
          fontFamily: 'Regular',
          color: '#5F6F89',
          lineHeight: 28,
          letterSpacing: -0.2,
          fontSize: 16,
          paddingBottom: 28,
        }}
        >I can add to several hundred. But can’t subtract multiply or divide. Whatever I add to, it’s always in front of you but never behind. And the number I add to You can’t really hide!</Text>

        <Text style={{
          fontFamily: 'Bold',
          color: '#5F6F89',
          lineHeight: 28,
          letterSpacing: -0.2,
          fontSize: 16,

        }}
        >Who am I?</Text>
      </View>

      <View style={{
        width: '100%',
        height: 72,
        borderRadius: 26,
      }}>
        <LinearGradient
          start={{ x: 0.1, y: 0.1 }} end={{ x: 0.9, y: 0.9 }}
          colors={['#F1F3FF', '#E7E9F8']}
        >
          <TextInput
            onChange={() => { }}
            value={''}
            placeholder='Your answer'
          />
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    gap: 8,
  },
});