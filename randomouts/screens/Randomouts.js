import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import CupertinoHeaderWithLargeTitle from "../components/CupertinoHeaderWithLargeTitle";
import Svg, { Ellipse } from "react-native-svg";

function Randomouts(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group3StackRow}>
        <View style={styles.group3Stack}>
          <View style={styles.group3}>
            <Text style={styles.outsNearYou}>Outs Near You</Text>
            <View style={styles.rect8Row}>
              <View style={styles.rect8}></View>
              <EntypoIcon name="bookmark" style={styles.icon5}></EntypoIcon>
            </View>
            <View style={styles.rect9Row}>
              <View style={styles.rect9}></View>
              <EntypoIcon name="bookmark" style={styles.icon6}></EntypoIcon>
            </View>
            <View style={styles.rect10Row}>
              <View style={styles.rect10}></View>
              <EntypoIcon name="bookmark" style={styles.icon7}></EntypoIcon>
            </View>
            <View style={styles.rect11Row}>
              <View style={styles.rect11}></View>
              <EntypoIcon name="bookmark" style={styles.icon8}></EntypoIcon>
            </View>
          </View>
          <CupertinoFooter2 style={styles.cupertinoFooter2}></CupertinoFooter2>
        </View>
        <View style={styles.rect7}></View>
        <View style={styles.iconColumn}>
          <EntypoIcon name="bookmark" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="bookmark" style={styles.icon2}></EntypoIcon>
          <EntypoIcon name="bookmark" style={styles.icon3}></EntypoIcon>
        </View>
      </View>
      <CupertinoHeaderWithLargeTitle
        style={styles.cupertinoHeaderWithLargeTitle}
      ></CupertinoHeaderWithLargeTitle>
      <View style={styles.ellipseStackStackStackRow}>
        <View style={styles.ellipseStackStackStack}>
          <View style={styles.ellipseStackStack}>
            <View style={styles.ellipseStack}>
              <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(230, 230, 230,1)"
                  cx={23}
                  cy={25}
                  rx={23}
                  ry={25}
                ></Ellipse>
              </Svg>
              <EntypoIcon
                name="chevron-with-circle-right"
                style={styles.icon4}
              ></EntypoIcon>
            </View>
            <View style={styles.groupStack}>
              <View style={styles.group}>
                <Text style={styles.addShots}>Add Shots</Text>
              </View>
              <Text style={styles.booksTalk}>Books Talk</Text>
            </View>
          </View>
          <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={23}
              cy={25}
              rx={23}
              ry={25}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.ellipse3RowColumn}>
          <View style={styles.ellipse3Row}>
            <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={23}
                cy={25}
                rx={23}
                ry={25}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={23}
                cy={25}
                rx={23}
                ry={25}
              ></Ellipse>
            </Svg>
          </View>
          <View style={styles.muskVsBezosRow}>
            <Text style={styles.muskVsBezos}>Musk Vs Bezos</Text>
            <Text style={styles.stumped}>Stumped</Text>
          </View>
        </View>
        <View style={styles.ellipse5Column}>
          <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse5}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={23}
              cy={25}
              rx={23}
              ry={25}
            ></Ellipse>
          </Svg>
          <Text style={styles.starGaze}>Star Gaze</Text>
        </View>
        <View style={styles.ellipse6RowColumn}>
          <View style={styles.ellipse6Row}>
            <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse6}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={23}
                cy={25}
                rx={23}
                ry={25}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 46.16 50.93" style={styles.ellipse7}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={23}
                cy={25}
                rx={23}
                ry={25}
              ></Ellipse>
            </Svg>
          </View>
          <View style={styles.coffeeStack}>
            <Text style={styles.coffee}>Coffee</Text>
            <Text style={styles.chill}>Chill</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.activities}>Activities</Text>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.text}>Random Outs</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <Text style={styles.popularOnes}>Popular Ones</Text>
        <View style={styles.rect3Row}>
          <View style={styles.rect3}></View>
          <View style={styles.rect4}></View>
          <View style={styles.rect5}></View>
          <View style={styles.rect6}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,249,245,1)"
  },
  group3: {
    top: 0,
    left: 13,
    width: 339,
    height: 342,
    position: "absolute"
  },
  outsNearYou: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    width: 136,
    height: 24
  },
  rect8: {
    width: 89,
    height: 64,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  icon5: {
    color: "rgba(255,38,0,1)",
    fontSize: 30,
    marginLeft: 212,
    marginTop: 15
  },
  rect8Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 7,
    marginRight: 1
  },
  rect9: {
    width: 89,
    height: 64,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  icon6: {
    color: "rgba(255,38,0,1)",
    fontSize: 30,
    marginLeft: 213,
    marginTop: 13
  },
  rect9Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 7
  },
  rect10: {
    width: 89,
    height: 64,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  icon7: {
    color: "rgba(255,38,0,1)",
    fontSize: 30,
    marginLeft: 214,
    marginTop: 15
  },
  rect10Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 6
  },
  rect11: {
    width: 89,
    height: 64,
    backgroundColor: "#E6E6E6",
    borderRadius: 15
  },
  icon8: {
    color: "rgba(255,38,0,1)",
    fontSize: 30,
    marginLeft: 213,
    marginTop: 22
  },
  rect11Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 7
  },
  cupertinoFooter2: {
    position: "absolute",
    left: 0,
    top: 331,
    width: 362,
    height: 59
  },
  group3Stack: {
    width: 362,
    height: 390
  },
  rect7: {
    width: 103,
    height: 70,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 390,
    marginTop: 129
  },
  icon: {
    color: "rgba(255,38,0,1)",
    fontSize: 30
  },
  icon2: {
    color: "rgba(255,38,0,1)",
    fontSize: 30,
    marginTop: 51
  },
  icon3: {
    color: "rgba(255,38,0,1)",
    fontSize: 30,
    marginTop: 69
  },
  iconColumn: {
    width: 30,
    marginLeft: 197,
    marginTop: 148,
    marginBottom: 23
  },
  group3StackRow: {
    height: 390,
    flexDirection: "row",
    marginTop: 350,
    marginLeft: -2,
    marginRight: -720
  },
  cupertinoHeaderWithLargeTitle: {
    height: 51,
    width: 359,
    backgroundColor: "rgba(255,38,0,1)",
    borderRadius: 13,
    marginTop: -715,
    marginLeft: 1
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 46,
    height: 51,
    position: "absolute"
  },
  icon4: {
    top: 32,
    left: 27,
    position: "absolute",
    color: "rgba(255,38,0,1)",
    fontSize: 18
  },
  ellipseStack: {
    top: 0,
    left: 0,
    width: 46,
    height: 53,
    position: "absolute"
  },
  group: {
    top: 0,
    left: 0,
    width: 50,
    height: 10,
    position: "absolute"
  },
  addShots: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    width: 82,
    marginLeft: -6
  },
  booksTalk: {
    top: 0,
    left: 49,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9
  },
  groupStack: {
    top: 51,
    left: 8,
    width: 99,
    height: 11,
    position: "absolute"
  },
  ellipseStackStack: {
    top: 0,
    left: 0,
    width: 107,
    height: 62,
    position: "absolute"
  },
  ellipse2: {
    top: 0,
    left: 57,
    width: 46,
    height: 51,
    position: "absolute"
  },
  ellipseStackStackStack: {
    width: 107,
    height: 62
  },
  ellipse3: {
    width: 46,
    height: 51
  },
  ellipse4: {
    width: 46,
    height: 51,
    marginLeft: 10
  },
  ellipse3Row: {
    height: 51,
    flexDirection: "row",
    marginLeft: 6,
    marginRight: 10
  },
  muskVsBezos: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    width: 66,
    height: 11
  },
  stumped: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    width: 50,
    height: 10,
    marginLeft: 2
  },
  muskVsBezosRow: {
    height: 11,
    flexDirection: "row"
  },
  ellipse3RowColumn: {
    width: 118,
    marginLeft: 1
  },
  ellipse5: {
    width: 46,
    height: 51
  },
  starGaze: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    width: 50,
    height: 10,
    marginLeft: 4
  },
  ellipse5Column: {
    width: 54,
    marginLeft: 1,
    marginBottom: 1
  },
  ellipse6: {
    width: 46,
    height: 51
  },
  ellipse7: {
    width: 46,
    height: 51,
    marginLeft: 10
  },
  ellipse6Row: {
    height: 51,
    flexDirection: "row",
    marginRight: 5
  },
  coffee: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    width: 50,
    height: 10
  },
  chill: {
    top: 0,
    left: 47,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 9,
    width: 50,
    height: 10
  },
  coffeeStack: {
    width: 97,
    height: 10,
    marginLeft: 10
  },
  ellipse6RowColumn: {
    width: 107,
    marginLeft: 3,
    marginBottom: 1
  },
  ellipseStackStackStackRow: {
    height: 62,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 9,
    marginRight: -40
  },
  rect: {
    top: 0,
    left: 0,
    width: 180,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(247,244,244,1)",
    borderRadius: 5
  },
  activities: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 54
  },
  rect2: {
    top: 0,
    left: 179,
    width: 180,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(255,38,0,1)",
    borderRadius: 5
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13,
    marginLeft: 51
  },
  rectStack: {
    width: 359,
    height: 43,
    marginTop: 13,
    marginLeft: 1
  },
  group2: {
    width: 433,
    height: 110,
    marginTop: 27,
    marginLeft: 11
  },
  popularOnes: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  rect3: {
    width: 103,
    height: 70,
    backgroundColor: "#E6E6E6",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 15
  },
  rect4: {
    width: 103,
    height: 70,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 7
  },
  rect5: {
    width: 103,
    height: 70,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 7
  },
  rect6: {
    width: 103,
    height: 70,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 6
  },
  rect3Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 16,
    marginRight: 1
  }
});

export default Randomouts;
