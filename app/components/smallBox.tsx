import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  children: React.ReactNode,
  title?: string,
  content?: string,
}

export const SmallBox = (props: Props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 0.4, y: 0.9 }}
      colors={['#F1F3FF', '#FFF']}
      style={styles.outBox}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 0.4, y: 0.9 }}
        colors={['#F1F3FF', '#E4E7FA']}
        style={styles.inBox}
      >
        <View style={styles.titleWrap}>
          {props.title?.split('|').map(line => {
            return (
              <Text
                key={line}
                style={styles.title}
              >
                {line}
              </Text>
            )
          })}
        </View>

        <View style={styles.contentWrap}>
          {props.content?.split('|').map(line => {
            return (
              <Text
                key={line}
                style={styles.content}>
                {line}
              </Text>
            )
          })}
        </View>

        {props.children}

      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outBox: {
    width: 147,
    height: 168,
    padding: 2,
    borderRadius: 32,
  },
  inBox: {
    flex: 1,
    borderRadius: 32,
    paddingTop: 54,
    paddingLeft: 18,
    gap: 14,
  },
  titleWrap: {
    width: 88,
    height: 40,
  },
  title: {
    color: '#3D444F',
    fontFamily: 'Extra-Bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.1,
  },
  contentWrap: {
    width: 76,
    height: 36,
  },
  content: {
    color: '#5F6F89',
    fontFamily: 'Medium',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.2,
  }
});

export default SmallBox;