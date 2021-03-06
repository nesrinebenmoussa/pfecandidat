import React from "react";
import { useParams } from "react-router";
import { getAnnonceByid } from "../features/annonce/annonceSlice";
import { getRecruter } from "../features/recruter/recruterSlice";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { create, reset } from "../features/Postulation/qesSlice";
import { toast } from "react-toastify";

function Questionaire() {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
  });

  const {
    q1 ,
    q2 ,
    q3 ,
    q4 ,
    q5 ,
    q6 ,
    q7 ,
    q8 ,
    q9 ,
    q10 ,
    q11 ,
    q12 ,
  } = formData;

  const { user } = useSelector((state) => state.auth);

  const { postulations, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.postulations
  );

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [postulations, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    formData.postulation = id;
    console.log("responses ", formData);

    dispatch(create(formData))
      .unwrap()
      .then((data) => navigate("/"))
      .catch((err) => toast.error(err));
  };
  /////

 

  return (
    <>
      <NavBar />
      <div className='container mt-4'>
        <div className='row gutters'>
          
          <div className=' '>
            <div className='card h-100'>
              <div className='card-body'>
                <div className='row gutters'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h6 className='mb-2 text-primary'>Questionaire</h6>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='fullName'>Pr??sentez vous???. </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Pr??sentez vous???.'
                        onChange={onChange}
                        name='q1'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='eMail'>Quel est votre job de r??ve ?</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Quel est votre job de r??ve???'
                        onChange={onChange}
                        name='q2'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='phone'> Quelles sont vos qualit??s et quels sont vos points faibles ?</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q3'
                        placeholder='Quelles sont vos qualit??s et quels sont vos points faibles ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'> Que savez-vous de notre entreprise ?</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q4'
                        placeholder='Que savez-vous de notre entreprise ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'> En quoi le poste ?? pourvoir vous int??resse-t-il ?????</label>
                      <input
                        type='url'
                        className='form-control'
                        onChange={onChange}
                        name='q5'
                        placeholder='En quoi le poste ?? pourvoir vous int??resse-t-il ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>??Comment envisagez-vous votre carri??re??</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q6'
                        placeholder='Comment envisagez-vous votre carri??re??'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>Quelles sont vos comp??tences dans le domaine des langues ?</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q7'
                        placeholder='Quelles sont vos comp??tences dans le domaine des langues ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='website'>??D??crivez moi vos exp??riences professionnelles ?</label>
                      <input
                        type='url'
                        className='form-control'
                        onChange={onChange}
                        name='q8'
                        placeholder='D??crivez moi vos exp??riences professionnelles ?'
                      />
                    </div>
                  </div>
                </div>
                <div className='row gutters'>
                
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='Street'>Aimez-vous le travail en ??quipe ? Pour quelles raisons ?</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q9'
                        placeholder='Aimez-vous le travail en ??quipe ? Pour quelles raisons ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='ciTy'>  Vous vous voyez o?? dans cinq ans ? </label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q10'
                        placeholder='Vous vous voyez o?? dans cinq ans ?'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='sTate'>Pourquoi devrais-je vous choisir plut??t que quelqu???un d???autre??</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q11'
                        placeholder='Pourquoi devrais-je vous choisir plut??t que quelqu???un d???autre??'
                      />
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                    <div className='form-group'>
                      <label htmlFor='zIp'>Avez-vous des questions ?</label>
                      <input
                        type='text'
                        className='form-control'
                        onChange={onChange}
                        name='q12'
                        placeholder='Avez-vous des questions ?'
                      />
                    </div>
                  </div>
                </div>
                <div className='row gutters'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <div className='text-right'>
                      <button
                        type='button'
                        id='submit'
                        name='submit'
                        onClick={onSubmit}
                        className='btn btn-primary'>
                        envoyer 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questionaire;
