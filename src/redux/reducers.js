import { combineReducers } from "redux";
import commonSlice from "./common/slice";
import authSlice from "./auth/slice";
import profileSlice from "./profile/slice";
import userSlice from "./admin/user/slice";
import promptSlice from "./admin/prompts/slice";
import scriptSlice from "./admin/scripts/slice";
import subscriptionSlice from "./admin/subscriptions/slice";
import contentPageSlice from "./admin/contentPages/slice";
import faqSlice from "./admin/faqs/slice";
import configrationsSlice from "./admin/configrations/slice";
import botSlice from "./admin/bots/slice";
import creditPlansSlice from "./admin/creditPlans/slice";
import contactSlice from "./contactus/slice";
import productsSlice from "./user/products/slice";
import subscriptionPurchaseSlice from "./user/subscriptionPurchase/slice";

const appReducer = combineReducers({
  common: commonSlice,
  auth: authSlice,
  profile: profileSlice,
  users: userSlice,
  prompts: promptSlice,
  scripts: scriptSlice,
  subscriptions: subscriptionSlice,
  contentPages: contentPageSlice,
  faqs: faqSlice,
  configrations: configrationsSlice,
  bots: botSlice,
  creditPlans: creditPlansSlice,
  contactus: contactSlice,
  products: productsSlice,
  subscriptionPurchase: subscriptionPurchaseSlice,
});

export default appReducer;
