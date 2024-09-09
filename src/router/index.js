import React, { useEffect } from "react";
import { Routes, Route, useRoutes, useNavigate } from "react-router-dom";

import { ScrollToTop } from "../components";
import Home from "../pages/home/Modules";

// admin
import Profile from "../pages/admin/Profile";
import ProfileSettings from "../pages/admin/ProfileSettings";

// auths pages
import AuthRegister from "../pages/auths/AuthRegister";
import AuthLogin from "../pages/auths/AuthLogin";
import AuthReset from "../pages/auths/AuthReset";
import NotFound from "../pages/error/NotFound";

import User from "../pages/masters/user/User";
import UsersList from "../pages/masters/user/UsersList";
import UsersView from "../pages/masters/user/UsersView";
import UsersEdit from "../pages/masters/user/UsersEdit";

import { Test1 } from "../pages/test/Test1";

import ChangePassword from "../pages/masters/change-password/ChangePassword";
import HrDashboard from "../pages/dashboard/HrDashboard";
import Caste from "../pages/masters/caste/Caste";
import State from "../pages/masters/state/State";
import City from "../pages/masters/city/City";
import Taluk from "../pages/masters/taluk/Taluk";
import District from "../pages/masters/district/District";
import Category from "../pages/job/category/category";
import Role from "../pages/job/role/role";
import Position from "../pages/job/position/position";
import Course_Name from "../pages/masters/education_course/education_course";
import Education_Level from "../pages/masters/education_level/education_level";
import Institutuion_Name from "../pages/masters/institution_name/institution_name";
import Recruitment_Company from "../pages/masters/recruitment_company/recruitment_company";
import Recruitment_Agency from "../pages/masters/recruitment_agency/recruitment_agency";
import Applicant from "../pages/job/applicant/applicant";
import Job_application from "../pages/job/job_application/job_application";

// Admin and Reports

function Router() {
  const token = localStorage.getItem("jwtToken");
  const isAuthenticated = token !== null && token !== "";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/seriui");
    }
  }, [isAuthenticated, navigate]);

  return (
    <ScrollToTop>
      <Routes>
        {/* <Route path="/blank" element={<Blank />} /> */}
        <Route path="/seriui" element={<AuthLogin />} />
        <Route path="/seriui/home" element={<Home />} />

        {/* Conditional rendering for protected route */}
        {isAuthenticated && (
          <Route path="seriui">
            <Route path="admin">
              <Route path="profile" element={<Profile />} />
              <Route path="profile-settings" element={<ProfileSettings />} />
            </Route>

            <Route path="auths">
              <Route path="auth-register" element={<AuthRegister />} />
              <Route path="auth-login" element={<AuthLogin />} />
              <Route path="auth-reset" element={<AuthReset />} />
            </Route>

            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path="user" element={<User />} />
            <Route path="users-list" element={<UsersList />} />
            <Route path="users-view/:id" element={<UsersView />} />
            <Route path="users-edit/:id" element={<UsersEdit />} />

            {/* Change Password */}
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="test1" element={<Test1 />} />

            <Route path="dashboard" element={<HrDashboard />} />

            <Route path="masters">
              <Route path="caste" element={<Caste />} />
            </Route>

            <Route path="masters">
              <Route path="skills" element={<skills />} />
            </Route>

            <Route path="masters">
              <Route path="state" element={<State />} />
            </Route>

            <Route path="masters">
              <Route path="district" element={<District />} />
            </Route>

            <Route path="masters">
              <Route path="taluk" element={<Taluk />} />
            </Route>

            <Route path="masters">
              <Route path="city" element={<City />} />
            </Route>

            <Route path="masters">
              <Route path="course_name" element={<Course_Name />} />
            </Route>

            <Route path="masters">
              <Route path="education_level" element={<Education_Level />} />
            </Route>

            <Route path="masters">
              <Route path="institutuion_name" element={<Institutuion_Name />} />
            </Route>

            <Route path="masters">
              <Route
                path="recritment_company"
                element={<Recruitment_Company />}
              />
            </Route>

            <Route path="masters">
              <Route
                path="recruitment_agency"
                element={<Recruitment_Agency />}
              />
            </Route>

            <Route path="job">
              <Route path="category" element={<Category />} />
            </Route>

            <Route path="job">
              <Route path="role" element={<Role />} />
            </Route>

            <Route path="job">
              <Route path="position" element={<Position />} />
            </Route>

            <Route path="job">
              <Route path="applicant" element={<Applicant />} />
            </Route>

            <Route path="job">
              <Route path="job_application" element={<Job_application />} />
            </Route>
          </Route>
        )}
      </Routes>
    </ScrollToTop>
  );
}

export default Router;
