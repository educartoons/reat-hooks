import { memo } from "react";

function Search(props) {
  // llamadas a API
  console.log("printing");
  const { handleSearch } = props;
  return (
    <input
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
      type="text"
      placeholder="Search users..."
    />
  );
}

export default memo(Search);
