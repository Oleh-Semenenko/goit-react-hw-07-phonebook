import { useDispatch } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { setFilterValue } from 'redux/filterSlice';

 export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.currentTarget.value;
    dispatch(setFilterValue(value));
  }
  
  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </FilterLabel>
  );
};