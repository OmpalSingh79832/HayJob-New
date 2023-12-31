import React from 'react'
import Logo from "../assest/logo.jpeg"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { VscGithubInverted } from "react-icons/vsc"
import { HiWifi } from "react-icons/hi"
import App from "../assest/appstore.png"
import Google from "../assest/googleplay.png"
import { useNavigate } from "react-router-dom"
import "./Footer.css"
function Footer() {
    const navigate = useNavigate()
    return (
        <div className='footer-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <a href="#home">
                            <img src={Logo} onClick={() => navigate("/")} alt='' className='Logo-footer' /></a>
                        <p className='para-footer'>HayJob, a Naukri Group Company is a blue collared Job searching platform helping the recruiters to find best talent and the Job Seeker to find best matching Jobs by using multiple features of Location, Qualification, Salary, City etc.
                            HayJob App for Recruiter in more than 45+ categories of Jobs.</p>

                    </div>

                    <div className='col-lg-4 product-footer'>
                        <h6 className='developer-prod'> JOB SEEKERS </h6>
                        <p className='prod-footer1' onClick={() => navigate('/dmt')}>Register / Login</p>
                        <p className='prod-footer1' onClick={() => navigate('/casewithdrawal')}>Job Search</p>
                        <p className='prod-footer1' onClick={() => navigate('/bbps')}>Create Free Job Alert</p>
                        <p className='prod-footer1' onClick={() => navigate('/cms')}>Job Assistance Services</p>
                        <p className='prod-footer1' onClick={() => navigate('/recharge')}>Courses</p>
                        <p className='prod-footer1' onClick={() => navigate('/pancard')}>Fraud Alert</p>

                    </div>
                    <div className='col-lg-2'>
                        <h6 className='company-footer'>EMPLOYERS</h6>
                        <p className='prod-footer1' onClick={() => navigate('/aboutus')}>Recruiter India</p>
                        <p className='prod-footer1' onClick={() => navigate('/faqs')}>Post Job</p>
                        <p className='prod-footer1'>Terms & Condition</p>
                        <p className='prod-footer1'>Privacy Policy</p>
                    </div>
                    <div className='col-lg-2'>
                        <h6 style={{ marginTop: "50px", color: "rgb(19 18 18)", fontWeight: "700", marginBottom: "15px" }}>Download The App</h6>
                        <img src={Google} alt='' style={{ width: "120px", height: "50px", cursor: "pointer", marginTop: "0px", marginBottom: "10px" }} /><br />
                        <img src={App} alt='' style={{ height: "50px", width: "120px", cursor: "pointer" }} /><br />

                        <p className='follow-footer'>Follow Us</p>

                        <FaFacebook className='footer-icon' />
                        <FaLinkedin className='footer-icon' />
                        <FaSquareTwitter className='footer-icon' />
                        <VscGithubInverted className='footer-icon' />
                        <HiWifi className='footer-icon' />

                    </div>
                </div>


            </div>
            <p style={{ marginLeft: "450px", marginTop: "20px", fontWeight: "700" }}>&copy;2023 HayJob. All rights reserved</p>
        </div>
    )
}

export default Footer