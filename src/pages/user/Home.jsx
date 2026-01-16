import UserHomeView from "../../views/users/UserHomeView.jsx";
import LiveJobs from "../../views/users/LiveJobs.jsx";
import HowItWorks from "../../views/users/HowItWorks.jsx";
import TrustedBy from "../../views/users/TrustedBy.jsx";

export default function Home() {
  return (
    <>
      <UserHomeView />
      <LiveJobs />
      <HowItWorks/>
      <TrustedBy/>
      
    </>
  );
}
