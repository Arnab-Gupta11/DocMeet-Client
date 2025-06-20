"use server";
export const getLoginDoctorVerificationStatus = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/doctor/doctor-status/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await res.json();
  return result;
};
