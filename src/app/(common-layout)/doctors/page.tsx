import { doctorDepartments } from "@/data/doctorDepartment";

const DoctorsPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Medical Departments</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {doctorDepartments.map((dept, index) => {
            const { icon: Icon, name, description } = dept;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
