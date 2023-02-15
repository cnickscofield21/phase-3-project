import { useState, useEffect } from "react";

function ToolboxForm() {
  const initialState = {
      title: "",
      description: ""
  };
  const testFormData = {
      title: "Project X",
      description: "Experimental Project"
  };
  const [formData, setFormData] = useState(initialState);
  const [isTest, setIsTest] = useState(false);

  useEffect(() => {
      console.log("isTest: ", isTest);
      if (sessionStorage.getItem("isTest")) {
          setIsTest((isTest) => isTest);
          setFormData((formData) => testFormData);
      }
  }, []);

  const handleTest = () => {
      sessionStorage.setItem("isTest", true);
      setFormData((formData) => ({ ...testFormData, favorite: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({ ...formData, favorite: true })
    };

    // FIXME: Change URL
    fetch("http://localhost:4201/myRecipes", configObj)
        .then((res) => res.json())
        .then((myRecipe) => {
            onAddMyRecipe(myRecipe);
            setFormData(formData => initialState);
        });
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Build a Toolbox:</h1>
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Toolbox Title:</span>
            </label>
            <label className="input-group">
              <span>Title:</span>
              <input
                type="text"
                placeholder="Project Name"
                maxLength="16"
                onChange={handleChange}
                className="input input-bordered"
              />
            </label>
          </div>

          {/* FIXME: check on multiple <select> options
          https://stackoverflow.com/questions/28624763/retrieving-value-from-select-with-multiple-option-in-react */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <label className="input-group">
              <span>Desc:</span>
              <input
                type="text"
                placeholder="Briefly describe your toolbox."
                maxLength="80"
                onChange={handleChange}
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select Resources:</span>
            </label>
            <select
              // name="" TODO: finish me!
              className="select select-bordered"
              multiple
              onChange={handleChange}
            >
              <optgroup >Select all that apply</optgroup>
              <option value="">Star Wars</option>
              <option value="">Harry Potter</option>
              <option value="">Lord of the Rings</option>
              <option value="">Planet of the Apes</option>
              <option value="">Star Trek</option>
            </select>
          </div>

          <div className="btn-group mt-8 ">
            <button
              className="btn"
              type="submit"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
            <button className="btn btn-error" type="reset">Reset</button>
          </div>

          </form>
      </>
  );
}

export default ToolboxForm;
