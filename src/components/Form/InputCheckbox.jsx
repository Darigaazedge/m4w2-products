import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function InputCheckbox({ id, label, onChange }) {
  return (
    <>
      <div className="gap=x-2 flex items-center">
        <input type="checkbox" id={id} onChange={onChange} />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
}

InputCheckbox.PropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
