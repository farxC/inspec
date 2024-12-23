import { useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import BootSplash from "react-native-bootsplash";

type Props = {
  onAnimationEnd: () => void;
};

export const AnimatedBootSplash = ({ onAnimationEnd }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

    const { container, logo , brand } = BootSplash.useHideAnimation({
    manifest: require("../assets/bootsplash/manifest.json"),
    logo: require("../assets/bootsplash/logo.png"),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,


    animate: () => {
      // Perform animations and call onAnimationEnd
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 1800,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Image {...logo} />
    </Animated.View>
  );
};