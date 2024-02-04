import MainDashboardLayout from "@/components/pages/Dashboard/MainDashboardLayout";
import RequireAuth from "@/components/utilities/RequireAuth";

const page = () => {
  return (
    <>
      <RequireAuth>
        <MainDashboardLayout />
      </RequireAuth>
    </>
  );
};

export default page;
