import { DropdownButton, Dropdown } from "react-bootstrap";
import "../css/Sort.css";
import {getMarbleFilterValues} from "../api";
import { useState, useEffect } from "react";

export default function FilterButton({ handleFilterChange, filterName }) {
  const [filterValues, setFilterValues] = useState([])
  const priceOrderBy = ["High to Low", 'Low to High']
  const nameOrderBy = ["A - Z", "Z - A"]
  
  useEffect(() => {
    if (filterName === "name") {
      setFilterValues(nameOrderBy)
    }
    if (filterName === "price") {
      setFilterValues(priceOrderBy)
    }
    if(filterName === "type" || filterName === "style") {
      getMarbleFilterValues(filterName).then((values) => {
        setFilterValues(values)
      })
    }
  }, [])

  const handleFilterChangeFunction = (value) => {
    handleFilterChange(value, filterName)
  }

  return (
    <>
    <DropdownButton variant="filter" title={filterName || "Filter"} onSelect={handleFilterChangeFunction}>
    {filterValues.map((val) => (
          <Dropdown.Item key={val} eventKey={val} >{val}</Dropdown.Item>
        ))}
        </DropdownButton>
   </>
  );
}