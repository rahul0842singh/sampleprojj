import React from 'react'
import Navbar from './Navbar'
import images from "../images/images.png"
import LeaveReport from './LeaveReport'
import { NavLink } from 'react-router-dom'
import DashboardComp from './DashboardComp'

const StudentDashboard = () => {
  return (
    <>
      <header>
        <div class="px-3 py-2 text-bg-dark">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
              </a>

              <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

                <li>
                  <a href="#" class="nav-link text-white">
                    <i width="24" height="24" style={{ fontSize: "150%" }} class="bi bi-speedometer2 ms-4"></i><br />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white">
                    <NavLink className="nav-link text-white" to="/profile">
                    <i width="24" height="24" style={{ fontSize: "150%" }} class="bi bi-person-fill ms-2"></i><br />
                    Profile
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

     <DashboardComp/>
      <main class="container">
        <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
          <img class="me-3 rounded-circle" src={images} alt="" width="48" height="44" />
          <div class="lh-1">
            <h1 class="h6 mb-0 text-white lh-1">Rahul kumar</h1>
            <small>System Enginner - Tata consultancy Services</small>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 col-md-8 col-lg-8'>
              <div class="my-3 p-3 bg-body rounded shadow-sm">
                {/* --------------------employee services--------------------------------------------------------- */}
                <h6 class="border-bottom pb-2 mb-0"> Employee Services </h6>
                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text><label></label></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@My Allocation & Utilization</strong>
                    Here you can see your project allocation and roles you are assigned by your manager.
                  </p>
                </div>
                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@Global ESS</strong>
                    Apply leave, see your profile details, employee perks and responsibilty.
                  </p>
                </div>
                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@GeeksRoll Global Helpdesk</strong>
                    Click here 24*7 support and raise ticket for any problem.
                  </p>
                </div>
                {/* -------------------------Learning and Collaboration---------------------------- */}
                <h6 class="border-bottom pb-2 mb-0 mt-5"> Learning and Collaboration</h6>
                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text><label></label></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@GeekLearn portal</strong>
                    A typical learning portal may offer various features, such as interactive courses, video tutorials, quizzes, games, simulations, discussion forums, and social learning communities. The courses may cover a wide range of subjects, from academic subjects like math and science to vocational skills like coding and graphic design.
                  </p>
                </div>

                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@Innovation Management System</strong>
                    An Innovation Management System is a structured process for managing innovation within an organization. It is a framework that enables companies to capture, prioritize, and develop.
                  </p>
                </div>
                {/* -------------------------Sales and marketing---------------------------- */}
                <h6 class="border-bottom pb-2 mb-0 mt-5"> Sales & Marketing</h6>
                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text><label></label></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@Contract Management System</strong>
                    A Contact Management System is a software application that helps individuals and organizations manage their contacts in a centralized database. It is designed to streamline and simplify the process of managing and organizing contact information, such as names, addresses, phone numbers, and email addresses.
                  </p>
                </div>

                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@Contract Review System</strong>
                    A Contact Review System is a process or tool that allows individuals or organizations to evaluate the quality of their contact database or list. It is designed to help identify and remove outdated or incorrect contact information, ensuring that contact lists remain
                  </p>
                </div>


                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@Contact review 24*7</strong>
                    Get your contact review system all 24*7.
                  </p>
                </div>

                <div class="d-flex text-muted pt-3">
                  <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

                  <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@Contractual Obligation Governance System</strong>
                    A Contractual Obligation Governance System is a process or software tool that helps organizations manage their contractual agreements and ensure that all parties fulfill their contractual obligations. It is designed to ensure that contracts are executed properly
                  </p>
                </div>





                <small class="d-block text-end mt-3">
                  <a href="#">All updates</a>
                </small>
              </div>







            </div>

            <div className='col-sm-4 col-md-4 col-lg-4'>
              <div class="bg-size-cover bg-position-center card-side rounded-lg py-5" >
                <div class="py-5 px-4 text-center">
                  <h5 class="mb-2">Rahul kumar <br />(Employee id : <bold>2218398</bold>)</h5>
                  <button className='btn btn-primary btn-sm'>Edit Profile</button>
                </div>
              </div>
            </div>





          </div>
        </div>








        {/* <div class="my-3 p-3 bg-body rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">Suggestions</h6>
          <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span class="d-block">@username</span>
            </div>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span class="d-block">@username</span>
            </div>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span class="d-block">@username</span>
            </div>
          </div>
          <small class="d-block text-end mt-3">
            <a href="#">All suggestions</a>
          </small>
        </div> */}
      </main>





    </>
  )
}

export default StudentDashboard