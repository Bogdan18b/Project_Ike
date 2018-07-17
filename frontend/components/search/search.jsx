import React from 'react';
import Downshift from 'downshift';
import render from 'react-dom';
import { Redirect } from 'react-router';

const SearchBox = ({ businesses, types }, placeholder) => {
  if (!businesses || !types) {
    return <p></p>
  }
  const items = businesses.concat(types);
  debugger
  return (
    <Downshift
  onChange={selection => alert(`You selected ${selection.name}`)}
  itemToString={item => (item ? item.name : '')}
>
  {({
    getInputProps,
    getItemProps,
    getMenuProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
  }) => (
    <div>
      <input {...getInputProps()} />
      <ul {...getMenuProps()}>
        {isOpen
          ? items
              .filter(item => !inputValue || item.name.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.name,
                    index,
                    item,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.name}
                </li>
              ))
          : null}
      </ul>
    </div>
  )}
</Downshift>
    )
  }

export default SearchBox;
