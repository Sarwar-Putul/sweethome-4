import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./AddRentHouse.css";

const AddService = () => {
  const blurHandler = (event) => {};
  const fileChangeHandler = (event) => {};

  const submitHandler = (event) => {
    event.target.reset();
    event.preventDefault();
  };
  
  return (
    <div className="container-fluid">
      <div style={{width:'99%'}} className="row">
        <div className="col-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-9 addService">

          <form onSubmit={submitHandler} className='mt-4'>
            <div class="mb-3" style={{display:'grid',gridTemplateColumns:'1fr 1fr',columnGap:'20px'}}>
              <div className='mt-3'>
                <label for="exampleInputEmail1" class="form-label">
                  Service Title
                </label>
                <input
                  type="text"
                  onBlur={blurHandler}
                  class="form-control"
                  name="title"
                  style={{width:'90%'}}
                  placeholder='Enter title'
                />
              </div>

              <div className='mt-3'>
                <label for="exampleInputEmail1" class="form-label">
                  Price
                </label>
                <input
                  type="text"
                  onBlur={blurHandler}
                  class="form-control"
                  name="title"
                  style={{width:'90%'}}
                  placeholder='Price'
                />
              </div>

              <div className='mt-3'>
                <label for="exampleInputEmail1" class="form-label">
                  Location
                </label>
                <input
                  type="text"
                  onBlur={blurHandler}
                  class="form-control"
                  name="description"
                  style={{width:'90%'}}
                  placeholder='Location'
                />
              </div>

              <div className='mt-3'>
                <label for="exampleInputEmail1" class="form-label">
                  No of Bedroom
                </label>
                <input
                  type="text"
                  onBlur={blurHandler}
                  class="form-control"
                  name="description"
                  style={{width:'90%'}}
                  placeholder='Bedroom'
                />
              </div>

              <div className='mt-3'>
                <label for="exampleInputEmail1" class="form-label">
                  No of Bathroom
                </label>
                <input
                  type="text"
                  onBlur={blurHandler}
                  class="form-control"
                  name="description"
                  style={{width:'90%'}}
                  placeholder='Bathroom'
                />
              </div>

              <div className='mt-3'>
                <label for="exampleInputEmail1" class="form-label d-block">
                  Service Icon
                </label>
                <input type="file" onChange={fileChangeHandler} />
              </div>
            </div>
            <button type="submit" class="btn-main">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
