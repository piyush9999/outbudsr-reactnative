import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "rgba(255,38,0,1)"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.home,
            {
              color: props.active ? "#007AFF" : "rgba(158,158,158,1)"
            }
          ]}
        ></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="account-multiple-plus"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.myOuts}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="plus-circle"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.createAnOut}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name="bell-ring"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.notifications}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon name="ios-contact" style={styles.icon4}></IoniconsIcon>
        <Text style={styles.favorite}></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  home: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(181,172,171,1)"
  },
  myOuts: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(181,172,171,1)"
  },
  createAnOut: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(181,172,171,1)"
  },
  notifications: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "rgba(181,172,171,1)"
  },
  favorite: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  }
});

export default CupertinoFooter2;
