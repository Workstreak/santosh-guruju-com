import React from "react";
import dribbbleLogo1 from "../assets/images/dribbble-logo-1.svg";
import envelopeOpen1 from "../assets/images/envelope-open-1.svg";
import linkedinLogo1 from "../assets/images/linkedin-logo-1.svg";
import logoInstagram1 from "../assets/images/logo-instagram-1.svg";
import resizingHandle from "../assets/images/resizing-handle.svg";
import styles from "../assets/styles/Styles";

import { View, Text, TouchableOpacity, Image } from 'react-native';

export default Contact = () => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.sayHelloText}>Say hello and let's work together!</Text>

      <View style={styles.emailTextbox}>
        <View style={styles.emailOverlap}>
          <Text style={styles.emailLabel}>Email</Text>
          <View style={styles.emailOverlapGroupWrapper}>
            <View style={styles.emailOverlapGroup}>
              <Text style={styles.textWrapperEmail}>Your email address</Text>
            </View>
          </View>
          
        </View>
      </View>

      <View style={styles.descriptionTextbox}>
        <View style={styles.descriptionOverlap}>
          <View style={styles.descriptionOverlapGroupWrapper}>
            <View style={styles.descriptionOverlapGroup}>
              <Text style={styles.descriptionTextWrapper}>Describe your project</Text>
              <Image
                style={styles.resizingHandle}
                source={resizingHandle}
              />
            </View>
          </View>
          <Text style={styles.textWrapperMessage}>Input your message</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.submitTextWrapper}>Submit</Text>
      </TouchableOpacity>

      <Image
        style={styles.logoInstagram}
        source={logoInstagram1}
      />
      <Image
        style={styles.dribbbleLogo}
        source={dribbbleLogo1}
      />
      <Image
        style={styles.linkedinLogo}
        source={linkedinLogo1}
      />
      <Image
        style={styles.envelopeOpen}
        source={envelopeOpen1}
      />

      <View style={styles.contactOverlapFooter}>
        <Text style={styles.sitemapTextWrapper}>•Sitemap</Text>
      </View>
      <Text style={styles.yearTextWrapper}>© 2024</Text>
      <Text style={styles.privacyTextWrapper}>•Privacy</Text>
      <Text style={styles.termsTextWrapper}>•Terms</Text>
    </View>
  );
};