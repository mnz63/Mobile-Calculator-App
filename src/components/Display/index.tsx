import { Flex, VStack, Text } from "native-base";

export default function Display() {
  return (
    <VStack w={"100%"} marginBottom={"10px"}>
      <Flex h={"47px"} alignItems={"flex-end"} justifyContent={"center"}>
        <Text fontSize={"40px"} color={"#2E2F38"} fontWeight={300}>
          1235+25
        </Text>
      </Flex>
      <Flex h={"96px"} alignItems={"flex-end"} justifyContent={"center"}>
        <Text fontSize={"80px"} color={"#FFF"} fontWeight={300}>
          1,233.4
        </Text>
      </Flex>
    </VStack>
  );
}
