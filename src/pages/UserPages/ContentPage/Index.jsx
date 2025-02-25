import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getAboutusPageDetails,
  getPrivacyPoliciesPageDetails,
  getTermsConditionsPageDetails,
} from "../../../redux/admin/contentPages/thunk";
import { handleApiRequest } from "../../../services/handleApiRequest";

/**
 * Description:- This component shows the content pages like about-us, privacy-policies, terms-and-conditions added by admin.
 * @returns {any}
 */

const ContentPageTab = () => {
  const { pathname } = useLocation();
  const { aboutusContent, privacyPoliciesContent, termsAndConditionsContent } =
    useSelector((state) => state.contentPages);

  const handleContentDetails = async () => {
    if (pathname === "/privacy_policies") {
      await handleApiRequest(getPrivacyPoliciesPageDetails, {});
    } else if (pathname === "/terms_of_use") {
      await handleApiRequest(getTermsConditionsPageDetails, {});
    } else if (pathname === "/about_us") {
      await handleApiRequest(getAboutusPageDetails, {});
    }
  };

  useEffect(() => {
    handleContentDetails();
  }, [pathname]);

  // console.log("aboutusContent", aboutusContent);
  // console.log("privacyPoliciesContent", privacyPoliciesContent);
  // console.log("termsAndConditionsContent", termsAndConditionsContent);

  return (
    <div className="cardCstm container py-3">
      {/* <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
            <div className="left d-flex align-items-center gap-10">
              <h4 className="m-0 fw-bold">
                {pathname === "/privacy_policies"
                  ? contentPageDetails?.name
                  : pathname === "/terms_of_use"
                  ? pathname === "/about_us"
                  : ""}
              </h4>
            </div>
          </div> */}
      <div className="CardBody py-3">
        <div
          className="px-lg-4 px-3"
          dangerouslySetInnerHTML={{
            __html:
              pathname === "/privacy_policies"
                ? privacyPoliciesContent
                : pathname === "/terms_of_use"
                ? termsAndConditionsContent
                : pathname === "/about_us"
                ? aboutusContent
                : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContentPageTab;
