import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../refs/colors";
import { AppContext } from "../store/app-context";

const Notification = () => {
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
          Notification
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
