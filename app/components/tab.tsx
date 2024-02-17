import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  isActive?: boolean,
  text?: string,
}

const Tab = (props: Props) => {
  const [fontsLoaded] = useFonts({
    'Semi-Bold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or return a loading spinner
  }
  return (
    <View style={[styles.tab, props.isActive && styles.tabActive]}>
      <Text style={[styles.text, props.isActive && styles.textActive]}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    backgroundColor: '#F8F9FD',
    borderRadius: 16,
  },
  text: {    
    fontFamily: 'Semi-Bold',
    fontSize: 12,
    lineHeight: 13,
    letterSpacing: -0.2,
    color: '#3D444F',
  },
  textActive: {
    color: '#7ACA40',
  },
  tabActive: {
    backgroundColor: '#F4F5FD',
    borderColor: '#7ECC45',
    borderWidth: 1,
    color: '#7ACA40',
    shadowColor: '#88D152',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
  },
});

export default Tab;