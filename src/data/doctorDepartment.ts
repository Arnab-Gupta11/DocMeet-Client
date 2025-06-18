import { HiOutlineHeart } from "react-icons/hi"; // Heroicons
import { FaStethoscope, FaCut, FaBrain, FaSyringe, FaEye, FaBone, FaUsers, FaSearch, FaMicroscope, FaXRay } from "react-icons/fa"; // Font Awesome
import { MdOutlineMedicalServices, MdOutlineLocalPharmacy, MdOutlineHealthAndSafety, MdOutlineChildCare, MdOutlineEmergency } from "react-icons/md"; // Material Icons
import { FiActivity, FiShield } from "react-icons/fi"; // Feather Icons
import { BsDroplet, BsEar, BsGear, BsLightning, BsGraphUp, BsAlignMiddle } from "react-icons/bs"; // Bootstrap Icons

export const doctorDepartments = [
  {
    name: "General Medicine",
    icon: FaStethoscope, // Font Awesome: Represents general health checkups
    description: "Treats common illnesses, infections, and chronic diseases.",
  },
  {
    name: "General Surgery",
    icon: FaCut, // Font Awesome: Represents surgical tools
    description: "Performs surgeries on various parts of the body.",
  },
  {
    name: "Cardiology",
    icon: HiOutlineHeart, // Heroicons: Represents heart-related care
    description: "Diagnoses and treats heart and blood vessel conditions.",
  },
  {
    name: "Dermatology",
    icon: MdOutlineMedicalServices, // Material Icons: Represents skin care services
    description: "Treats skin, hair, and nail disorders.",
  },
  {
    name: "Neurology",
    icon: FaBrain, // Font Awesome: Represents brain and nervous system
    description: "Treats diseases of the brain, spine, and nerves.",
  },
  {
    name: "Neurosurgery",
    icon: FaBrain, // Font Awesome: Aligns with neurology for brain surgery
    description: "Performs surgery on the brain, spinal cord, and nerves.",
  },
  {
    name: "Gastroenterology",
    icon: MdOutlineLocalPharmacy, // Material Icons: Represents digestive health
    description: "Treats digestive system issues like ulcers and IBS.",
  },
  {
    name: "Hepatology",
    icon: BsDroplet, // Bootstrap Icons: Represents liver-related fluids
    description: "Specializes in liver, gallbladder, and pancreas disorders.",
  },
  {
    name: "Nephrology",
    icon: BsDroplet, // Bootstrap Icons: Represents kidney filtration
    description: "Manages kidney function and related diseases.",
  },
  {
    name: "Urology",
    icon: MdOutlineLocalPharmacy, // Material Icons: Represents urinary health
    description: "Treats urinary tract and male reproductive issues.",
  },
  {
    name: "Orthopedics",
    icon: FaBone, // Font Awesome: Represents bones and joints
    description: "Treats bone, joint, and muscle conditions.",
  },
  {
    name: "Psychiatry",
    icon: MdOutlineHealthAndSafety, // Material Icons: Represents mental health
    description: "Diagnoses and treats mental health disorders.",
  },
  {
    name: "Endocrinology",
    icon: MdOutlineLocalPharmacy, // Material Icons: Represents hormonal treatments
    description: "Treats hormone imbalances and related disorders.",
  },
  {
    name: "Pulmonology",
    icon: FiActivity, // Feather Icons: Represents respiratory activity
    description: "Treats respiratory system and lung conditions.",
  },
  {
    name: "Pediatrics",
    icon: MdOutlineChildCare, // Material Icons: Represents child care
    description: "Provides medical care for infants and children.",
  },
  {
    name: "Obstetrics & Gynecology",
    icon: FaUsers, // Font Awesome: Represents group care for women
    description: "Handles pregnancy, childbirth, and female reproductive health.",
  },
  {
    name: "Ophthalmology",
    icon: FaEye, // Font Awesome: Represents vision care
    description: "Diagnoses and treats eye diseases and vision issues.",
  },
  {
    name: "ENT (Ear, Nose, Throat)",
    icon: BsEar, // Bootstrap Icons: Represents ear-related care
    description: "Treats disorders of the ear, nose, and throat.",
  },
  {
    name: "Anesthesiology",
    icon: FaSyringe, // Font Awesome: Represents anesthesia
    description: "Manages pain and anesthesia during surgery.",
  },
  {
    name: "Oncology",
    icon: BsLightning, // Bootstrap Icons: Represents cancer treatment energy
    description: "Treats cancer with chemotherapy, radiation, and more.",
  },
  {
    name: "Radiology",
    icon: FaXRay, // Font Awesome: Represents imaging
    description: "Uses imaging to diagnose and monitor diseases.",
  },
  {
    name: "Rheumatology",
    icon: FaBone, // Font Awesome: Represents joint disorders
    description: "Treats arthritis and autoimmune joint disorders.",
  },
  {
    name: "Emergency Medicine",
    icon: MdOutlineEmergency, // Material Icons: Represents urgent care
    description: "Provides immediate care for urgent medical conditions.",
  },
  {
    name: "Physical Medicine & Rehabilitation",
    icon: BsGraphUp, // Bootstrap Icons: Represents recovery progress
    description: "Restores function and mobility after injury or illness.",
  },
  {
    name: "Infectious Diseases",
    icon: FiShield, // Feather Icons: Represents protection against infections
    description: "Diagnoses and treats infections like COVID, TB, etc.",
  },
  {
    name: "Hematology",
    icon: BsDroplet, // Bootstrap Icons: Represents blood
    description: "Treats blood-related disorders and cancers.",
  },
  {
    name: "Forensic Medicine",
    icon: FaSearch, // Font Awesome: Represents investigation
    description: "Applies medical knowledge to legal cases and autopsies.",
  },
  {
    name: "Community Medicine",
    icon: FaUsers, // Font Awesome: Represents community health
    description: "Focuses on public health and preventive care.",
  },
  // BDS Departments
  {
    name: "Oral & Maxillofacial Surgery",
    icon: FaCut, // Font Awesome: Represents surgical procedures
    description: "Performs surgeries of the face, jaw, and mouth.",
  },
  {
    name: "Orthodontics",
    icon: BsAlignMiddle, // Bootstrap Icons: Represents teeth alignment
    description: "Corrects teeth and jaw alignment using braces, etc.",
  },
  {
    name: "Prosthodontics",
    icon: MdOutlineMedicalServices, // Material Icons: Represents dental restoration
    description: "Restores missing teeth with bridges, dentures, and crowns.",
  },
  {
    name: "Conservative Dentistry & Endodontics",
    icon: FiShield, // Feather Icons: Represents tooth preservation
    description: "Treats tooth decay and root canal problems.",
  },
  {
    name: "Periodontology",
    icon: BsGear, // Bootstrap Icons: Represents gum structure support
    description: "Manages gum diseases and supporting structures of teeth.",
  },
  {
    name: "Pedodontics (Pediatric Dentistry)",
    icon: MdOutlineChildCare, // Material Icons: Represents child dental care
    description: "Provides dental care for children.",
  },
  {
    name: "Oral Pathology",
    icon: FaMicroscope, // Font Awesome: Represents microscopic diagnosis
    description: "Diagnoses oral diseases at a microscopic level.",
  },
  {
    name: "Dental Public Health",
    icon: FaUsers, // Font Awesome: Represents community dental health
    description: "Promotes dental health and disease prevention at community level.",
  },
  {
    name: "Oral Medicine & Radiology",
    icon: FaXRay, // Font Awesome: Represents dental imaging
    description: "Diagnoses oral diseases and interprets dental X-rays.",
  },
];
