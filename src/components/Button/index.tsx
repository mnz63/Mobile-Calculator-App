import { Flex, Button, Text } from "native-base";
import { Dimensions } from "react-native";

type Props = {
  label?: any;
  icon?: any;
  type?: string;
};
export default function ButtonComponent({ icon, label, type }: Props) {
  return (
    <Flex>
      <Button
        minWidth={Dimensions.get("window").width / 5.3}
        minHeight={Dimensions.get("window").width / 5.3}
        borderRadius={"24px"}
        marginBottom={"20px"}
        marginRight={"20px"}
        onPress={() => console.log("sim")}
        backgroundColor={
          type === "number"
            ? "#2E2F38"
            : type === "operator"
            ? "#4B5EFC"
            : "#4E505F"
        }
      >
        <Text color={"#FFF"} fontSize={"30px"} fontWeight={400}>
          {label}
        </Text>
      </Button>
    </Flex>
  );
}
