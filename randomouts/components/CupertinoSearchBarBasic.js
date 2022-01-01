import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBarBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={styles.inputLeftIcon}
        ></MaterialCommunityIconsIcon>
        <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
      </View>
      <MaterialCommunityIconsIcon
        name="filter-variant"
        style={styles.icon}
      ></MaterialCommunityIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(241,241,244,1)",
    padding: 8
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  inputLeftIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32,
    alignSelf: "flex-start",
    fontSize: 15,
    lineHeight: 15,
    color: "#000",
    flex: 1
  },
  icon: {
    top: 9,
    left: 310,
    position: "absolute",
    color: "rgba(26,21,21,1)",
    fontSize: 24
  }
});

export default CupertinoSearchBarBasic;
