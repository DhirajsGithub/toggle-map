import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import places from "../refs/places";
import HeaderComp from "../components/HeaderComp";
import ToggleNav from "../components/ToggleNav";
import { AppContext } from "../store/app-context";

const Add = ({ handleToggleToApp }) => {
  const ctx = useContext(AppContext);
  return (
    <View style={styles.container}>
      <HeaderComp />
      <ToggleNav handleToggleToApp={handleToggleToApp} />
      <MapView
        userInterfaceStyle={ctx.isDark ? "dark" : "light"}
        style={styles.map}
        initialRegion={{
          latitude: 26.85,
          longitude: 80.949997,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {places.map((region, index) => {
          return (
            <Marker
              key={index}
              coordinate={region}
              // title={marker.title}
              // description={marker.description}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
