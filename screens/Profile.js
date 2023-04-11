import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../refs/colors";
import React, { useContext } from "react";
import { AppContext } from "../store/app-context";

const Profile = () => {
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
          Profile
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
