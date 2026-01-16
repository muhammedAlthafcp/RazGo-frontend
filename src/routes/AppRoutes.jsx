import { Routes, Route } from "react-router-dom";

/* Layouts */
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import BusinessLayout from "../layouts/BusinessLayout";

/* User Pages */
import Home from "../pages/user/Home";
import Login from "../views/common/Login";
import SignupView from "../views/common/Signup";
import StudentProfile from "../views/users/StudentProfile";
import Jobs from "../views/users/Jobs";
import JobDetails from "../views/users/JobDetails";
import UserNotifications from "../views/users/UserNotifications";

/* Admin Pages */
import AdminDashboard from "../pages/admin/Dashboard";
import AdminUsers from "../pages/admin/Users";
import AdminBusinesses from "../pages/admin/Businesses";
import AdminJobs from "../pages/admin/Jobs";
import AdminReports from "../pages/admin/Reports";
import AdminUserDetails from "../pages/admin/UserDetails";
import AdminBusinessDetails from "../pages/admin/BusinessDetails";
import AdminJobDetails from "../pages/admin/AdminJobDetails";


/* Business Pages */
import BusinessDashboard from "../pages/owner/OwnerDashboard";
import BusinessProfile from "../views/owner/BusinessProfile";
import BusinessProfileEdit from "../views/owner/BusinessProfileEdit";
import CreateJob from "../views/owner/CreateJob";
import MyJobs from "../views/owner/MyJobs";
import NewMatches from "../views/owner/NewMatches";
import Notifications from "../views/owner/Notifications";
import EditJob from "../views/owner/EditJob";
import CandidateDetails from "../views/owner/CandidateDetails";

export default function AppRoutes() {
  return (
    <Routes>

      {/* USER ROUTES (WITH NAVBAR) */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/userprofile" element={<StudentProfile />} />
        <Route path="/alljobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
         <Route
        path="/user/notifications"
        element={<UserNotifications />}
      />
      </Route>

      {/* USER ROUTES (NO NAVBAR) */}
     

      {/* ADMIN ROUTES */}
   <Route element={<AdminLayout />}>
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/admin/users" element={<AdminUsers />} />
  <Route path="/admin/businesses" element={<AdminBusinesses />} />
  <Route path="/admin/jobs" element={<AdminJobs />} />
  <Route path="/admin/reports" element={<AdminReports />} />
  <Route path="/admin/users/:id" element={<AdminUserDetails />} />
  <Route path="/admin/businesses/:id" element={<AdminBusinessDetails />}/>
  <Route path="/admin/jobs/:id" element={<AdminJobDetails />} />


</Route>



      {/* BUSINESS ROUTES */}
      <Route element={<BusinessLayout />}>
        <Route path="/business" element={<BusinessDashboard />} />
        <Route path="/businessmanprofile" element={<BusinessProfile />} />
        <Route path="/createpost" element={<CreateJob />} />
        <Route path="/business/profile" element={<BusinessProfileEdit />} />
        <Route path="/business/jobs" element={<MyJobs />} />
        <Route path="/business/new-matches" element={<NewMatches />} />
        <Route path="/business/notifications" element={<Notifications />} />
        <Route path="/business/jobs/:id/edit" element={<EditJob />} />
        <Route
          path="/business/candidates/:id"
          element={<CandidateDetails />}
        />
      </Route>

    </Routes>
  );
}
