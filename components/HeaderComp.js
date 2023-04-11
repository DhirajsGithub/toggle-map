import {
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { AppContext } from "../store/app-context";
import colors from "../refs/colors";

let width = Dimensions.get("window").width;

const HeaderComp = () => {
  const data = [
    "delhi",
    "mirzapur",
    "bihar",
    "mumbai",
    "pune",
    "nagpur",
    "jalgaon",
    "dhule",
    "lucknow",
  ];
  const [cities, setCities] = useState([]);
  const [focus, setFocus] = useState(false);
  const ctx = useContext(AppContext);
  const handleText = (text) => {
    setFocus(true);
    filterCities = data.filter((item) => {
      let newItem = item.toLocaleLowerCase();
      let newText = text.toLocaleLowerCase();
      return newItem.includes(newText);
    });
    setCities(filterCities);
  };
  return (
    <View style={styles.contianer}>
      <View
        style={[
          styles.list,
          { backgroundColor: ctx.isDark ? colors.lightBlack : colors.white },
        ]}
      >
        <TouchableOpacity onPress={() => setFocus(false)} style={styles.icon}>
          <AntDesign
            name="search1"
            size={24}
            color={ctx.isDark ? colors.white : colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFocus(true)}>
          <TextInput
            color={ctx.isDark ? colors.white : colors.black}
            placeholderTextColor={ctx.isDark ? colors.white : "gray"}
            placeholder="search here"
            style={styles.input}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={handleText}
          />
        </TouchableOpacity>
      </View>
      {focus && (
        <View
          style={{
            backgroundColor: ctx.isDark ? colors.lightBlack : colors.white,
            paddingHorizontal: 20,
            height: 180,
          }}
        >
          <FlatList
            data={cities}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text
                  style={{
                    color: ctx.isDark ? colors.white : colors.black,
                    margin: 5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      )}
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
