import { Link } from "react-router-dom";
import background from '../assets/images/bckcreate.png';
import logo from '../assets/images/logocreate.png';
import { useState } from "react";

function Createaccount () {
    const [role, setRole] = useState();
    const [formData, setFormData] = useState(
        {
            role: "Investor",
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            termsAccepted: false,
        }
    )
    const handleChange = () => {
        const { name, vale, type, checked } = e.target;
    }

    const handleSubmit = () => {

    }

    return(
        <div className='flex justify-between gap-30'>
            <div className="flex flex-col justify-between text-left h-screen w-1/2 py-10 px-10     " style={{backgroundImage: `url(${background})`,
                                                                                             backgroundPosition: "center",
                                                                                            backgroundRepeat: "no-repeat",
                                                                                            backgroundSize: "cover",
                                                                                            height: "200"}}>
                <div><img src={logo} alt="" /></div>
                <div>
                    <button className=''> fuififyuyu </button>
                </div>
            </div>
            <div className='w-200 py-10 px-10'>
                <div className="flex justify-end">
                    <small className="font-semibold text-base text-[#cccccc]">Already have an account?
                        <span className="ml-1">
                            <Link className="text-[#2A9DAF]" to="">Login</Link>
                        </span>
                    </small>
                </div>
                <h2 className="text-3xl my-2 font-bold">Join Homify Today</h2>
                <form className="" onSubmit={handleSubmit}>
                   <label className="ring-[#cccccc] ring-2 py-3" htmlFor="role">
                    Role:</label>
                     <select className="block" id="" name="role" 
                                                    value={formData.role}
                                                    onChange={handleChange}
                                                    style={inputStyle('role')} >
                        <option value="Investor">Investor</option>
                        <option value="Developer">Devloper</option>
                        <option value="Property Manager">Property Manager</option>
                    </select>
                   <div>
                    <label>Full Name</label>
                    <input className="ring-2 rounded-lg block" type="text"
                                                                name="fullname"
                                                                value={formData.fullName}
                                                                onChange={handleChange} />
                    <label>Email Address</label>
                    <input className="ring-2 rounded-lg block" type="email" />
                    <label>Phone Number</label>
                    <input className="ring-2 rounded-lg block" type="tel" />
                    <label>Password</label>
                    <input className="ring-2 rounded-lg block" type="password" />
                    <label>Confirm Password</label>
                    <input className="ring-2 rounded-lg block" type="password" />
                    <label>
                        <input type="checkbox" />
                        <small>I agree to the terms and conditions</small>
                    </label>
                   </div>
                   <button>Create account</button>
                </form>
            </div>

        </div>
    )
}

export default Createaccount