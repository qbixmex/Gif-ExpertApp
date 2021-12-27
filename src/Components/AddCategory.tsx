import { useState } from "react";

type AddCategoryProps = {
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
};

const AddCategory = ({ setCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategory( (categories: string[]) => [ inputValue, ...categories ] );
      setInputValue("");
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          value={ inputValue }
          onChange={ handleInputChange }
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddCategory;
