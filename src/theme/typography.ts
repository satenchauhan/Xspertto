import { Platform } from "react-native"

/**
 * 
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The primary font.  Used in most places.
   */
   RCR: Platform.select({ ios: "RobotoCondensed-Regular", android: "RobotoCondensed-Regular" }),
   RCB: Platform.select({ ios: "RobotoCondensed-Bold", android: "RobotoCondensed-Bold" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
   RBTR: Platform.select({ ios: "Roboto-Regular", android: "Roboto-Regular" }),
   RBTB: Platform.select({ ios: "Roboto-Regular", android: "Roboto-Regular" }),

  /**
   * Lets get fancy with a monospace font!
   */
  // code: Platform.select({ ios: "RobotoCondensed-Regular", android: "RobotoCondensed-Regular" }),
}