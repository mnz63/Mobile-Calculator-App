import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/routes/Home";
import { customTheme } from "./src/common/utils/theme";
import {
  useFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
} from "@expo-google-fonts/work-sans";
import { Provider } from "./src/common/context";

export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NativeBaseProvider theme={customTheme}>
      <Provider>
        <Home />
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
