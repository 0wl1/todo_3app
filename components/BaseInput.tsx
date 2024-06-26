import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

interface BaseInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  error?: boolean | string;
  passwordEye?: boolean;
}

const BaseInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
  passwordEye,
}: BaseInputProps) => {
  const [secureText, setSecurityText] = useState(
    secureTextEntry ? secureTextEntry : false
  );

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        secureTextEntry={secureText}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{
          borderRadius: 100,
          paddingHorizontal: 25,
          paddingVertical: 15,
          marginHorizontal: 25,
          backgroundColor: error ? "rgba(255,0,0, 0.4)" : "#fff",
          fontSize: 13,
        }}
        placeholderTextColor={"rgba(0,0,0,0.8)"}
      />
      {error && (
        <Text
          style={{
            zIndex: 999,
            position: "absolute",
            left: 20,
            right: 60,
            textAlign: "center",
            fontSize: 10, 
          }}
        >
          {error}
        </Text>
      )}
      {passwordEye && (
        <TouchableOpacity
          onPress={() => setSecurityText(!secureText)}
          style={{
            height: "100%",
            width: 50,

            position: "absolute",
            right: 25,
            borderTopEndRadius: 100,
            borderBottomEndRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather
            name={secureText ? "eye" : "eye-off"}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BaseInput;
