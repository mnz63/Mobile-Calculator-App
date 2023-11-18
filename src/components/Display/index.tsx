import { Flex, VStack, Text, useColorModeValue } from "native-base";

type Props = {
  displayValue?: string | number;
  operationHistory?: string;
};
export default function Display({ displayValue, operationHistory }: Props) {
  const color = useColorModeValue("#FFF", "#000");

  return (
    <VStack w={"100%"} marginBottom={"0px"}>
      <Flex h={"47px"} alignItems={"flex-end"} justifyContent={"center"}>
        <Text fontSize={"40px"} color={"#2E2F38"} fontWeight={300}>
          {operationHistory}
        </Text>
      </Flex>
      <Flex h={"96px"} alignItems={"flex-end"} justifyContent={"center"}>
        <Text fontSize={"80px"} color={color} fontWeight={300}>
          {displayValue}
        </Text>
      </Flex>
    </VStack>
  );
}
