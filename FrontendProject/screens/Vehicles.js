import * as React from "react";
import { Image } from "expo-image";
import { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import VehicleRecords from "../components/VehicleRecords";
import Footer from "../components/Footer";
import { useRoute } from "@react-navigation/native";
import FilterSearchVehicle from "../components/FilterSearchVehicle";
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
const screenWidth = Dimensions.get("window").width;
import Icon from "react-native-vector-icons/FontAwesome";
const screenHeight = Dimensions.get("window").height;
const rem = screenWidth / 16;
const Vehicles = () => {
  const route = useRoute();
  const type = route.params?.type;
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [filterSearchClicked, setFilterSearchClicked] = useState(false);
  const [searchType, setSearchType] = useState([]);
  const [searchOrder, setSearchOrder] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleQuery = (query) => {
    setSearch(query);
    // setIsSearch(true);
  };
  const functionFilterSearch = () => {
    setFilterSearchClicked(true);
  };
  const addFilterInState = (attribute = ["default"], sort = "default") => {
    setFilterSearchClicked(false);
    setSearchType(attribute);
    setSearchOrder(sort);
  };

  return (
    <View style={styles.vehicles}>
      <Image
        style={styles.lightTexture22341Icon}
        contentFit="cover"
        source={require("../assets/light-texture2234-1.png")}
      />

      <View
        style={{
          top: screenWidth * 0.3,
          width: screenWidth * 0.9,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            gap: screenWidth * 0.13,
          }}
        >
          <View style={styles.breadcrumbContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                style={styles.breadcrumbImage}
                contentFit="cover"
                source={require("../assets/homemuted.png")}
              />
            </TouchableOpacity>
            <Text style={styles.breadcrumbSeparator}> / </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Vehicles", { type: "default" })
              }
            >
              <Text style={styles.breadcrumbText1}>Vehicles</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end", top: 5 }}>
            <Pressable onPress={functionFilterSearch}>
              <Text style={styles.filterText}>Filter</Text>
            </Pressable>
            {filterSearchClicked && (
              <FilterSearchVehicle
                onFilterSelect={(attribute, sort) =>
                  addFilterInState(attribute, sort)
                }
              />
            )}
            <TouchableOpacity
              style={[styles.groupLayoutt]}
              onPress={() => navigation.navigate("AddVehicle")}
            >
              <View style={styles.rectangleGroupp}>
                <Text style={[styles.addTypo]}>Add Vehicle</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Pressable style={[styles.rectangleParent18, styles.rectangleLayout]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <TextInput
              style={{
                fontSize: 15,
                fontWeight: "700",
                width: screenWidth * 0.74,
              }}
              placeholder="Search Vehicle"
              clearButtonMode="always"
              value={search}
              onChangeText={(query) => handleQuery(query)}
            />
          </View>
          <View>
            <Image
              style={{ height: screenHeight * 0.03, width: screenWidth * 0.07 }}
              contentFit="cover"
              source={require("../assets/vector13.png")}
            />
          </View>
        </View>
      </Pressable>

      {isKeyboardVisible ? null : (
        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <Footer prop={"Vehicles"} />
        </View>
      )}
      <View contentContainerStyle={styles.contView}>
        <VehicleRecords
          dsearch={search}
          type={type}
          searchType={searchType}
          searchOrder={searchOrder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image2IconPosition: {
    width: 430,
    left: -5,
    position: "absolute",
  },
  cont: {
    // padding: 6,
    // top: -45,
    // right: 5,
    // zIndex: 999,
  },

  filterTypo: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.darkslateblue,
  },
  filt: {
    top: 4,
    right: 95,
    width: 70,
  },
  breadcrumbImage: {
    width: wp("4%"), // Adjust the width as needed
    height: hp("2%"), // Adjust the height as needed
    marginRight: wp("1%"), // Add margin to separate the image from text
    // Adjust the color of the image
  },

  breadcrumbSeparator: {
    fontSize: wp("4%"), // Adjust font size using wp
    color: "rgba(3, 29, 68, 1)", // Separator text color
    // paddingHorizontal: wp("1%"), // Add horizontal padding using wp to separate items
  },
  breadcrumbContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: hp("11%"), // Adjust this value as needed to move the breadcrumbs down // Set the background color to match the container's background
    // paddingLeft: wp("5%"), // Add padding to align with the content
    // paddingRight: wp("5%"), // Add padding to align with the content
  },
  breadcrumbText1: {
    fontSize: wp("3.5%"), // Adjust font size using wp
    color: Color.steelblue_100,
    fontFamily: FontFamily.poppinsMedium,
    marginTop: hp("0.7%"), // Breadcrumb text color
  },
  breadcrumbText: {
    fontSize: wp("3.5%"), // Adjust font size using wp
    color: "rgba(3, 29, 68, 1)",
    width: rem * 3,
    fontFamily: FontFamily.poppinsMedium,
    marginTop: hp("0.7%"), // Breadcrumb text color
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vehiclesChildPosition: {
    width: 380,
    left: 20,
    position: "absolute",
  },
  contView: {
    flex: 1,
  },
  rectangleParent18: {
    marginTop: screenWidth * 0.41,
    alignSelf: "center",
    backgroundColor: Color.steelblue_300,
  },
  rectangleLayout: {
    borderRadius: 6,
    paddingVertical: screenHeight * 0.016,
    paddingLeft: screenWidth * 0.07,
    paddingEnd: screenWidth * 0.03,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    textAlign: "left",
  },
  filterText: {
    left: -135,
    flex: 1,
    // top: 10,
    fontWeight: 700,
    fontFamily: FontFamily.poppinsSemibold,
    fontSize: FontSize.size_sm,
    color: "black",
    fontWeight: "500",
  },

  groupParentLayout: {
    height: 84,
    width: 229,
  },
  frameParentLayout: {
    height: 21,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    left: 28,
  },
  groupLayoutt: {
    alignItems: "flex-end",
    flex: 1,
    top: -10,
    position: "absolute",
  },
  groupInnerLayout: {},

  nameTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  text1Typo: {
    marginLeft: 5,
    color: Color.gray_200,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameIconPosition: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  groupContainerPosition: {
    top: 29,
    left: 0,
    position: "absolute",
  },
  addTypo: {
    flex: 1,
    color: "white",
  },
  filterPosition: {
    top: 2,
    position: "absolute",
  },

  frameGroupPosition: {
    height: 25,
    left: 0,
    position: "absolute",
  },
  groupIconPosition: {
    top: 3,
    position: "absolute",
  },
  innerLayout: {
    backgroundColor: Color.steelblue_300,
    width: 380,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  groupParentPosition: {
    left: 165,
    position: "absolute",
  },
  name1Clr: {
    color: Color.dimgray_200,
    textAlign: "left",
  },
  text2Typo: {
    color: Color.gray_300,
    marginLeft: 5,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  iconPosition: {
    left: 36,
    position: "absolute",
  },
  imageTypo: {
    color: Color.dimgray_100,
    left: 73,
    fontSize: FontSize.caption2Regular_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text5Typo: {
    fontSize: FontSize.caption2Regular_size,
    textAlign: "left",
    fontWeight: "500",
  },
  materialIconLayout: {
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
  },
  corollaTypo: {
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
    width: 500,
  },
  iconLayout2: {
    height: screenHeight * 0.04,
    width: screenWidth * 0.08,
  },
  iconLayout: {
    height: 153,
    width: 204,
    position: "absolute",
  },
  lightTexture22341Icon: {
    left: 2,
    width: 428,
    top: 0,
    position: "absolute",
    height: 932,
  },
  image2Icon: {
    top: 803,
    height: 129,
    display: "none",
  },
  groupChild: {
    backgroundColor: Color.gray_400,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 60,
    top: 0,
  },
  groupItem: {
    top: 15,
    left: 43,
    width: 340,
    height: 50,
    position: "absolute",
  },
  vehicles1: {
    top: "0%",
    left: "69.64%",
    textAlign: "center",
    color: Color.darkslateblue,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    position: "absolute",
  },
  vectorIcon: {
    height: "88.85%",
    width: "9.77%",
    top: "8.33%",
    right: "90.23%",
    bottom: "2.82%",
    left: "1%",
    position: "absolute",
  },
  vehiclesParent: {
    height: "38.1%",
    width: "52.09%",
    top: "30.16%",
    right: "42.79%",
    bottom: "31.75%",
    left: "5.12%",
    position: "absolute",
  },
  wrapper: {
    width: 49,
    height: 43,
    top: 59,
    left: 19,
    position: "absolute",
  },
  rectangleParent: {
    top: 35,
    height: 63,
  },
  vehiclesChild: {
    top: 247,
    backgroundColor: Color.darkslateblue,
    height: 143,
    borderRadius: Border.br_5xs,
    width: 392,
  },
  text: {
    top: 262,
    textAlign: "left",
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
    left: 166,
  },
  name: {
    textAlign: "left",
    color: Color.white,
  },
  shahzoreAsif: {
    width: 100,
  },
  nameParent: {
    top: 1,
    position: "absolute",
  },
  frameIcon: {
    width: 20,
    top: 0,
    overflow: "hidden",
  },
  frameParent: {
    width: 173,
    left: 0,
    top: 0,
  },
  contactParent: {
    flexDirection: "row",
    left: 28,
  },
  materialSymbolspermContactParent: {
    width: 214,
    height: 22,
  },
  sa2002: {
    width: 62,
  },
  registrationNumberParent: {
    flexDirection: "row",
    left: 28,
  },
  licensePlateNumberSvgrepoCIcon: {
    width: 20,
    top: 0,
    overflow: "hidden",
  },
  frameGroup: {
    width: 229,
    top: 59,
  },
  groupParent: {
    top: 291,
    left: 165,
    position: "absolute",
  },
  vehiclesItem: {
    top: 410,
    left: 24,
    height: 143,
  },
  civicX2020: {
    left: 1,
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
    top: 0,
  },
  name1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  tahaMir: {
    width: 100,
  },
  sa20021: {
    width: 62,
  },
  groupContainer: {
    height: 84,
    width: 229,
  },
  civicX2020Parent: {
    top: 425,
    height: 113,
    width: 229,
  },
  vehiclesInner: {
    top: 573,
    height: 143,
    left: 19,
  },
  landCruiserV8: {
    top: 588,
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
    left: 166,
  },
  frameParent1: {
    width: 175,
    left: 0,
    top: 0,
  },
  groupParent1: {
    top: 617,
    left: 165,
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: 79,
    width: 113,
    top: 588,
    height: 113,
  },
  image: {
    bottom: 279,
  },
  rectangleView: {
    top: 736,
    height: 143,
    left: 19,
  },
  suzukiMehranVxr: {
    top: 751,
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
    left: 166,
  },
  groupParent2: {
    top: 780,
    left: 165,
    position: "absolute",
  },
  image1: {
    bottom: 116,
  },
  homeMutedIcon: {
    width: rem * 0.6,
    height: rem * 0.6,
  },
  housefill: {
    width: 14,
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    left: 5,
    top: 0,
    position: "absolute",
  },
  elementPosition: {
    left: 22,
    justifyContent: "center",
    height: 20,
    top: 0,
    position: "absolute",
  },
  text5: {
    lineHeight: 17,
    fontFamily: FontFamily.caption2Regular,
    color: Color.textTxtPrimary,
  },
  vehicles2: {
    top: 0,
    left: 32,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.steelblue_100,
    textAlign: "left",
    position: "absolute",
  },
  breadcrumbs: {
    width: 88,
    top: 1,
  },
  materialSymbolsarrowRightAIcon: {
    left: 29,
    top: 0,
  },
  materialSymbolsarrowRightAIcon1: {
    top: 0,
    left: 33,
  },
  filter: {
    top: 2,
    position: "absolute",
    color: Color.Black,
    fontFamily: FontFamily.poppinsMedium,
    left: -110,
  },
  materialSymbolsarrowRightAParent: {
    left: 310,
    width: 48,
    top: 100,
  },
  breadcrumbsParent: {
    top: 110,
    width: 390,
    left: 19,
  },
  groupInner: {
    height: 55,
    left: 0,
    top: 0,
  },
  groupInnerr: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: Color.steelblue_300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: 0,
    borderRadius: Border.br_11xl,
  },
  corollaGli2015: {
    top: 14,
    left: 21,
    textAlign: "left",
    color: Color.darkslateblue,
  },

  vector: {
    left: "86.39%",
    top: "14.57%",
    right: "8.16%",
    bottom: "67.21%",
    width: "5.45%",
    height: "18.22%",
    position: "absolute",
  },
  corollaGli20151: {
    top: 87,
    left: 146,
    textAlign: "left",
    textTransform: "uppercase",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: screenWidth * 0.36,
    height: 111,
  },
  rectangleGroupp: {
    backgroundColor: Color.darkslateblue,
    paddingEnd: screenWidth * 0.06,
    paddingLeft: screenWidth * 0.06,
    paddingVertical: screenWidth * 0.02,
    borderRadius: 20,
    flex: 1,
  },
  groupIcon: {
    width: 372,
    left: 29,
    height: 43,
  },
  maskGroupIcon: {
    top: 47,
    left: 372,
    width: 31,
    height: 31,
    position: "absolute",
  },
  maskGroupIcon1: {
    top: 292,
    width: 18,
    height: 18,
    left: 166,
    position: "absolute",
  },
  vehiclesChild1: {
    top: 476,
    left: 102,
    width: 55,
    height: 10,
    position: "absolute",
  },
  image3Icon: {
    top: 259,
    left: 33,
  },
  image4Icon: {
    top: 416,
    left: 14,
  },
  ellipseIcon: {
    top: 433,
    width: 103,
    height: 103,
  },
  hondaCivicTurbo21Icon: {
    top: 320,
    left: 173,
    width: 286,
    height: 191,
    position: "absolute",
  },
  vehicles: {
    // backgroundColor: red,
    flex: 0.9,
    // overflow: "hidden",
    // width: "100%",
    // height: 932,
  },
});

export default Vehicles;
