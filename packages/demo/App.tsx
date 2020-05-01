import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { useTypefaces, Text } from "umiko";

export default function App() {
  const fontsLoaded = useTypefaces({ Inter: true });

  return fontsLoaded ? (
    <ScrollView
      style={{ flex: 1, marginVertical: 48 }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      {[
        "normal",
        "bold",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ].map((weight) => (
        <Text
          key={weight}
          style={{
            fontFamily: "Inter",
            fontWeight: weight,
            fontSize: 48,
          }}
        >
          Inter {weight}
        </Text>
      ))}
    </ScrollView>
  ) : null;
}
