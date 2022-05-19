import React from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'
import {create} from '../features/condidat/cvSlice'

function CV() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email:user.email,
    name : user.name,
    adress : user.adress,
    tel : user.tel ,
    niveau :"",
    formation : "",
    langues:"" , 
    diplome:"", 
    experience :""
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { condidat , email,name,  adress , tel , niveau , formation, langues , diplome , experience } = formData;
  return (
    <>
      {" "}
      <NavBar />
      <div className='container-xl px-4 mt-4'>
        <hr className='mt-0 mb-4' />
        <div className='row'>
          <div className='col-xl-8'>
            <div className='card mb-4'>
              <div className='card-header'>CV Details</div>
              <div className='card-body'>
                <form>
                  <div className='mb-3'>
                    <label class='small mb-1'>Username </label>
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Enter your username'
                      defaultValue={user.name}
                    />
                  </div>

                  <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputFirstName'>
                        Address
                      </label>
                      <input
                        class='form-control'
                        id='inputFirstName'
                        type='text'
                        placeholder='Enter your first name'
                        defaultValue={user.adress}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputLastName'>
                        Tel
                      </label>
                      <input
                        class='form-control'
                        id='inputLastName'
                        type='text'
                        placeholder='Enter your last name'
                        defaultValue={user.tel}
                      />
                    </div>
                  </div>
                  <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputOrgName'>
                        Niveau{" "}
                      </label>
                      <input
                        class='form-control'
                        id='inputOrgName'
                        type='text'
                        placeholder='Enter your niveau'
                       name="niveau"
                       onChange={onChange}
                      />
                    </div>

                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputLocation'>
                        Formation
                      </label>
                      <input
                        class='form-control'
                        id='inputLocation'
                        type='text'
                        placeholder='Enter your foramtion'
                        name = "formation"

                       onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label class='small mb-1' htmlFor='inputEmailAddress'>
                      Email
                    </label>
                    <input
                      class='form-control'
                      id='inputEmailAddress'
                      type='email'
                      placeholder='Enter your email address'
                      value={user.email}
                    />
                  </div>

                  <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputPhone'>
                        Langues
                      </label>
                      <input
                        class='form-control'
                        id='inputPhone'
                        type='tel'
                        placeholder='Enter some languages'
                       name="langues"

                       onChange={onChange}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputBirthday'>
                        Diplome
                      </label>
                      <input
                        class='form-control'
                        id='inputBirthday'
                        type='text' 
                        placeholder='Enter your diplome'
                       name="diplome"

                       onChange={onChange}
                      />
                    </div>

                    <div className='col-md-6'>
                      <label class='small mb-1' htmlFor='inputBirthday'>
                        Experience
                      </label>
                      <input
                        class='form-control'
                        id='inputBirthday'
                        type='text'
                        name='experience'
                        placeholder='Enter your experience'
                       
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <button class='btn btn-primary' type='button' onClick={()=>{
                  formData.condidat = user._id
                  console.log(formData , 'hedha fesh nabeeth ')
                  dispatch(create(formData)).unwrap().then((res)=>console.log(res , 'totototot'))
                  }}>
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CV;
