import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { useColorModeValue } from "native-base";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  const bg = useColorModeValue("#17171C", "#F1F2F3");
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          statusBarStyle: "inverted",
          statusBarColor: bg,
        }}
        initialRouteName={"HOME"}
      >
        <Stack.Screen name={"HOME"} component={Home} />
      </Stack.Navigator>
    </>
  );
};
