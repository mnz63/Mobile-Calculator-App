import { Center, Flex } from "native-base";
import ButtonComponent from "../Button";
import Svg, { Path } from "react-native-svg";
import { useEffect, useState } from "react";
import Display from "../Display";
import { Dimensions, Text, TouchableHighlight } from "react-native";

export default function ButtonsContainer() {
  const deleteLabel = (
    <Svg width={32} height={32} viewBox="0 0 32 32">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0858 7H11.5H27.5H28.5V8V24V25H27.5H11.5H11.0858L10.7929 24.7071L2.79286 16.7071L2.08575 16L2.79286 15.2929L10.7929 7.29289L11.0858 7ZM11.9142 9L4.91418 16L11.9142 23H26.5V9H11.9142ZM15.5 11.5858L16.2071 12.2929L18.5 14.5858L20.7929 12.2929L21.5 11.5858L22.9142 13L22.2071 13.7071L19.9142 16L22.2071 18.2929L22.9142 19L21.5 20.4142L20.7929 19.7071L18.5 17.4142L16.2071 19.7071L15.5 20.4142L14.0858 19L14.7929 18.2929L17.0858 16L14.7929 13.7071L14.0858 13L15.5 11.5858Z"
        fill="white"
      />
    </Svg>
  );
  const buttonsData = [
    {
      label: "C",
      type: "clear",
    },
    {
      label: "%",
      type: "operator2",
    },
    {
      label: "÷",
      type: "operator",
    },
    {
      label: "7",
      type: "number",
    },
    {
      label: "8",
      type: "number",
    },
    {
      label: "9",
      type: "number",
    },
    {
      label: "*",
      type: "operator",
    },
    {
      label: "4",
      type: "number",
    },
    {
      label: "5",
      type: "number",
    },
    {
      label: "6",
      type: "number",
    },
    {
      label: "-",
      type: "operator",
    },
    {
      label: "1",
      type: "number",
    },
    {
      label: "2",
      type: "number",
    },
    {
      label: "3",
      type: "number",
    },
    {
      label: "+",
      type: "operator",
    },
    {
      label: ".",
      type: "number",
    },
    {
      label: "0",
      type: "number",
    },
    {
      label: deleteLabel,
      type: "deleteDigit",
    },
    {
      label: "=",
      type: "operator",
    },
  ];

  const initialState = {
    value: "0",
    clearDisplayValue: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };

  const [displayValue, setDisplayValue] = useState(initialState);
  const [operationHistory, setOperationHistory] = useState(null);

  const addDigit = (num) => {
    if (num === "." && displayValue.value.includes(".")) {
      return;
    }

    const clearDisplay =
      displayValue.value === "0" || displayValue.clearDisplayValue;

    const currentValue = clearDisplay ? "" : displayValue.value;
    const value = currentValue + num;

    if (num != ".") {
      const newValue = parseFloat(value);
      const values = [...displayValue.values];
      values[displayValue.current] = newValue;
      setDisplayValue({
        ...displayValue,
        value,
        values,
        clearDisplayValue: false,
      });
    } else {
      setDisplayValue({ ...displayValue, value, clearDisplayValue: false });
    }
  };

  const handleDeleteLastDigit = () => {
    let value = displayValue?.value;
    let valueString = value.toString();
    valueString = valueString.substring(0, value.length - 1);

    const values = [...displayValue.values];
    values[displayValue.current] = parseFloat(valueString);

    if (valueString.length === 0) {
      valueString = "0";
      values[displayValue.current] = parseFloat(valueString);
      setDisplayValue({
        ...displayValue,
        value: valueString,
        values,
        clearDisplayValue: false,
      });
    } else {
      setDisplayValue({
        ...displayValue,
        value: valueString,
        values,
        clearDisplayValue: false,
      });
    }
  };

  const setOperation = (operation: string) => {
    if (displayValue.current === 0 && operation !== "=") {
      setDisplayValue({
        ...displayValue,
        operation,
        current: 1,
        clearDisplayValue: true,
      });
    } else {
      const equals = operation === "=";
      const values = [...displayValue.values];
      try {
        if (displayValue.operation === "=" || !displayValue.operation) {
          return;
        }
        setOperationHistory(
          `${values[0]} ${displayValue.operation} ${values[1]}`
        );
        values[0] = eval(`${values[0]} ${displayValue.operation} ${values[1]}`);
      } catch (e) {
        values[0] = displayValue.values[0];
      }
      values[1] = 0;
      setDisplayValue({
        value: values[0].toString(),
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplayValue: !equals,
        values,
      });
    }
  };

  const padding = Dimensions.get("window").width / 35;

  return (
    <>
      <Display
        displayValue={displayValue.value}
        operationHistory={operationHistory}
      />

      <Flex direction="row" pl={padding} py={padding} flexWrap={"wrap"}>
        {buttonsData.map((button, index) => (
          <ButtonComponent
            key={index}
            label={button.label}
            type={button.type}
            onPressNumber={(value) => addDigit(value)}
            onSetOperation={(operator) => setOperation(operator)}
            onClear={() => {
              setOperationHistory(null);
              setDisplayValue(initialState);
            }}
            onDeleteDigit={() => handleDeleteLastDigit()}
          />
        ))}
      </Flex>
    </>
  );
}
