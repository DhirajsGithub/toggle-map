import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AppContext } from "../store/app-context";
import colors from "../refs/colors";

let width = Dimensions.get("window").width;

const HeaderComp = () => {
  const ctx = useContext(AppContext);
  return (
    <View style={styles.contianer}>
      <View
        style={[
          styles.list,
          { backgroundColor: ctx.isDark ? colors.lightBlack : colors.white },
        ]}
      >
        <TouchableOpacity style={styles.icon}>
          <AntDesign
            name="search1"
            size={24}
            color={ctx.isDark ? colors.white : colors.black}
          />
        </TouchableOpacity>
        <TextInput
          color={ctx.isDark ? colors.white : colors.black}
          placeholderTextColor={ctx.isDark ? colors.white : "gray"}
          placeholder="search here"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  contianer: {
    position: "absolute",
    left: 0,
    right: 0,

    alignItems: "center",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 60,
    zIndex: 100,
  },
  list: {
    flexDirection: "row",
    // justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 15,
    width: 300,
    elevation: 4,
    padding: Platform.OS === "android" ? 3 : 7,
    elevation: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  input: {
    padding: 5,
    // flexGrow: 2,
    textAlign: "left",
    paddingHorizontal: 5,

    // width: "80%",
  },
  icon: {
    marginHorizontal: 5,
    // flexGrow: 2,
  },
});
