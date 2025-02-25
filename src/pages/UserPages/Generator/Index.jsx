import React, { useEffect } from "react";
// img
import webclip from "../../../Assets/Images/webclip.png";
import typingGif from "../../../Assets/Images/typing.gif";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { getProductDetails } from "../../../redux/user/products/thunk";
import { useParams } from "react-router-dom";
import { logData } from "../../../services/logService";
import { useSelector } from "react-redux";

const Generator = () => {
  const { productId } = useParams();
  const { productDetails } = useSelector((state) => state.products);

  const handleProductDetails = async () => {
    const response = await handleApiRequest(getProductDetails, productId);
  };

  useEffect(() => {
    handleProductDetails();
  }, []);

  // logData("productId", productId);
  // logData("productDetails", productDetails);

  return (
    <>
      <section
        className="section"
        style={{ position: "relative", width: "100%" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card" data-aos="fade-up">
              <div className="card-body p-2 p-md-4">
                <i className="bi bi-chat-left-text text-primary bg-primary-light px-2 py-1 rounded" />{" "}
                <b>Script Generator</b>
                <input
                  className="form-control"
                  defaultValue="ABC Version 1"
                  placeholder="Name"
                />
                {/* <div className="alert bg-primary-light selected-script my-1 text-primary" <? if (!isset($_get["edit"])) { ?>style="display:none;" {/*? } ?*/}
                &gt;[Your Selection]: <b>ABC Leads</b> New $17M Hand in Need{" "}
              </div>
              <hr />
              <form className="row g-3 form">
                <div className="col-12">
                  <div className="row  align-items-center">
                    <div className="col-md-8">
                      <img
                        src={webclip}
                        className="rounded p-1"
                        style={{ width: "30px", background: "#efefef" }}
                      />
                      <img
                        src={typingGif}
                        className="typing-icon"
                        style={{
                          width: "100px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <small className="typing-icon text-muted">
                        Generating script....{" "}
                      </small>
                      <span
                        className="text-primary complete-info"
                        style={{ display: "none" }}
                      >
                        Completed!
                      </span>
                      <div
                        className="btn-group complete-info"
                        style={{ display: "none" }}
                      >
                        <a className="btn btn-light" href="#">
                          <i className="bi bi-hand-thumbs-up text-success" />
                        </a>
                        <a className="btn btn-light" href="#">
                          <i className="bi bi-hand-thumbs-down text-danger" />
                        </a>
                      </div>
                      <a
                        className="btn btn-light btn-sm border-primary bg-primary-light complete-info"
                        style={{ display: "none" }}
                        href="#"
                      >
                        <i className="bi bi-stars text-primary" /> Other Options
                      </a>
                    </div>
                    <div className="col-md-4">
                      <div className="btn-group float-end">
                        <a className="btn btn-light btn-sm" href="#">
                          Copy Text
                        </a>
                        <a
                          className="btn btn-light btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#ExtralargeModal"
                          href="#"
                        >
                          Save as Copy
                        </a>
                        <a
                          className="btn btn-primary btn-sm"
                          href="product-main.php"
                        >
                          <i className="bi bi-floppy" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div
                    contentEditable
                    className="form-control disabled nocut"
                    id="typed"
                    style={{ minHeight: "500px", overflowY: "scroll" }}
                    disabled
                  >
                    {/* [What's the difference… (answer common question of target
                    market)]
                    <br />
                    <br />
                    What's the difference between Pure H2O Water and regular
                    bottled water?
                    <br />
                    <br />
                    [Explain the difference here…]
                    <br />
                    <br />
                    Well, regular bottled water often contains impurities and
                    contaminants that can harm your health. But Pure H2O Water
                    doesn't. In fact, Pure H2O Water undergoes a rigorous
                    purification process to ensure you're drinking nothing but
                    pure H2O.
                    <br />
                    <br />
                    [So if you'd like benefit, CTA]
                    <br />
                    <br />
                    So if you value your health and want to enjoy the purest,
                    cleanest, and safest bottled water on the market, choose
                    Pure H2O Water.
                    <br />
                    <br />
                    [Here is the process…] */}
                    <i className="text-muted">
                      {productDetails.data?.productAvatar &&
                        Object.entries(productDetails.data.productAvatar).map(
                          (avatarDetails) =>
                            avatarDetails[0] !== "id" &&
                            avatarDetails[0] !== "productId" && (
                              <p>
                                {`[${avatarDetails[0]}]: ${avatarDetails[1]}`}
                              </p>
                            )
                        )}
                      {/* <p>[Product]: Pure H2O Water</p>
                      <p>
                        [Demographics]: Health-conscious individuals, athletes,
                        and professionals aged 25-55 who value purity and
                        quality in their daily hydration needs.
                      </p>
                      <p>
                        CORE SALES PITCH
                        <br />
                        [Core Painpoint]: The struggle to find truly pure,
                        uncontaminated water that tastes great and supports
                        optimal health.
                      </p>
                      <p>
                        [Additional Painpoints]: Concerns about the quality and
                        safety of tap water; dissatisfaction with the taste and
                        packaging of other bottled waters.
                      </p>
                      <p>
                        [Emotional Pain]: Fear of consuming harmful substances
                        through low-quality water; frustration with the lack of
                        reliable, high-quality hydration options.
                      </p>
                      <p>
                        [Root cause of their problem]: The prevalence of
                        contaminants in tap water and the lack of transparency
                        in the bottled water industry.
                      </p>
                      <p>
                        [Product's Promise]: Pure H2O Water promises the purest,
                        most refreshing hydration experience, free from
                        contaminants and packaged in elegant, eco-friendly
                        bottles.
                      </p>
                      <p>
                        [How it works]: Our water is sourced from pristine
                        springs and undergoes rigorous purification processes to
                        ensure absolute purity.
                      </p>
                      <p>
                        [Amazing Benefits of Success]: Improved health, enhanced
                        physical performance, and peace of mind knowing you're
                        consuming the purest water available.
                      </p>
                      <p>
                        [Secondary Benefits of Success]: The satisfaction of
                        supporting a company that values sustainability and
                        transparency.
                      </p>
                      <p>
                        [Emotional Benefits of Success]: Feeling confident and
                        empowered in your hydration choices.
                      </p>
                      <p>
                        [Proof of Efficacy]: Independent lab tests confirm the
                        absolute purity of Pure H2O Water.
                      </p>
                      <p>
                        [Top Testimonials]: "It's the purest water I've ever
                        had" - Customer A
                      </p>
                      <p>
                        SPECIFICS ABOUT DEMO
                        <br />
                        [Hesitations]: Concerns about the price point compared
                        to regular bottled water.
                      </p>
                      <p>
                        [Overcoming Hesitations]: Emphasizing the superior
                        quality, taste, and health benefits of Pure H2O Water.
                      </p>
                      <p>
                        [Biggest Fear]: Consuming contaminated water that could
                        harm their health.
                      </p>
                      <p>
                        [What Doesn't Work]: Settling for regular bottled water
                        that may not be as pure or taste as good.
                      </p>
                      <p>
                        [False Assumptions]: Believing all bottled water is the
                        same.
                      </p>
                      <p>
                        [Costly Options]: Investing in expensive water
                        filtration systems.
                      </p>
                      <p>
                        [Most Active Platforms]: Instagram, Facebook, health and
                        wellness blogs.
                      </p>
                      <p>
                        [Cultural References]: The trend towards clean eating
                        and living, sustainability.
                      </p>
                      <p>
                        AUTHORITY FIGURE'S STORY
                        <br />
                        [Authority Figure]: John Doe, a renowned hydrologist and
                        the founder of Pure H2O Water.
                      </p>
                      <p>
                        [Product Creation Story]: John created Pure H2O Water
                        after[Product]: Pure H2O Water
                      </p>
                      <p>
                        [Demographics]: Health-conscious individuals, athletes,
                        busy professionals, and families who value hydration and
                        purity in their drinking water.
                      </p>
                      <p>
                        CORE SALES PITCH
                        <br />
                        [Core Painpoint]: The fear of consuming impure,
                        contaminated water that can harm their health.
                      </p>
                      <p>
                        [Additional Painpoints]: The inconvenience of constantly
                        having to filter tap water or boil it to ensure it's
                        safe for consumption.
                      </p>
                      <p>
                        [Emotional Pain]: The anxiety and worry about the
                        potential health risks associated with drinking impure
                        water.
                      </p>
                      <p>
                        [Root cause of their problem]: The lack of access to
                        truly pure, clean, and safe drinking water.
                      </p>
                      <p>
                        [Product's Promise]: Pure H2O promises the purest,
                        cleanest, and safest bottled water on the market.
                      </p>
                      <p>
                        [How it works]: Our water undergoes a rigorous
                        purification process to remove all impurities, ensuring
                        you're drinking nothing but pure H2O.
                      </p>
                      <p>
                        [Amazing Benefits of Success]: Improved health, peace of
                        mind knowing you're consuming pure water, and the
                        convenience of having it readily available.
                      </p>
                      <p>
                        [Secondary Benefits of Success]: Enhanced physical
                        performance for athletes, improved skin health, and
                        better overall hydration.
                      </p>
                      <p>
                        [Emotional Benefits of Success]: Relief from the worry
                        of consuming contaminated water, and the satisfaction of
                        taking a proactive step towards better health.
                      </p>
                      <p>
                        [Proof of Efficacy]: Independent lab tests confirm the
                        purity of our water, surpassing industry standards.
                      </p>
                      <p>
                        [Top Testimonials]: "It's the purest water I've ever
                        had" - Customer A
                      </p>
                      <p>
                        SPECIFICS ABOUT DEMO
                        <br />
                        [Hesitations]: Concerns about the price compared to
                        regular bottled water.
                      </p>
                      <p>
                        [Overcoming Hesitations]: Highlighting the superior
                        quality and purity of our water, which justifies the
                        price.
                      </p>
                      <p>
                        [Biggest Fear]: The fear of falling ill due to consuming
                        impure water.
                      </p>
                      <p>
                        [What Doesn't Work]: Regular tap water or cheap bottled
                        water that may contain contaminants.
                      </p>
                      <p>
                        [False Assumptions]: That all bottled water is the same.
                      </p>
                      <p>
                        [Costly Options]: Installing expensive water filtration
                        systems at home.
                      </p>
                      <p>
                        [Most Active Platforms]: Social media platforms like
                        Instagram and Facebook, health and wellness blogs.
                      </p>
                      <p>
                        [Cultural References]: Popular health and wellness
                        influencers, athletes.
                      </p>
                      <p>AUTHORITY FIGURE'S STORY</p>
                      <p>
                        [Authority Figure]: Our founder, a renowned health
                        expert and nutritionist.
                      </p>
                      <p>
                        [Product Creation Story]: Created out of a personal need
                        for pure, clean water.
                      </p>
                      <p>
                        [How Product Was Created]: Through rigorous research and
                        development, and a commitment to quality.
                      </p>
                      <p>
                        [Challenges in Product Development]: Ensuring the water
                        remains pure from source to bottle.
                      </p>
                      <p>
                        [How The Product Was Put to The Test]: Through
                        independent lab testing and personal use by the founder.
                      </p>
                      <p>
                        ABOUT
                        <br />
                        [Product Specifics]= 500ml bottle of Pure H2O water.
                      </p>
                      <p>
                        [Directions How To Use]= Drink as needed for hydration.
                      </p>
                      <p>[Scarcity]= Limited stock due to high demand.</p>
                      <p>[Price]: $2.99 per bottle.</p>
                      <p>[Buying Urgency]: Buy now while stocks last.</p>
                      <p>[Delivery]: Free delivery for orders over $50.</p>
                      <p>
                        [Money Back Guarantee]: 30-day money-back guarantee if
                        not satisfied.
                      </p>
                      <p>
                        [Scientific Studies/Research/Stats]: Independent lab
                        tests confirm the purity of our water.
                      </p>
                      <p>
                        [How to Order]: Order online through our website or via
                        our app.
                      </p> */}
                    </i>
                    {/*? } ?*/}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-body p-2 p-md-4">
              <p className="text-primary">WHAT TO DO NEXT?</p>
              Visit{" "}
              <a href="https://docs.abc.ai" target="_blank">
                docs.abc.ai
              </a>{" "}
              for more information!
              <hr />
              <p className="text-primary">
                IT IS YOUR SOLE RESPONSIBILITY TO ENSURE THAT:
              </p>
              <ul>
                <li>
                  All claims and other information contained within the ABC AI
                  scripts are true, not misleading, and have reliable
                  substantiation;
                </li>
                <li>
                  The ABC AI scripts do not infringe, misappropriate or violate
                  any person's rights;
                </li>
                <li>
                  You shall not use the ABC AI product to process any data that
                  may identify a specific individual other than yourself; and
                </li>
                <li>
                  The ABC Scripts along with any the data inserted into it
                  complies with all applicable federal and state law, including
                  without limitation advertising, consumer protection, and
                  intellectual property law.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="card position-sticky w-100"
          style={{ bottom: "10px", border: "1px solid #ac38fa" }}
        >
          <div className="card-body p-2 p-md-4">
            <img
              src={webclip}
              className="rounded p-1"
              style={{ width: "30px", background: "#efefef" }}
            />
            <b className="text-primary">
              Ask ABC.AI <i className="bi bi-stars text-primary" />
            </b>
            <input
              className="form-control"
              placeholder="/ Type something here"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Generator;
