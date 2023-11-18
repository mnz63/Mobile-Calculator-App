import { Stack, useColorModeValue } from "native-base";
import ButtonsContainer from "../../components/ButtonsContainer";
import ThemeButton from "../../components/ThemeButton";

export default function Home() {
  const bg = useColorModeValue("#17171C", "#F1F2F3");
  return (
    <Stack
      safeArea
      backgroundColor={bg}
      w={"100%"}
      h={"100%"}
      justifyContent={"space-between"}
    >
      <ThemeButton />

      <ButtonsContainer />
    </Stack>
  );
}
