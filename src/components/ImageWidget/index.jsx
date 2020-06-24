import React from 'react';



export default function ImageUpload(props) {

  const checkUploadResult = (resultEvent) => {
        if(resultEvent.event === "success"){
    
            props.getPicture(resultEvent.info.secure_url);
  
        }
    }

   const showWidget = (widget) => {
        widget.open()
    }

        let widget = window.cloudinary.createUploadWidget({
            cloudName: "amzap",
            uploadPreset:"ylmdvnpt",
        },
            (error, result) => { checkUploadResult(result) })
            
        
    
    return (
        <div id='photo-form-container'>
            <button onClick={() =>  showWidget(widget)}>Upload Photo</button>
        </div>
        )
        }

