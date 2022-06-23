import React from "react";

type Props = {
  name: string;
  onChange?: (text: string) => void;
};

const Textarea = (props: Props) => {
  const [text, setText] = React.useState("");
  const onChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textInput = e.currentTarget.value;
    setText(textInput);
    props.onChange && props.onChange(textInput);
  };

  return (
    <div className="form__group field">
      <textarea
        className="form__field"
        name={props.name}
        id={props.name}
        onChange={onChange}
        value={text}
        placeholder={props.name}
        rows={text.length / 62 + 1}
      />
      <label htmlFor={props.name} className="form__label">
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </label>
    </div>
  );
};

export default Textarea;
