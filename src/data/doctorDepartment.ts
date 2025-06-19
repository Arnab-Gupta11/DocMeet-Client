import { HiOutlineHeart } from "react-icons/hi"; // Heroicons
import { FaStethoscope, FaCut, FaBrain, FaSyringe, FaEye, FaBone, FaUsers, FaSearch, FaMicroscope, FaXRay } from "react-icons/fa"; // Font Awesome
import { MdOutlineMedicalServices, MdOutlineLocalPharmacy, MdOutlineHealthAndSafety, MdOutlineChildCare, MdOutlineEmergency } from "react-icons/md"; // Material Icons
import { FiActivity, FiShield } from "react-icons/fi"; // Feather Icons
import { BsDroplet, BsEar, BsGear, BsLightning, BsGraphUp, BsAlignMiddle } from "react-icons/bs"; // Bootstrap Icons

export const doctorDepartments = [
  {
    name: "Anesthesiology",
    icon: FaSyringe,
    description: "Manages pain and anesthesia during surgery.",
  },
  {
    name: "Cardiology",
    icon: HiOutlineHeart,
    description: "Diagnoses and treats heart and blood vessel conditions.",
  },
  {
    name: "Community Medicine",
    icon: FaUsers,
    description: "Focuses on public health and preventive care.",
  },
  {
    name: "Conservative Dentistry & Endodontics",
    icon: FiShield,
    description: "Treats tooth decay and root canal problems.",
  },
  {
    name: "Dental Public Health",
    icon: FaUsers,
    description: "Promotes dental health and disease prevention at community level.",
  },
  {
    name: "Dermatology",
    icon: MdOutlineMedicalServices,
    description: "Treats skin, hair, and nail disorders.",
  },
  {
    name: "Emergency Medicine",
    icon: MdOutlineEmergency,
    description: "Provides immediate care for urgent medical conditions.",
  },
  {
    name: "Endocrinology",
    icon: MdOutlineLocalPharmacy,
    description: "Treats hormone imbalances and related disorders.",
  },
  {
    name: "ENT (Ear, Nose, Throat)",
    icon: BsEar,
    description: "Treats disorders of the ear, nose, and throat.",
  },
  {
    name: "Forensic Medicine",
    icon: FaSearch,
    description: "Applies medical knowledge to legal cases and autopsies.",
  },
  {
    name: "Gastroenterology",
    icon: MdOutlineLocalPharmacy,
    description: "Treats digestive system issues like ulcers and IBS.",
  },
  {
    name: "General Medicine",
    icon: FaStethoscope,
    description: "Treats common illnesses, infections, and chronic diseases.",
  },
  {
    name: "General Surgery",
    icon: FaCut,
    description: "Performs surgeries on various parts of the body.",
  },
  {
    name: "Hematology",
    icon: BsDroplet,
    description: "Treats blood-related disorders and cancers.",
  },
  {
    name: "Hepatology",
    icon: BsDroplet,
    description: "Specializes in liver, gallbladder, and pancreas disorders.",
  },
  {
    name: "Infectious Diseases",
    icon: FiShield,
    description: "Diagnoses and treats infections like COVID, TB, etc.",
  },
  {
    name: "Nephrology",
    icon: BsDroplet,
    description: "Manages kidney function and related diseases.",
  },
  {
    name: "Neurology",
    icon: FaBrain,
    description: "Treats diseases of the brain, spine, and nerves.",
  },
  {
    name: "Neurosurgery",
    icon: FaBrain,
    description: "Performs surgery on the brain, spinal cord, and nerves.",
  },
  {
    name: "Obstetrics & Gynecology",
    icon: FaUsers,
    description: "Handles pregnancy, childbirth, and female reproductive health.",
  },
  {
    name: "Oncology",
    icon: BsLightning,
    description: "Treats cancer with chemotherapy, radiation, and more.",
  },
  {
    name: "Ophthalmology",
    icon: FaEye,
    description: "Diagnoses and treats eye diseases and vision issues.",
  },
  {
    name: "Oral & Maxillofacial Surgery",
    icon: FaCut,
    description: "Performs surgeries of the face, jaw, and mouth.",
  },
  {
    name: "Oral Medicine & Radiology",
    icon: FaXRay,
    description: "Diagnoses oral diseases and interprets dental X-rays.",
  },
  {
    name: "Oral Pathology",
    icon: FaMicroscope,
    description: "Diagnoses oral diseases at a microscopic level.",
  },
  {
    name: "Orthodontics",
    icon: BsAlignMiddle,
    description: "Corrects teeth and jaw alignment using braces, etc.",
  },
  {
    name: "Orthopedics",
    icon: FaBone,
    description: "Treats bone, joint, and muscle conditions.",
  },
  {
    name: "Pediatrics",
    icon: MdOutlineChildCare,
    description: "Provides medical care for infants and children.",
  },
  {
    name: "Pedodontics (Pediatric Dentistry)",
    icon: MdOutlineChildCare,
    description: "Provides dental care for children.",
  },
  {
    name: "Periodontology",
    icon: BsGear,
    description: "Manages gum diseases and supporting structures of teeth.",
  },
  {
    name: "Physical Medicine & Rehabilitation",
    icon: BsGraphUp,
    description: "Restores function and mobility after injury or illness.",
  },
  {
    name: "Prosthodontics",
    icon: MdOutlineMedicalServices,
    description: "Restores missing teeth with bridges, dentures, and crowns.",
  },
  {
    name: "Psychiatry",
    icon: MdOutlineHealthAndSafety,
    description: "Diagnoses and treats mental health disorders.",
  },
  {
    name: "Pulmonology",
    icon: FiActivity,
    description: "Treats respiratory system and lung conditions.",
  },
  {
    name: "Radiology",
    icon: FaXRay,
    description: "Uses imaging to diagnose and monitor diseases.",
  },
  {
    name: "Rheumatology",
    icon: FaBone,
    description: "Treats arthritis and autoimmune joint disorders.",
  },
  {
    name: "Urology",
    icon: MdOutlineLocalPharmacy,
    description: "Treats urinary tract and male reproductive issues.",
  },
];
