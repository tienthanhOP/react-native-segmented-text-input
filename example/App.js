import React, {useState} from "react";
import PropTypes from "prop-types";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SegmentedTextInput, {PATTERN_MENTION} from "react-native-segmented-text-input";

const styles = StyleSheet.create({
  container: { padding: 15 },
});

export default () => {
  const [value, onChange] = useState(['', [["@cawfree", PATTERN_MENTION]]]);
  const [_, {length: numberOfSegments}] = value;
  console.warn(`Number of segments: ${numberOfSegments}.`);
  return (
    <SafeAreaView
    >
      <View
        style={styles.container}
      >
        <SegmentedTextInput
          value={value}
          onChange={onChange}
          onSuggest={() => new Promise(resolve => setTimeout(resolve, 200))
            .then(() => [
              "@some",
              "@fake",
              "@suggestions",
            ])}
        />
      </View>
    </SafeAreaView>
  );
};
