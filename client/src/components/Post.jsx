import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postDoctors, getDoctors } from "../actions/index"



function validate(input){ 

    let errors = {};

    if(input.name.length >= 0 && !input.name.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)){
        errors.name = 'Only letters and no spaces are allowed at the end!'
    }
     if (!input.description){
        errors.description = "A description is required";
    }
    if(input.description.length >= 0 && !input.description.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)){
        errors.description = 'Only letters and no spaces are allowed at the end!'
    }
    if(input.email === 0 && !input.email.match(/^[a-z0-9][-a-z0-9._] + @([- a-z0-9] + [.]) +[a-z]{2,5}$/)){
        errors.email = "Email is not valid"
    }
    if(input.image.length > 0 && !input.image.match(/^(ftp|http|https):\/\/[^ "]+$/.test(input.image))){
        errors.image = 'The image has to be a URL'
    }else errors.image = null

    return errors;
}

export default function Post(){

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});

    const specialties = useSelector((state) => state.Specialties);

    const [input, setInput] = useState({name: "", email: "",  image: "", description: "", method: [], specialties: []});
     

    useEffect(() => {
        dispatch(getDoctors());
    }, [dispatch]);
    
    
    function handleChange(e){ 
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors(validate({ ...input, [e.target.name]: e.target.value }));
    }

    

    function handleSpecialties(e){setInput({...input, specialties: [...input.specialties, e.target.value]})}

    function handleMethod(e){setInput({...input, method: [...input.method, e.target.value]})}


    function handleSubmit(e){
        e.preventDefault();
        if(!input.name || !input.email || !input.method || !input.description || input.specialties.length < 1 || input.specialties.length > 3 || !input.image || !input.image.includes("https")){
            e.preventDefault();
            alert("Missing property to create your personal charter!")
        } else {
            dispatch(postDoctors(input)); 
            alert("Doctor successfully created!");
            setInput({ name: "", email: "", image: "", description: "", method: [], specialties: [] });
        }
    }

    function deleteSpecialties(e){setInput({...input, specialties: input.specialties.filter(data => data !== e)})}

    function deleteMethod(e){setInput({...input, method: input.method.filter(data => data !==e)})}


    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <input
                       type="text"
                       value={input.name}
                       name="name"
                       onChange={e => handleChange(e)}
                       required
                       placeholder="Enter a Name"
                    />
                    {errors.name && ( <p>{errors.name}</p> )}
                </div>

                <div>
                    <input
                       type="text"
                       value={input.description}
                       name="description"
                       onChange={e => handleChange(e)}
                       required
                       placeholder="Enter a Description"
                    />
                    {errors.description && ( <p>{errors.description}</p> )}
                </div>

                <div>
                    <input
                       type="text"
                       value={input.email}
                       name="email"
                       onChange={e => handleChange(e)}
                       required
                       placeholder="Enter a email"
                    />
                    {errors.email && ( <p>{errors.email}</p> )}
                </div>

                <div>
                    <input
                       type="text"
                       value={input.image}
                       name="image"
                       onChange={e => handleChange(e)}
                       required
                       placeholder="Enter a image"
                    />
                    {errors.image && ( <p>{errors.image}</p> )}
                </div>

                <select onChange={e => handleSpecialties(e)}>
                    <option hidden={true}>Specialties</option>
                    {specialties.map(data => ( <option value={data.name}>{data.name}</option> ))}
                </select>

                <select onChange={e => handleMethod(e)}>
                    <option hidden={true}>Method</option>
                    {input.method.map(data => ( <option value={data}>{data}</option> ))}
                </select>

                <button  type="submit">Create card</button>

            </form>

                {input.specialties.map(data => (
                    <div>
                        <button  onClick={() => deleteSpecialties(data)}>{data}</button>
                    </div>
                ))}

                {input.method.map(data => (
                    <div>
                        <button onClick={() => deleteMethod(data)}>{data}</button>
                    </div>
                ))}
        </div>  
    )
}