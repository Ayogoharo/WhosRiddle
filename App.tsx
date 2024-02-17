import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import Star from './app/assets/images/star';
import Bell from './app/assets/images/bell';
import Bulb from './app/assets/images/bulb';
import SmallBox from './app/components/smallBox';
import Box from './app/components/box';
import BoxV2 from './app/components/boxV2';
import House from './app/assets/images/house';
import Crown from './app/assets/images/crown';
import Gear from './app/assets/images/gear';
import Tab from './app/components/tab';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Semi-Bold': require('./app/assets/fonts/Poppins-SemiBold.ttf'),
    'Extra-Bold': require('./app/assets/fonts/Poppins-ExtraBold.ttf'),
    'Medium': require('./app/assets/fonts/Poppins-Medium.ttf'),
    'Regular': require('./app/assets/fonts/Poppins-Regular.ttf'),
    'Bold': require('./app/assets/fonts/Poppins-Bold.ttf'),
    
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
        paddingRight: 40,
        paddingBottom: 20,
        paddingLeft: 40,
      }}
    >
      {/* header */}
      <View style={{
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        width: '100%',
      }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }}
          colors={['#F8B469', '#FF876D']}
          style={{
            width: 71,
            height: 40,
            borderRadius: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
          }}
        >
          <Star />
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'Semi-Bold',
              fontSize: 11,
              letterSpacing: -0.4,
            }}
          >954</Text>
        </LinearGradient>

        <View style={{
          flexDirection: 'row',
          gap: 20,
        }}
        >
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 14,
            backgroundColor: '#F8F9FD',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Bell />

            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }}
              colors={['#E75AC8', '#FF708A']}
              style={{
                position: 'absolute',
                top: -7,
                right: -6,
                width: 23,
                height: 22,
                borderRadius: 14,
              }}
            >
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Semi-Bold',
                  fontSize: 11,
                  lineHeight: 22,
                  alignSelf: 'center',
                }}
              >2</Text>
            </LinearGradient>

          </View>

          <View style={{
            width: 40,
            height: 40,
            borderRadius: 14,
            backgroundColor: '#F8F9FD',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Bulb />

            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0.5 }}
              colors={['#7DCB44', '#6DBC33']}
              style={{
                position: 'absolute',
                top: -7,
                right: -6,
                width: 23,
                height: 22,
                borderRadius: 14,
              }}
            >
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Semi-Bold',
                  fontSize: 11,
                  lineHeight: 22,
                  alignSelf: 'center',
                }}
              >5</Text>
            </LinearGradient>

          </View>
        </View>

      </View>

      {/* main */}
      <View style={{
        gap: 20,
      }}>
        <Box
          title='Weekly Riddle'
          content='Riddles you need to solve weekly'
        >
          <View style={{
            position: 'absolute',
            top: -18,
            right: -25,
          }}>
            <Image
              source={require('./app/assets/images/quest.png')}
              style={{
                width: 320,
                height: 200,
              }} />
          </View>
        </Box>

        <View style={{
          flexDirection: 'row',
          gap: 16,
        }}>
          <SmallBox
            title='3 Days|Exp. Riddles'
            content='3 days for solving'
          >
            <View style={{
              position: 'absolute',
              top: -23.3,
              right: -19.7,
            }}>
              <Image
                source={require('./app/assets/images/3.png')}
                style={{
                  width: 155,
                  height: 184,
                }}
              />
            </View>
          </SmallBox>

          <SmallBox
            title='1 Day|Exp. Riddles'
            content='1 day for solving'
          >
            <View style={{
              position: 'absolute',
              top: -22.5,
              right: -21,
            }}>
              <Image
                source={require('./app/assets/images/1.png')}
                style={{
                  width: 155,
                  height: 179,
                }}
              />
            </View>
          </SmallBox>
        </View>

        <BoxV2
          title='Special Brand Riddles'
          content='Riddles related with popular brands such as'
        >
          <View style={{
            position: 'absolute',
            top: -25.8,
            right: -55,
          }}>
            <Image
              source={require('./app/assets/images/brand.png')}
              style={{
                width: 229,
                height: 214,
              }} />
          </View>

          <View style={{
            flexDirection: 'row',
            gap: 8,
          }}>
            <Image source={require('./app/assets/images/Rectangle 1941.png')} />

            <Image source={require('./app/assets/images/Rectangle 1940.png')} />

            <Image source={require('./app/assets/images/Rectangle 1942.png')} />
          </View>
        </BoxV2>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <View style={styles.footerWrap}>
          <House opacity={1} />

          <Text style={styles.footerTextSelected}>Home</Text>
        </View>

        <View style={styles.footerWrap}>
          <Crown opacity={0.66} />

          <Text style={styles.footerText}>Leaderboard</Text>
        </View>

        <View style={styles.footerWrap}>
        <Gear opacity={0.66} />

          <Text style={styles.footerText}>Settings</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignSelf: 'flex-end',
    width: '100%',
    height: 47,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerWrap: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#5F6F89',
    fontFamily: 'Semi-Bold',
    fontSize: 10,
    lineHeight: 11,
    letterSpacing: 0.4,
  },
  footerTextSelected: {
    color: '#3D444F',
    fontFamily: 'Semi-Bold',
    fontSize: 10,
    lineHeight: 11,
    letterSpacing: 0.4,
  },
});