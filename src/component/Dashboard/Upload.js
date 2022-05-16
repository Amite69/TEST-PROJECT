import React, { useState } from "react";
import {Link} from "react-router-dom";

function Upload({ children }) {
  const [files, setFiles] = useState("");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };
  return (
    <>
     <div className='container'>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm mt-2">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                      <h1 className='brand'> IMPORT JSON FILE FOR EMPLOYEE</h1>
                    </Link>
                    <div>
                        <Link to={'/'} className="mr">
                            <button  className='accent-button add-btn'>
                              BACK TO HOME
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        <div className="small-container mt-5 text-center">
            <input type="file" onChange={handleChange} />
            <br />
            {"File Content -- " + files}
        </div>
     </div>
    </>
  );
}
export default Upload