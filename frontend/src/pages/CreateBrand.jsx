import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function CreateBrand() {
    const [brandName, setName] = useState(' '); 
    const [brandOwner, setBrandOwner] = useState(' '); 
    const [countryofOrigin, setCountryofOrigin] = useState(' '); 
    return (
        <form>
            <input type="brandName" placeholder={'Brand Name'} />
            <input type="brandOwner" placeholder={'Brand Owner'} />
            <input type="countryofOrigin" placeholder={'Country of Origin'} />
            <input type="file" />
            <ReactQuill />
            <button style={{marginTop: '5px'}} > Create </button>

        </form>
    )
}