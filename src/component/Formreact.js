import React from 'react';
import './Style.css'
import { useForm } from 'react-hook-form';

function Formreact() {
    const {register,handleSubmit,formState:{errors},trigger}=useForm();
    console.log(errors)
  return (
    <div>
          <h1 className="text-center mt-5 mb-3">Bio-Data</h1>
    <div className='shadow-lg bg-white p-5 rounded-2 mb-5' >
      <form  onSubmit={handleSubmit((data)=>{
        console.log(data) 
      })}>
            <div className="form-control-class">
            <input type="text" className={` ${errors.name && "invalid"}`}  {...register("name", { required: "Enter Your Name" , pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only Alphabet  letters",
                },
               })}  
                onKeyUp={() => {
                  trigger("name");
                }}/><span><i class="fa-solid fa-user"></i> NAME</span>
              <div>{errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}</div>
                
            </div>
            <div className="form-control-class ">
            <input type="email" className={`${errors.email && "invalid"}`}{...register("email", { required: "Enter Your Email Id" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}onKeyUp={() => { trigger("email");
                }}/><span><i class="fa-solid fa-envelope"></i> EMAIL</span>
              <div>{errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}</div>
            </div>
            <div className="form-control-class">
              <input type="number" className={`${errors.phone && "invalid"}`} {...register("phone", { required: "Enter your Phone No",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                }, })} onKeyUp={() => {
                trigger("phone");
              }} /><span><i class="fa-solid fa-phone"></i> PHONE</span>
              <div>
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div></div>
            <div className="form-control-class">
            <input type="text" className={`${errors.loaction && "invalid"}`} {...register("loaction", { required: " Enter Your loaction " })}
                onKeyUp={() => {
                  trigger("loaction");
                }}
              /><span><i class="fa-solid fa-location-dot"></i> LOCATION</span>
              <div>{errors.loaction && (
                <small className="text-danger">{errors.loaction.message}</small>
              )}</div>
            </div>
            <div className="Form-1">
                <label for="gender">Gender:</label>
               <div className="mt-2"><input name="gender" className="form-check-input" type="radio" id="gender" value="Male" /> <span><i className="fa-solid fa-person text-black"></i> Male</span></div>
               <div className="mt-2"><input name="gender" className="form-check-input" type="radio" id="gender" value="Female" /> <span><i className="fa-solid fa-person-dress text-black"></i> Female</span></div>
               <div className="mt-2"><input name="gender" className="form-check-input" type="radio" id="genter" value="prefer not to say"/> <span><i className="fa-solid fa-transgender text-black"></i> prefer not to say</span></div>
            </div>
            <button type="submit" id="submit" className="mt-5 mb-3 rounded-3 text-light">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Formreact

