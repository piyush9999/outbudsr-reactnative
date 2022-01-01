import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoHeaderWithLargeTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.outbuds}></Text>
      </View>
      <MaterialCommunityIconsIcon
        name="message-text"
        style={styles.icon}
      ></MaterialCommunityIconsIcon>
      <IoniconsIcon name="md-menu" style={styles.icon2}></IoniconsIcon>
      <Image
        source={require("../assets/images/outbuds_india_logo-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF4",
    paddingRight: 8,
    paddingLeft: 8,
    flexDirection: "row"
  },
  header: {
    width: 359,
    height: 44,
    flexDirection: "row"
  },
  leftWrapper: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  button: {},
  textWrapper: {
    height: 46,
    paddingLeft: 5,
    justifyContent: "center"
  },
  outbuds: {
    fontSize: 34,
    fontFamily: "encode-sans-semi-condensed-600",
    lineHeight: 40,
    color: "#000"
  },
  icon: {
    top: 7,
    left: 325,
    position: "absolute",
    color: "rgba(255,38,0,1)",
    fontSize: 27,
    width: 27,
    height: 29
  },
  icon2: {
    top: 8,
    left: 8,
    position: "absolute",
    color: "rgba(255,38,0,1)",
    fontSize: 27
  },
  image: {
    top: 0,
    left: 156,
    width: 63,
    height: 49,
    position: "absolute"
  }
});

export default CupertinoHeaderWithLargeTitle;
