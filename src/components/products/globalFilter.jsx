import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import tw from "twin.macro";

const SearchContainer = tw.div`
  mb-6
  mt-6
  flex
  items-center
`;

const SearchText = tw.h2`
  text-xl
text-gray-600
  mr-6
`;

const Input = tw.input`
  h-8
  border-2
  border-solid
  border-green-500
  outline-none
  p-4
  rounded-lg
`;

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <SearchContainer>
      <SearchText>Search:</SearchText>
      <Input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </SearchContainer>
  );
}
