import Banner from "@/components/modules/home/Banner/Banner";
import { getCurrentUser } from "@/services/auth";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <div className="overflow-x-hidden">
      <Banner />
    </div>
  );
};

export default HomePage;
