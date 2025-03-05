import React from "react";
import dribbbleLogo1 from "../assets/images/dribbble-logo-1.svg";
import envelopeOpen1 from "../assets/images/envelope-open-1.svg";
import linkedinLogo1 from "../assets/images/linkedin-logo-1.svg";
import logoInstagram1 from "../assets/images/logo-instagram-1.svg";
import styles from "../assets/styles/Styles";
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default Contact = () => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.sayHelloText}>Say hello and let's work together!</Text>
      <View style={styles.emailTextbox}>
        <Text style={styles.emailLabel}>Email</Text>
        <Text style={styles.textWrapperEmail}>Your email address</Text>
      </View>
      <View style={styles.descriptionTextbox}>
        <Text style={styles.descriptionTextWrapper}>Describe your project</Text>
      </View>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.submitTextWrapper}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.socialIcons}>
        <Image style={styles.socialIcon} source={logoInstagram1} />
        <Image style={styles.socialIcon} source={dribbbleLogo1} />
        <Image style={styles.socialIcon} source={linkedinLogo1} />
        <Image style={styles.socialIcon} source={envelopeOpen1} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>•Sitemap</Text>
        <Text style={styles.footerText}>© 2024</Text>
        <Text style={styles.footerText}>•Privacy</Text>
        <Text style={styles.footerText}>•Terms</Text>
      </View>
    </View>
  );
};