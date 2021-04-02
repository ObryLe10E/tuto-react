import * as React from "react";

interface Props {
  placeholder: string;
  onSubmit: (v: string) => void;
}

const MyCmp = (props: Props) => {
  const [value, setValue] = React.useState("");

  const applyChange = (e) => {
    setValue(e.target.value);
  };

  const doSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder={props.placeholder}
        onChange={applyChange}
      />
      <button type="submit" onClick={doSubmit}>
        Go
      </button>
    </>
  );
};
export default MyCmp;
