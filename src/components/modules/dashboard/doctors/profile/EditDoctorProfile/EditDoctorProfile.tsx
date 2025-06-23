import CustomTabTrigger from "@/components/ui/core/CustomTabTrigger";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { AiOutlineBook, AiOutlineClockCircle, AiOutlineHome, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import DoctorPersonalInfoForm from "./DoctorPersonalInfoForm";
import DoctorEducationForm from "./DoctorEducationForm";

const tabItems = [
  { title: "Personal", value: "personal", icon: AiOutlineUser },
  { title: "Education", value: "education", icon: AiOutlineBook },
  { title: "Experience", value: "experience", icon: AiOutlineClockCircle },
  { title: "Contact", value: "contact", icon: AiOutlinePhone },
  { title: "Clinics", value: "clinics", icon: AiOutlineHome },
];

const EditDoctorProfile = () => {
  return (
    <div>
      <Tabs defaultValue="personal">
        <TabsList className="gap-2 flex items-center justify-between mb-5 card-bg-gradient w-full border-2 h-14 sm:h-16 rounded-xl p-1 ">
          {tabItems.map(({ title, value, icon: Icon }) => (
            <CustomTabTrigger key={value} value={value}>
              <Icon className="text-xl md:text-base bs:text-xl block md:hidden xl:block" />
              <span className="hidden md:block md:text-lg bs:text-xl">{title}</span>
            </CustomTabTrigger>
          ))}
        </TabsList>

        <TabsContent value="personal">
          <DoctorPersonalInfoForm />
        </TabsContent>
        <TabsContent value="education">
          <DoctorEducationForm/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditDoctorProfile;
