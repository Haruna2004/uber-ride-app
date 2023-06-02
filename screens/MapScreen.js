import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import Map from "../src/components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../src/components/NavigateCard";
import RideOptionsCard from "../src/components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
