import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const BusinessInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.businessInfo}>
      <Image
        style={[styles.lightTexture22341Icon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/light-texture2234-1.png")}
      />
      <Text style={[styles.davidDaniel, styles.davidDanielTypo]}>
        David Daniel
      </Text>
      <Text style={[styles.daviddaniel33outlookcom, styles.davidDanielTypo]}>
        daviddaniel33@outlook.com
      </Text>
      <Image
        style={[styles.businessInfoChild, styles.businessChildLayout]}
        contentFit="cover"
        source={require("../assets/line-11.png")}
      />
      <Image
        style={[styles.businessInfoItem, styles.businessChildLayout]}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Image
        style={[styles.businessInfoInner, styles.businessChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={styles.text}>+92 (345) 123-3234</Text>
      <Text style={[styles.pk, styles.pkPosition]}>{`PK `}</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.pk1, styles.pkPosition]}>{`PK `}</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-21.png")}
      />
      <Image
        style={[styles.businessInfoInner, styles.businessChildLayout]}
        contentFit="cover"
        source={require("../assets/line-31.png")}
      />
      <Text style={[styles.h218GulshanKarachi, styles.davidDanielTypo]}>
        1 H2/18 Gulshan karachi
      </Text>
      <Image
        style={[styles.businessInfoChild2, styles.businessChildLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.businessInfoChild3, styles.businessChildLayout]}
        contentFit="cover"
        source={require("../assets/line-71.png")}
      />
      <Text style={[styles.karachi, styles.karachiTypo]}>{`Karachi `}</Text>
      <Image
        style={[styles.businessInfoChild4, styles.businessChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-6.png")}
      />
      <Text style={[styles.pakistan, styles.karachiTypo]}>{`Pakistan `}</Text>
      <Image
        style={[styles.businessInfoChild5, styles.businessChildPosition]}
        contentFit="cover"
        source={require("../assets/vector-7.png")}
      />
      <Text style={[styles.businessInfo1, styles.nextTypo]}>Business Info</Text>
      <Text
        style={[styles.letsRegister, styles.letsPosition]}
      >{`Let’s Register `}</Text>
      <Text style={[styles.letsLevelUp, styles.letsPosition]}>
        Let’s level up your business, together.
      </Text>
      <View style={styles.rectangleView} />
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("OwnerInfo")}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-166.png")}
        />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </Pressable>
      <Image
        style={[styles.mapPin1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mappin-1.png")}
      />
      <Image
        style={[styles.user1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.atSign1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/atsign-1.png")}
      />
      <Image
        style={[styles.phone1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/phone-1.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-102.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  davidDanielTypo: {
    height: 28,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 56,
    position: "absolute",
  },
  businessChildLayout: {
    height: 2,
    width: 390,
    left: 20,
    position: "absolute",
  },
  pkPosition: {
    width: 22,
    height: 27,
    top: 586,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 56,
    position: "absolute",
  },
  karachiTypo: {
    top: 519,
    height: 27,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  businessChildPosition: {
    top: 528,
    height: 10,
    width: 16,
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  letsPosition: {
    left: 20,
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 391,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  lightTexture22341Icon: {
    width: 430,
    position: "absolute",
    height: 932,
    top: 0,
  },
  davidDaniel: {
    top: 329,
    width: 181,
  },
  daviddaniel33outlookcom: {
    top: 393,
    width: 231,
  },
  businessInfoChild: {
    top: 367,
  },
  businessInfoItem: {
    top: 432,
  },
  businessInfoInner: {
    top: 624,
  },
  text: {
    left: 109,
    width: 176,
    height: 27,
    top: 586,
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  pk: {
    color: Color.textTxtPrimary,
  },
  vectorIcon: {
    top: 595,
    left: 83,
    height: 10,
    width: 16,
    position: "absolute",
  },
  pk1: {
    color: Color.darkslateblue,
  },
  h218GulshanKarachi: {
    width: 282,
    top: 455,
  },
  businessInfoChild2: {
    top: 496,
  },
  businessInfoChild3: {
    top: 560,
  },
  karachi: {
    width: 71,
    left: 56,
    top: 519,
  },
  businessInfoChild4: {
    left: 131,
  },
  pakistan: {
    left: 165,
    width: 78,
  },
  businessInfoChild5: {
    left: 247,
  },
  businessInfo1: {
    top: 281,
    left: 135,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    width: 160,
    color: Color.darkslateblue,
  },
  letsRegister: {
    top: 133,
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
  },
  letsLevelUp: {
    top: 177,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 20,
  },
  rectangleView: {
    top: 917,
    left: 138,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.textTxtPrimary,
    width: 154,
    height: 6,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  next: {
    top: 11,
    left: 174,
    color: Color.white,
    width: 41,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  groupParent: {
    top: 845,
    left: 19,
  },
  mapPin1Icon: {
    top: 455,
  },
  user1Icon: {
    top: 333,
  },
  atSign1Icon: {
    top: 397,
  },
  phone1Icon: {
    top: 591,
  },
  groupIcon: {
    top: 3,
    left: 30,
    width: 372,
    height: 44,
    position: "absolute",
  },
  businessInfo: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
  },
});

export default BusinessInfo;
