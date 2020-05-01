import React from "react";
import { View } from "react-native";

import { useTypefaces, Text } from "umiko";

export default function App() {
  const fontsLoaded = useTypefaces({ Inter: true });

  return fontsLoaded ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontFamily: "Inter",
          fontWeight: "100",
          fontSize: 64,
        }}
      >
        Inter 100
      </Text>
    </View>
  ) : null;
}
