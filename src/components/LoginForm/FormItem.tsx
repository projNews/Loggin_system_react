import React from 'react';
import styled from 'styled-components';

export interface FormItemProps {
  label: string;
  subLabel?: string;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  // onChange
}

const SubLabel = styled.span`
  font-size: 10px;
	font-weight: bold;
`;

const ErrorMessage = styled.span`
  color: red; // ?
`;

const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    label,
    subLabel,
    placeholder,
    errorMessage,
    value,
  } = props;

  return (
    <div>
      <label>
        <b>{label}</b>
        {
          subLabel && (
            <SubLabel>({subLabel})</SubLabel>
          )
        }
      </label>
      <input
        placeholder={placeholder ?? label}
        type="text"
      />

      {
        errorMessage && (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        )
      }
    </div>
  );
};

export default FormItem;
