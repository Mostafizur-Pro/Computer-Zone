import React from "react";

const AddProductModal = ({ setTreatment, treatment }) => {
  const {} = treatment;

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              type="submit"
              value="Submit"
              className="btn"
            >
              Submit
            </label>
            {/* <input className="btn btn-accent w-full" type="submit" value="Submit" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
