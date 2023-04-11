import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Window = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>Window</Text>
      </SafeAreaView>
    </View>
  );
};

export default Window;

const styles = StyleSheet.create({});
