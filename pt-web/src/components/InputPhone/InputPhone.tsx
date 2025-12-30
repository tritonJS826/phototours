import {useState} from "react";
import {PhoneInput} from "react-international-phone";
import clsx from "clsx";
import styles from "src/components/InputPhone/InputPhone.module.scss";

interface InputPhoneProps {
    onChange: (value: string) => void;
    className?: string;
    defaultCountry: string;
    value: string;
}

export function InputPhone(props: InputPhoneProps) {
  const [value, setValue] = useState<string>(props.value);

  const onInputCHange = (newValue: string) => {
    if (newValue) {
      props.onChange(newValue);
      setValue(newValue);
    }
  };

  return (
    <PhoneInput
      defaultCountry={props.defaultCountry}
      placeholder="+1 000 000-000"
      value={value}
      onChange={onInputCHange}
      className={clsx(styles, props.className)}
    />
  );
}
