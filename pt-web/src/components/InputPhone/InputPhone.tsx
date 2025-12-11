import {useState} from "react";
import PhoneInput, {Value} from "react-phone-number-input";
import clsx from "clsx";
import "react-phone-number-input/style.css";
import styles from "src/components/InputPhone/InputPhone.module.scss";

interface InputPhoneProps {
    onChange: (value: Value) => void;
    className?: string;
}

export function InputPhone(props: InputPhoneProps) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState<Value>();

  const onInputCHange = (newValue: Value) => {
    if (newValue) {
      props.onChange(newValue);
      setValue(newValue);
    }
  };

  return (
    <PhoneInput
      placeholder="+1 000 000-000"
      value={value}
      onChange={onInputCHange}
      className={clsx(styles, props.className)}
    />
  );
}
