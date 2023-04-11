import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppContext } from "../store/app-context";
import colors from "../refs/colors";

const Navigation = () => {
  const ctx = useContext(AppContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: ctx.isDark ? colors.lightBlack : colors.white },
      ]}
    >
      <SafeAreaView>
        <Text style={{ color: ctx.isDark ? colors.white : colors.black }}>
          Navigation
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
