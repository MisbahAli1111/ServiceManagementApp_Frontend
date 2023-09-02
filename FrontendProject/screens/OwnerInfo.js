import * as React from "react";
import { useState,useEffect } from 'react';
import { Image } from "expo-image";
import { Picker } from "@react-native-picker/picker";
import { Modal,Dimensions,StyleSheet, Text, ScrollView, TextInput, View, Pressable, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
const windowWidth = Dimensions.get('window');
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {AntDesign} from '@expo/vector-icons';

const OwnerInfo = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [cnic, setcnic] = useState('');
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');
  const [userId, setUserId] = useState(null);

  const [EmailEror, setEmailError] = useState(false);
  const [LocationEror, setLocationError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  const [CPasswordError, setCPasswordError] = useState(false);
  const [NoError, setNoError] = useState(false);
  const [PLEror, setPLError] = useState('');
  const [NumberEror, setNumberError] = useState(false);
  const [ErrorM, setErrorM] = useState(false);
  const [LPasswordError, setLPasswordError] = useState(false);
  const [CError, setCError] = useState('');
  const [NameEror, setNameError] = useState(false);
  const [CNICEror, setCNICError] = useState(false);


  const [nameFocused, setNameFocused] = useState(false);
  const [cnicFocused, setcnicFocused] = useState(false);
  const [emailFocused, setemailFocused] = useState(false);
  const [PasswordFocused, setPasswordFocused] = useState(false);
  const [ConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  const [countryCodeFocused, setCountryCodeFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isImageModalVisible,setImageModalVisible]= useState('false');
  const [isFullImageModalVisible, setFullImageModalVisible] = useState(false);
  const countryCodes = ["AF", "AL", "DZ", "AD", "AO", "AG", "AR", "AM", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BT", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CD", "CR", "HR", "CU", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "DE", "GH", "GR", "GD", "GT", "GN", "GW", "GY", "HT", "HN", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "CI", "JM", "JP", "JO", "KZ", "KE", "KI", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NZ", "NI", "NE", "NG", "KP", "NO", "OM", "PK", "PW", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "QA", "RO", "RU", "RW", "KN", "LC", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "SS", "ES", "LK", "SD", "SR", "SZ", "SE", "CH", "SY", "TJ", "TZ", "TH", "TL", "TG", "TO", "TT", "TN", "TR", "TM", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "YE", "ZM", "ZW"];

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleImageUpload = () => {
    setImageModalVisible(true);
  };
  
  const handleShowProfile = () =>{
    if (profileImage) {
      setFullImageModalVisible(true);
    }
  }; 

  const handleImageFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
    

    setImageModalVisible(false);
  };

  const handleImageFromGallery = async () => {
    // ... (handleImageUpload logic remains the same)
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
    setImageModalVisible(false);
  };
    
    
    
    
  

  const uploadImage = async (userId) =>{
    console.log(userId);
    const imageData = new FormData();
    imageData.append('files', {
       uri: profileImage,
       name: new Date + "_profile"+".jpeg",
       type: 'image/jpeg', // Adjust the MIME type as needed
     });
    
    console.log("formData: " ,imageData );
    


    const response = await axios.post(
      `http://192.168.100.71:8080/api/file/upload/profile/${userId}`, // Change the endpoint as needed
      imageData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: accessToken, // Add your authorization token if required
        },
      }
    );

    console.log('Upload response:', response.data);
    console.log('Success', 'Files uploaded successfully');
    };
    
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCodeSelect = (code) => {
    setSelectedCode(code);
    setShowDropdown(false);
  };

  const handleSignUp = () => {

    let hasErrors = false;
    setErrorM(false);
    if (!name) {
      setNameError(true);
      hasErrors = true;
    } else {
      setNameError(false);
    }

    if (!cnic) {
      setCNICError(true);
      hasErrors = true;
    } else {
      setCNICError(false);
    }

    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      hasErrors = true;
    } else {
      setEmailError(false);
    }

    if (!selectedCode) {
      setPLError('Please select Country Code');
      setNumberError(true);
      hasErrors = true;
    } else {
      if (!phoneNumber) {
        hasErrors = true;
        setNumberError(true);
        setPLError('Please provide Contact Number');

      } else {
        setNumberError(false);
      }
    }

    if (!Password) {
      setPasswordError(true);
      hasErrors = true;
    } else {
      setPasswordError(false);
    }

    if (!ConfirmPassword) {
      setCPasswordError(true);
      setCError('Please provide Confirm password');
      hasErrors = true;
    } else {
      if (Password !== ConfirmPassword) {
        setCPasswordError(true);
        setLPasswordError(true);
        setCError('Password and Confirm Password do not match');
        hasErrors = true;
      } else {
        setLPasswordError(false);
        setCPasswordError(false);
      }
    }


    if (!hasErrors) {
      let data = JSON.stringify({
        "firstName": name,
        "lastName": name,
        "phoneNumber": phoneNumber,
        "cnicNumber": cnic,
        "countryCode":selectedCode,
        "email": email,
        "password": Password
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://192.168.100.71:8080/api/users/register/owner',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data.status === 'OK') {
          
            const createdUserId = response.data.data;
            console.log(response.data.data);
            setUserId(createdUserId);
            
           
            if (createdUserId) {
              uploadImage(createdUserId);
            }
            navigation.navigate('Login');
          }
        })
        .catch((error) => {
          setErrorM(true);
          setErrorMessage("Email Already Exist!");
        });
    }



  };

  return (
    <View style={styles.ownerInfo}>
      <Image
        style={[styles.lightTexture22341Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/light-texture2234-1.png")}
      />
      <Text
        style={[styles.letsRegister, styles.letsPosition]}
      >{`Let’s Register `}</Text>
      <Text style={[styles.letsLevelUp, styles.letsPosition]}>
        Let’s level up your business, together.
      </Text>

      <View style={styles.profileImageContainer}>
      <TouchableOpacity onPress={handleShowProfile}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            
            <View style={styles.profileImagePlaceholder}>
            </View>
            
          )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleImageUpload}  style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isFullImageModalVisible}
          onRequestClose={() => setFullImageModalVisible(false)}
        >
          <View style={styles.imageModalContainer}>
          <View style={styles.fullImageContainer}>
            {profileImage && (
              <Image
                source={{ uri: profileImage }}
                style={styles.fullImage}
              />
            )}
            </View>
            <TouchableOpacity
              style={styles.imageModalButton2}
              onPress={() => setFullImageModalVisible(false)}
            >
              <Text style={styles.imageModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
  animationType="slide"
  transparent={true}
  visible={isImageModalVisible}
  onRequestClose={() => setImageModalVisible(false)}
>
  <View style={styles.imageModalContainer}>
    {/* Background Close Button */}
    <TouchableOpacity
      onPress={() => setImageModalVisible(false)}
      style={styles.closeButton}
    >
      <AntDesign name="closecircle" size={30} color="rgba(3, 29, 68, 1)" />
    </TouchableOpacity>

    {/* Content */}
    <View style={styles.imageModalContent}>
      {/* Image Source Options */}
      <TouchableOpacity style={styles.imageModalButton} onPress={handleImageFromCamera}>
        <Text style={styles.imageModalButtonText}>Take a Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageModalButton1} onPress={handleImageFromGallery}>
        <Text style={styles.imageModalButtonText}>Choose from Gallery</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>



      <View style={styles.wrap}>

        <View style={styles.contwwrap}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-1.png")}
          />
          <TextInput style={[
           NameEror ? styles.davidDanielR :styles.davidDaniel
            , styles.registerTypo1]}
            placeholder="Name"
            value={name}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
            onChangeText={setName}
          />
        </View>
        {NameEror ? <Text style={styles.nameError}>Please Enter a Valid Name</Text> : null}
        <View style={styles.contwwrap}>

          <TextInput style={[
           CNICEror ? styles.davidDanielcR :styles.davidDanielc
          , styles.registerTypo1]}
            placeholder="CNIC Number"
            value={cnic}
            keyboardType="numeric"
            maxLength={13}
            onFocus={() => setcnicFocused(true)}
            onBlur={() => setcnicFocused(false)}
            onChangeText={setcnic}
          />
        </View>
        {CNICEror ? <Text style={styles.nameError}>Please Enter a Valid CNIC number</Text> : null}

        <View style={styles.contwwrap}>
          <Image
            style={[styles.phone1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phone-1.png")}
          />
          <TextInput style={[
           NumberEror ? styles.pkR : styles.pk
            , styles.registerTypo1]}
            placeholder='PK'
            value={selectedCode}
            editable={false}
          />
          <Pressable
            style={styles.countryCode}
            onPress={toggleDropdown}
          >
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector-12.png")}
            />
          </Pressable>
          {(
            <View style={styles.code} >
              <Picker
                selectedValue={selectedCode}
                onValueChange={(itemValue) => handleCodeSelect(itemValue)}
              >
                <Picker.Item label="Select Country Code" value="" />
                {countryCodes.map((code) => (
                  <Picker.Item key={code} label={code} value={code} />
                ))}
              </Picker>
            </View>
          )}
          <TextInput style={[
           NumberEror ? styles.davidDanielpR : styles.davidDanielp
            , styles.registerTypo1]}
            placeholder="Phone Number"
            value={phoneNumber}
            keyboardType="numeric"
            maxLength={11}
            onFocus={() => setPhoneNumberFocused(true)}
            onBlur={() => setPhoneNumberFocused(false)}
            onChangeText={setPhonenumber}
          />
        </View>
        {NumberEror ? <Text style={styles.nameError}>{PLEror}</Text> : null}
        <View style={styles.contwwrap}>
          <Image
            style={[styles.atSign1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/atsign-1.png")}
          />
          <TextInput style={[
          EmailEror ? styles.davidDanieleR : styles.davidDaniele
          , styles.registerTypo1]}
            placeholder="Email"
            value={email}
            onFocus={() => setemailFocused(true)}
            onBlur={() => setemailFocused(false)}
            onChangeText={setemail}

          />
        </View>
        {EmailEror ? <Text style={styles.nameError}>Please Provide Valid Email</Text> : null}
        <View style={styles.contwwrap}>
          <Image
            style={[styles.key1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/key-1.png")}
          />
          <TextInput style={[
           PasswordError ? styles.davidDanieleR : styles.davidDaniele
            , styles.registerTypo1]}
            placeholder="Passwod"
            secureTextEntry={passwordVisible}
            value={Password}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            onChangeText={setPassword}
          />
          <Pressable
            onPress={
              () => { setPasswordVisible((prev) => !prev); }
            }>
            <Image

              style={[styles.vectorIcon1, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </Pressable>
        </View>
        {PasswordError ? <Text style={styles.nameError}>Please provide Password</Text> : null}
        <View style={styles.contwwrap}>
          <Image
            style={[styles.key1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/key-1.png")}
          />
          <TextInput style={[
           CPasswordError ? styles.davidDanieleR : styles.davidDaniele
            , styles.registerTypo1]}
            placeholder="Confirm Password"
            secureTextEntry={ConfirmPasswordVisible}
            value={ConfirmPassword}
            onFocus={() => setConfirmPasswordFocused(true)}
            onBlur={() => setConfirmPasswordFocused(false)}
            onChangeText={setConfirmPassword}
          />
          <Pressable
            onPress={
              () => { setConfirmPasswordVisible((prev) => !prev); }
            }
          >
            <Image
              style={[styles.vectorIcon2, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </Pressable>
        </View>
        {CPasswordError ? <Text style={styles.nameError}>{CError}</Text> : null}
      {ErrorM ? <Text style={styles.nameError}>{errorMessage}</Text> : null} 

      </View>








      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={handleSignUp}
      >
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-166.png")}
        />
        <Text style={[styles.register, styles.registerTypo]}>Register</Text>
      </Pressable>





    </View>
  );
      };  


const styles = StyleSheet.create({
  iconPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  nameError: {
    marginLeft: 30,
    color: 'red',
  },
  contwwrap: {
    flexDirection: 'row',
  },
  numberError: {
    top: -180,
    marginLeft: 30,
    marginBottom: 5,
    color: 'red',
    // position:'relative',
  },
  passwordError: {
    top: -90,
    marginLeft: 30,
    marginBottom: 2,
    color: 'red',
    // position:'relative',
  },
  cError: {
    top: -95,
    marginLeft: 30,
    marginBottom: 2,
    color: 'red',
    // position:'relative',
  },
  emailError: {
    top: -170,
    marginLeft: 30,
    marginBottom: 5,
    color: 'red',
    // position:'relative',
  },
  cnicError: {
    marginTop: 40,
    marginLeft: 30,
    marginBottom: -35,
    color: 'red',
  },
  registerTypo1: {
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  david1Typo: {
    height: "3%",
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: "15.00%",
    position: "relative",
  },
  code:
  {
    width: 80,
    left: -50,
  },

  textTypo: {
    height: "2.9%",

    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,


  },
  wrap: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'left', 
    top:0,
    paddingBottom: '10%',
    paddingHorizontal: '5%',
  },
  davidDanielpR: {
    width: "30%",
    marginLeft: -60,
    alignContent: 'flex-start',
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginBottom: 10,
    width: '72%',
    fontSize: 15,
    padding: 6,
  },
  davidDanieleR: {
    width: "30%",
    marginLeft: 4,
    alignContent: 'flex-start',
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginBottom: 10,
    width: '90%',
    fontSize: 15,
    padding: 6,
  },
  davidDanielcR: {
    width: "30%",
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "red",
    paddingLeft:15,
    marginBottom: 10,
    width: '97%',
    fontSize: 15,
    padding: 6,
  },
  davidDanielR: {
    width: "30%",
    paddingLeft: 10,
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "red",
    marginBottom: 10,
    width: '93%',
    fontSize: 15,
    padding: 6,
  },
  pkR: {
    color: Color.textTxtPrimary,
    left: 8,
    width: '8%',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
  ownerChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "4.65%",

    width: "90.7%",
    height: "0.22%",
    left: "4.65%",
    position: "relative",
    borderTopWidth: 2,

    borderStyle: "solid",
    overflow: "hidden",
  },
  textPosition: {
    left: "28.12%",
    top: -168,
    width: "41.16%",
    height: "3%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    position: "relative",
  },
  pkPosition: {
    height: "10%",
    width: "20%",
    right: "85.19%",
    bottom: "62.51%",
    left: "0.23%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "relative",
    overflow: "hidden",
  },
  vectorIconLayout: {

  },
  countryCode: {
    height: 20,
    width: 20,
  },
  registerTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  letsPosition: {
    left: "5.10%",
    textAlign: "left",
    color: Color.darkslateblue,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 10,
    left: -25,
    width: 20,
    position: "relative",
  },
  groupLayout: {
    height: 45,
    width: 391,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,

    // position: "relative",
    // overflow: "hidden",
  },
  lightTexture22341Icon: {
    top: 0,
    width: 430,
    height: 932,
  },
  davidDaniel: {
    width: "30%",
    paddingLeft: 10,
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#60b9d1",
    marginBottom: 10,
    width: '93%',
    fontSize: 15,
    padding: 6,
  },
  pk: {
    color: Color.textTxtPrimary,
    left: 8,
    width: '8%',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#60b9d1",
  },
  davidDanielp: {
    width: "30%",
    marginLeft: -60,
    alignContent: 'flex-start',
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#60b9d1",
    marginBottom: 10,
    width: '75%',
    fontSize: 15,
    padding: 6,
  },
  davidDaniele: {
    width: "30%",
    marginLeft: 4,
    alignContent: 'flex-start',
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#60b9d1",
    marginBottom: 10,
    width: '90%',
    fontSize: 15,
    padding: 6,
  },
  davidDanielc: {
    width: "30%",
    paddingLeft: 20,
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#60b9d1",

    marginBottom: 10,
    width: '95%',
    fontSize: 15,
    padding: 6,
  },
  daviddaniel33outlookcom: {
    width: "55.81%",

  },
  david: {
    width: "20.7%",
    top: "-6.50%",
  },
  david1: {
    width: "38.84%",
    top: "-9.00%",
  },
  text: {

    textAlign: "left",
    borderBottomWidth: 2,
    borderBottomColor: "#60b9d1",
    marginBottom: 20,
    width: '80%',
    fontSize: 16,
    padding: 8,
  },
  ownerInfoChild: {
    bottom: "60.3%",
    borderColor: "#cbcbcb",
  },
  ownerInfoChildR: {
    bottom: "60.3%",
    borderColor: 'red',
  },
  ownerInfoItem: {
    top: 38,
    bottom: "40.14%",
    borderColor: "#cbcbcb",
  },
  ownerInfoItemR: {
    top: 38,
    bottom: "40.14%",
    borderColor: "red",
  },
  ownerInfoInner: {
    top: "-17.55%",
    bottom: "33.23%",
    borderColor: "#cbcbcb",
  },
  ownerInfoInnerR: {
    top: "-17.55%",
    bottom: "33.23%",
    borderColor: "red",
  },
  lineIcon: {
    top: "-18.86%",
    bottom: "27.33%",
    borderColor: "#cbcbcb",
  },
  lineIconR: {
    top: "-18.86%",
    bottom: "27.33%",
    borderColor: "red",
  },
  ownerInfoChild1: {
    top: "-10.00%",
    bottom: "53.95%",
    borderColor: "#cbcbcb",
  },
  ownerInfoChild1R: {
    top: "-10.00%",
    bottom: "53.95%",
    borderColor: "red",
  },
  ownerInfoChild2: {
    top: "-10.72%",
    bottom: "47.05%",
    borderColor: "#cbcbcb",
  },
  ownerInfoChild2R: {
    top: "-10.72%",
    bottom: "47.05%",
    borderColor: "red",
  },
  text1: {
    color: "#0096c7",
  },

  vectorIcon: {

  },
  text2: {
    color: Color.darkslateblue,
  },
  pk1: {
    color: Color.darkslateblue,
  },
  ownerInfoChild3: {
    right: "76.82%",
    left: "19.37%",
  },
  ownerInfo1: {
    height: "3.54%",
    width: "37.21%",
    top: "17.15%",
    left: "31.4%",
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.darkslateblue,
  },
  letsRegister: {
    top: "15.00%",
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
  },
  letsLevelUp: {
    height: "2.58%",
    width: "68.6%",
    top: "18.90%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: "4.65%",
  },
  vectorIcon1: {
    height: 15,

  },
  touchableOpacity: {
    position: 'absolute',
    left: 360,
    width: 20,
    height: 20,
    top: 590,

  },

  vectorIcon2: {
    height: 15,
    top: -110,

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
  groupIcon: {
    top: 0,
    height: 80,
  },
  groupChild: {
    left: 0,
    width: 391,
    top: 0,
  },
  register: {
    top: 11,
    left: 157,
    color: "#fffdfd",
    width: 76,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  groupParent: {
    top: 810,
    left: 10,
  },
  atSign1Icon: {
    top: 10,
    marginLeft: 4,
  },
  phone1Icon: {
    top: 15,
  },
  key1Icon: {
    top: 6,
    marginLeft: 5,
  },
  // key2Icon: {
  //   top: 650,
  // },
  user1Icon: {
    top: 10,
  },
  ownerInfoChild5: {
    top: 3,
    left: 29,
    width: 372,
    height: 43,
    position: "absolute",
  },
  ownerInfo: {
    backgroundColor: Color.white,
    flex: 1,
    // width: "100%",
    overflow: "hidden",
    justifyContent: 'center',
    height: 932,
    position: 'relative',
  },
  profileImageContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    top:120,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeInput: {
    top: 4,
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1.5,
    borderColor: 'rgba(203, 203, 203, 1)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  phonePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  SelectedPickerItem: {
    fontWeight: 'bold',
  },
  SelectedPickerItem1: {
    fontWeight: '100',
  },
  phoneInput: {
    flex: 3,
    borderBottomWidth: 1.5,
    borderColor: 'rgba(203, 203, 203, 1)',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 200,
  },
  button: {
    backgroundColor: 'rgba(3, 29, 68, 1)',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  pickerContainer: {
    width: 30,
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  imageModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    // position: 'absolute',
    top: heightPercentageToDP('4%'), // Adjust the percentage as needed
    left: widthPercentageToDP('35%'), // Adjust the percentage as needed
    zIndex: 999,
  },
  imageModalContent: {
    backgroundColor: 'white',
    padding: widthPercentageToDP('4%'), // Adjust the percentage as needed
    borderRadius: widthPercentageToDP('2%'), // Adjust the percentage as needed
    width: widthPercentageToDP('80%'), // Adjust the percentage as needed
    alignItems: 'center',
    height: heightPercentageToDP('30%')
  },
  imageModalButton: {
    backgroundColor: 'rgba(3, 29, 68, 1)',
    padding: heightPercentageToDP('1.5%'), // Adjust the percentage as needed
    borderRadius: widthPercentageToDP('1%'), // Adjust the percentage as needed
    marginVertical: heightPercentageToDP('0%'), // Adjust the percentage as needed
    width: '100%',
    alignItems: 'center',
    marginTop:heightPercentageToDP('6%'),
  },
  imageModalButton1: {
    backgroundColor: 'rgba(3, 29, 68, 1)',
    padding: heightPercentageToDP('1.5%'), // Adjust the percentage as needed
    borderRadius: widthPercentageToDP('1%'), // Adjust the percentage as needed
    marginVertical: heightPercentageToDP('0%'), // Adjust the percentage as needed
    width: '100%',
    alignItems: 'center',
    marginTop:heightPercentageToDP('2%'),
  },
  imageModalButton2: {
    backgroundColor: 'rgba(3, 29, 68, 1)',
    padding: heightPercentageToDP('1.5%'), // Adjust the percentage as needed
    borderRadius: widthPercentageToDP('2%'), // Adjust the percentage as needed
    marginVertical: heightPercentageToDP('1%'), // Adjust the percentage as needed
    width: '100%',
    alignItems: 'center',
    marginTop:heightPercentageToDP('1%'),
  },
  imageModalButtonText: {
    color: 'white',
    fontSize: widthPercentageToDP('4%'), // Adjust the percentage as needed
  },
  fullImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%', 
    width: '100%',// Adjust this value as needed
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  uploadButton: {
    backgroundColor: Color.darkslateblue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  uploadButtonText: {
    color: Color.white,
    fontSize: FontSize.size_base,
  },
});

export default OwnerInfo