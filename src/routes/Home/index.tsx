import { Flex, Stack, Text } from "native-base";
import ButtonsContainer from "../../components/ButtonsContainer";
import Display from "../../components/Display";
import ThemeButton from "../../components/ThemeButton";
import { useState, useEffect } from "react";
import { useAdminContext } from "../../common/context";

export default function Home() {
  const { isLightTheme } = useAdminContext();
  return (
    <Stack
      safeArea
      backgroundColor={isLightTheme ? "#FFF" : "#17171C"}
      w={"100%"}
      h={"100%"}
      justifyContent={"space-between"}
    >
      <ThemeButton />
      <Flex>
        <Display />
        <ButtonsContainer />
      </Flex>
    </Stack>
  );
}
