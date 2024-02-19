// import AadharDetails from "../views/ekyc/NonKRAForm/AadharDetails";
// import PersonalDetails from "../views/ekyc/PersonalDetails/PersonalDetails";
// import SignatureUpload from "../views/ekyc/SignatureUpload";
// import BankDetails from "../views/ekyc/BankDetails/BankDetails"
// import ESignPage from "../views/ekyc/Esign/ESignPage"
import HufDetails from "../views/HUF/HufDetails"
import KartaDetails from "../views/HUF/KartaDetails"
import BankDetails from "../views/HUF/BankDetails/BankDetails";
import ESignPage from "../views/HUF/Esign/Esign"
// ==============================|| MAIN ROUTING ||============================== //
// const authCheck = (component) => <AuthRequired>{component}</AuthRequired>;

const MainRoutes = {
  path: "/",
  //   element: <MainLayout />,
  children: [
    {
      path: "/huf/huf-details",
      element: <HufDetails />,
    },
    {
      path: "/huf/karta-details",
      element: <KartaDetails />,
    },
    // {
    //   path: "/eKYC/signature-upload",
    //   element: <SignatureUpload />,
    // },
      {
        path: '/huf/bank-details',
        element: <BankDetails />
      },
      {
        path: '/huf/e-sign',
        element: <ESignPage />
      },
    //   {
    //     path: '/eKYC/digio-manual',
    //     element: authCheck(<DijioDialog />)
    //   }
  ],
};
export default MainRoutes;
