import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function InputSearch({ id, label, onChange }) {
  return (
    <>
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <input
        type="search"
        placeholder={label}
        id={id}
        className="rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500"
        onChange={onChange}
      />
    </>
  );
}

InputSearch.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
