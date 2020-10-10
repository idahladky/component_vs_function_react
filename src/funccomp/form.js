import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState({
    // an array of state and setState. this is destructuring
    name: "",
    age: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
