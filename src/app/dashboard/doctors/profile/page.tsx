import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { LuEye } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import CustomTabTrigger from "@/components/ui/core/CustomTabTrigger";
import ViewDoctorProfile from "@/components/modules/dashboard/doctors/profile/ViewDoctorProfile/ViewDoctorProfile";
import EditDoctorProfile from "@/components/modules/dashboard/doctors/profile/EditDoctorProfile/EditDoctorProfile";
const DoctorProfilePage = () => {
  return (
    <div className="">
      <Tabs defaultValue="doctor-preview">
        <div className="flex items-center justify-between mb-8">
          <span className="text-3xl font-bold">Profile</span>
          <TabsList className="gap-1.5">
            <CustomTabTrigger value="doctor-preview">
              <LuEye />
              <span className="hidden sm:block">Preview</span>
            </CustomTabTrigger>
            <CustomTabTrigger value="edit-doctor-profile">
              <FiEdit />
              <span className="hidden sm:block">Edit</span>
            </CustomTabTrigger>
          </TabsList>
        </div>

        <TabsContent value="doctor-preview">
          <ViewDoctorProfile />
        </TabsContent>
        <TabsContent value="edit-doctor-profile">
          <EditDoctorProfile />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorProfilePage;
