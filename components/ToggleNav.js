import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AppContext } from "../store/app-context";
import colors from "../refs/colors";

const ToggleNav = () => {
  const ctx = useContext(AppContext);

  const handleTogglePress = () => {
    ctx.toggleMode();
  };
  const handleNavigationPress = () => {
    alert("Navigation will be added soon !!!");
  };

  let toggleIcon = ctx.isDark ? (
    <FontAwesome5
      name="toggle-on"
      size={24}
      color={ctx.isDark ? colors.white : colors.black}
    />
  ) : (
    <FontAwesome5
      name="toggle-off"
      size={24}
      color={ctx.isDark ? colors.white : colors.black}
    />
  );
  return (
    <View style={styles.contianer}>
      <View style={styles.list}>
        <TouchableOpacity
          onPress={handleTogglePress}
          style={[
            styles.common,
            {
              elevation: 10,
              padding: 8,
              borderRadius: 100,
              margin: 5,
              backgroundColor: ctx.isDark ? colors.lightBlack : colors.white,
            },
          ]}
        >
          {toggleIcon}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigationPress}
          style={[
            styles.common,
            {
              elevation: 10,
              margin: 5,

              padding: 8,
              borderRadius: 100,
              backgroundColor: ctx.isDark ? colors.lightBlack : colors.white,
            },
          ]}
        >
          <Feather
            name="navigation"
            size={24}
            color={ctx.isDark ? colors.white : colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleNav;

const styles = StyleSheet.create({
  contianer: {
    position: "absolute",
    top: 130,
    right: 20,
    zIndex: 1000,
  },
  list: {},
  common: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
