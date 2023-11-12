import { Button, Center, Flex } from "native-base";
import { useState } from "react";
import Svg, { Path, G } from "react-native-svg";
import { Switch } from "react-native-switch";
import { useAdminContext } from "../../common/context";
export default function ThemeButton() {
  const LightIcon = () => {
    return (
      <Svg width="24" height="24" viewBox="0 0 72 72" fill="none">
        <G id="sun" opacity="0.7">
          <Path
            id="Union"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39 6V9V15V18H33V15V9V6H39ZM6 33H9H15H18V39H15H9H6V33ZM57 33H54V39H57H63H66V33H63H57ZM39 54V57V63V66H33V63V57V54H39ZM52.9705 57.2134L55.0919 59.3347L59.3345 55.092L57.2132 52.9707L52.9705 48.7281L50.8492 46.6068L46.6066 50.8494L48.7279 52.9707L52.9705 57.2134ZM21.1507 25.3935L19.0294 23.2722L14.7867 19.0296L12.6654 16.9082L16.9081 12.6656L19.0294 14.7869L23.272 19.0296L25.3933 21.1509L21.1507 25.3935ZM57.2132 19.0293L59.3345 16.908L55.0919 12.6653L52.9705 14.7866L48.7279 19.0293L46.6066 21.1506L50.8492 25.3932L52.9705 23.2719L57.2132 19.0293ZM25.3933 50.8491L23.272 52.9704L19.0294 57.2131L16.9081 59.3344L12.6654 55.0918L14.7867 52.9704L19.0294 48.7278L21.1507 46.6065L25.3933 50.8491ZM30 36C30 32.6863 32.6863 30 36 30C39.3137 30 42 32.6863 42 36C42 39.3137 39.3137 42 36 42C32.6863 42 30 39.3137 30 36ZM36 24C29.3726 24 24 29.3726 24 36C24 42.6274 29.3726 48 36 48C42.6274 48 48 42.6274 48 36C48 29.3726 42.6274 24 36 24Z"
            fill="#4B5EFC"
          />
        </G>
      </Svg>
    );
  };

  const DarkIcon = () => {
    return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <G opacity="0.7">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.03239 6.23186C6.2001 7.49474 5 9.60797 5 11.9999C5 15.8659 8.13401 18.9999 12 18.9999C14.3918 18.9999 16.5049 17.8 17.7678 15.9678C17.5146 15.9893 17.2585 16.0002 17 16.0002C12.0294 16.0002 8 11.9708 8 7.00019C8 6.7415 8.01094 6.48524 8.03239 6.23186ZM3 11.9999C3 8.04173 5.55459 4.68279 9.10211 3.47693L10.3707 4.74561C10.1306 5.45177 10 6.20969 10 7.00019C10 10.8662 13.134 14.0002 17 14.0002C17.7904 14.0002 18.5482 13.8696 19.2542 13.6296L20.5228 14.8983C19.3168 18.4455 15.958 20.9999 12 20.9999C7.02944 20.9999 3 16.9705 3 11.9999Z"
            fill="#4B5EFC"
          />
        </G>
      </Svg>
    );
  };

  const { isLightTheme, setIsLightTheme } = useAdminContext();

  return (
    <Center w={"100%"} h={"100px"}>
      <Switch
        value={isLightTheme}
        onValueChange={(val) => setIsLightTheme(val)}
        backgroundActive={"#D2D3DA"}
        backgroundInactive={"#2E2F38"}
        circleActiveColor={"#FFF"}
        circleInActiveColor={"#4E505F"}
        renderActiveText={false}
        renderInActiveText={false}
        renderInsideCircle={() => (isLightTheme ? <LightIcon /> : <DarkIcon />)}
      />
    </Center>
  );
}
