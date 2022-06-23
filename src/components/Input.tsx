import React, { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

type Props = {
  name: string;
  suggestion?: Array<string>;
  type: string;
  onChange?: (text: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, text: string) => void;
};

interface IInput {
  activeSuggestion: number;
  filteredSuggestion: Array<string>;
  showSuggestion: boolean;
  userInput: string;
}

const Input = (props: Props) => {
  const ref = useRef(null);

  const onClickOutside = () => {
    setSugState({
      ...sugState,
      showSuggestion: false,
    });
  };

  const onFocus = () => {
    setSugState({
      ...sugState,
      showSuggestion: true,
    });
  };

  useOnClickOutside(ref, onClickOutside);

  const [sugState, setSugState] = useState<IInput>({
    activeSuggestion: 0,
    filteredSuggestion: [],
    showSuggestion: false,
    userInput: "",
  });

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions = props.suggestion?.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSugState({
      ...sugState,
      filteredSuggestion: filteredSuggestions || [],
      activeSuggestion: 0,
      showSuggestion: true,
      userInput: userInput,
    });

    props.onChange && props.onChange(userInput);
  };

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSugState({
      activeSuggestion: 0,
      filteredSuggestion: [],
      showSuggestion: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onKeyDown) {
      props.onKeyDown(e, sugState.userInput);
      setSugState({
        activeSuggestion: 0,
        filteredSuggestion: [],
        showSuggestion: false,
        userInput: "",
      });
    }
    if (e.key === "Tab") {
      e.preventDefault();
      setSugState({
        ...sugState,
        activeSuggestion: 0,
        showSuggestion: true,
        userInput: sugState.filteredSuggestion[sugState.activeSuggestion],
      });
    } else if (e.key === "ArrowUp") {
      if (sugState.activeSuggestion === 0) return;
      setSugState({
        ...sugState,
        activeSuggestion: sugState.activeSuggestion - 1,
      });
    } else if (e.key === "ArrowDown") {
      if (sugState.activeSuggestion === sugState.filteredSuggestion.length - 1)
        return;
      setSugState({
        ...sugState,
        activeSuggestion: sugState.activeSuggestion + 1,
      });
    }
  };

  return (
    <div className="form__group field" ref={ref}>
      <input
        type={props.type}
        className="form__field"
        placeholder={props.name}
        name={props.name}
        id={props.name}
        onChange={onChange}
        onKeyDown={props.suggestion && onKeyDown}
        value={sugState.userInput}
        onFocus={props.suggestion && onFocus}
      />
      <label htmlFor={props.name} className="form__label">
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </label>

      {props.suggestion &&
        sugState.showSuggestion &&
        sugState.userInput &&
        sugState.filteredSuggestion.length > 0 && (
          <ul className="suggestions">
            {sugState.filteredSuggestion.map((suggestion, index) => (
              <li
                className={
                  index === sugState.activeSuggestion ? "suggestion-active" : ""
                }
                key={suggestion}
                onClick={onClick}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Input;
