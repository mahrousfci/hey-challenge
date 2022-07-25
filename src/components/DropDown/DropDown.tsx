import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from './arrow.svg';

const DropDownContainer = styled('div')`
  width: 135px;
  margin: 0 auto;
`;

const DropDownHeader = styled('div')`
  padding: 0.4em 2em 0.4em 1em;
  font-size: 14px;
  color: #ffffff;
  background-color: #1bc5bd;
  border-radius: 5px;
  position: relative;
`;
const ArrowImg = styled('img')`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const DropDownListContainer = styled('div')`
  position: absolute;
  z-index: 100;
  width: 135px;
`;

const DropDownList = styled('ul')`
  padding: 0;
  margin-top: 4px;
  padding-left: 1em;
  font-size: 14px;
  color: #ffffff;
  background-color: #1bc5bd;
  border-radius: 5px;
  &:first-child {
    padding: 0.8em 0 0.2em 1em;
  }
`;

const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

type Option = {
  value: string;
  text: string;
};

export default function DropDown({
  options,
  selectedValue,
  onChange,
}: {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setIsOpen(false);
    if (selectedValue !== value && typeof onChange === 'function') {
      onChange(value);
    }
  };
  const selectedText = options.find((item) => item.value === selectedValue)
    ?.text;

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedText || '-'}
        <ArrowImg src={arrow}></ArrowImg>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                onClick={onOptionClicked(option.value)}
                key={option.value}
              >
                {option.text}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
