import React, { useState, useRef } from 'react';

const Form = () => {
  const formRef = useRef(null);
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxCfJJH44h8n7ufVVcyi9JhEVgh7eYa5Yo-vJcslFRSNYHDFau1_K_SCS-zIWaXVEEC6g/exec';
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log('SUCCESSFULLY SUBMITTED');
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="form-heading">FORM</h1>
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No: </label>
            <input type="number" name="phone" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="DOB">DOB: </label>
            <input type="date" id="DOB" name="DOB" placeholder="DOB" />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation: </label>
            <input type="text" name="designation" placeholder="Designation" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value={loading ? 'Loading...' : 'SUBMIT'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

