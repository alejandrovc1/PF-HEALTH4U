import React, {useState, useEffect} from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { fetchPhotos, openUploadWidget } from "./CloudinaryService";


function Clou({seteditinput,editinput}) {

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "dymfd1z8t",
      tags: [tag, 'anImage'],
      uploadPreset: "upload"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if(photos.event === 'success'){
            seteditinput({...editinput, image:photos.info.secure_url})
           
        }
      } else {
      }
    })
  }

  useEffect( () => {
    fetchPhotos("image", editinput.image);
  }, [])

  return (
   <CloudinaryContext cloudName="dymfd1z8t">
      <div >
        <button onClick={() => beginUpload("image")}>Edit photo profile</button>
    </div>
   </CloudinaryContext>
  );
}

export default Clou;