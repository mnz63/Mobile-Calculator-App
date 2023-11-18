import { Flex, Button, Text, useColorModeValue, Pressable } from "native-base";
import { Dimensions, TouchableWithoutFeedback, View } from "react-native";

type Props = {
  label?: any;
  type: string;
  onPressNumber?: (label: number) => void;
  onClear?: () => void;
  onSetOperation?: (operation: string) => void;
  onDeleteDigit?: () => void;
};
export default function ButtonComponent({
  onPressNumber,
  label,
  type,
  onSetOperation,
  onClear,
  onDeleteDigit,
}: Props) {
  const backgroundColor = useColorModeValue("#2E2F38", "#FFF");
  const operatorBackgroundColor = useColorModeValue("#4E505F", "#D2D3DA");
  const textColor = useColorModeValue("#FFF", "#000");
  const getBackgroundColor = (type: string) => {
    if (type === "number" || type === "deleteDigit") {
      return backgroundColor;
    } else if (type === "operator") {
      return "#4B5EFC";
    } else {
      return operatorBackgroundColor;
    }
  };

  const margin = Dimensions.get("window").width / 35;

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        type === "clear"
          ? onClear()
          : type === "operator" || type === "operator2"
          ? onSetOperation(label)
          : type === "deleteDigit"
          ? onDeleteDigit()
          : onPressNumber(label)
      }
    >
      <View
        style={{
          minWidth:
            type === "clear"
              ? (Dimensions.get("window").width / 4.4) * 2
              : Dimensions.get("window").width / 4 - 15,
          minHeight: Dimensions.get("window").width / 4 - 20,
          borderRadius: 24,
          marginBottom: 20,
          marginRight: margin,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: getBackgroundColor(type),
        }}
      >
        <Text
          color={type === "operator" ? "#FFF" : textColor}
          fontSize={"30px"}
          fontWeight={400}
        >
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
