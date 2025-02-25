import React from "react";

const VideoEditor = () => {
  return (
    <>
      <section
        className="section"
        style={{ position: "relative", width: "100%" }}
      >
        <div className="row">
          <div className="col-6">
            <div className="card p-3 h-100">
              <p className="text-primary">
                <b>Text Transcribe Editor</b>
              </p>
              <div className="btn-group border">
                <a className="btn  btn-sm" href="#">
                  <i className="bi bi-pen" />
                </a>
                <a className="btn btn-sm" href="#">
                  <i className="bi bi-list" />
                </a>
                <a className="btn btn-sm" href="#">
                  <i className="bi bi-stars text-primary" />
                </a>
              </div>
              <div className="card-body p-0">
                <div
                  className="quill-editor-bubble bg-light"
                  id="transcribe"
                  style={{ height: "50vh", overflowY: "scroll" }}
                >
                  <p>
                    [What’s the difference… (answer common question of target
                    market)]
                  </p>
                  <br />
                  <p>
                    What's the difference between Pure H2O Water and regular
                    bottled water?
                  </p>
                  <br />
                  <p>[Explain the difference here…]</p>
                  <br />
                  <p>
                    Well, regular bottled water often contains impurities and
                    contaminants that can harm your health. But Pure H2O Water
                    doesn't. In fact, Pure H2O Water undergoes a rigorous
                    purification process to ensure you're drinking nothing but
                    pure H2O.
                  </p>
                  <br />
                  <p>[So if you’d like benefit, CTA]</p>
                  <br />
                  <p>
                    So if you value your health and want to enjoy the purest,
                    cleanest, and safest bottled water on the market, choose
                    Pure H2O Water.
                  </p>
                  <br />
                  <p>[Here is the process…]</p>
                  <br />
                  <p>
                    Our water is sourced from pristine springs and undergoes
                    rigorous purification processes to ensure absolute purity.
                    Independent lab tests confirm the purity of our water,
                    surpassing industry standards.
                  </p>
                  <br />
                  <p>[That means you can have all these benefits…]</p>
                  <br />
                  <p>
                    That means you can enjoy improved health, peace of mind
                    knowing you're consuming pure water, and the convenience of
                    having it readily available. Plus, you'll be supporting a
                    company that values sustainability and transparency.
                  </p>
                  <br />
                  <p>[Second CTA]</p>
                  <br />
                  <p>
                    Choose Pure H2O Water today for the purest hydration
                    experience.
                  </p>
                  <br />
                  <p>[Why us? Here’s all this social proof…]</p>
                  <br />
                  <p>
                    Why do people love Pure H2O Water? It's the purest water
                    they've ever had, according to our customers. Plus, we've
                    been featured in numerous health and wellness blogs and have
                    a strong presence on Instagram and Facebook.
                  </p>
                  <br />
                  <p>[Third CTA. It’s so easy…]</p>
                  <br />
                  <p>
                    You can order Pure H2O Water with just a few clicks. And if
                    you order over $50, you get free delivery.
                  </p>
                  <br />
                  <p>[Then you get all these benefits…]</p>
                  <br />
                  <p>
                    Once you switch to Pure H2O Water, you'll notice improved
                    health, enhanced physical performance, and peace of mind
                    knowing you're consuming the purest water available. Plus,
                    you'll be supporting a company that values sustainability
                    and transparency.
                  </p>
                  <br />
                  <p>[Plus it’s risk-free…]</p>
                  <br />
                  <p>
                    Plus, we offer a 30-day money-back guarantee. If you're not
                    satisfied with our water, you can get your money back.
                  </p>
                  <br />
                  <p>[It’s super cheap…]</p>
                  <br />
                  <p>
                    And for just $2.99 per bottle, you can enjoy the purest
                    water on the market.
                  </p>
                  <br />
                  <p>[And you never again have to experience pain points…]</p>
                  <br />
                  <p>
                    And you never again have to worry about consuming
                    contaminated water that could harm your health. You never
                    again have to settle for regular bottled water that may not
                    be as pure or taste as good.
                  </p>
                  <br />
                  <p>
                    [Instead with this product, you can do all these benefits…]
                  </p>
                  <br />
                  <p>
                    Instead with Pure H2O Water, you can enjoy improved health,
                    enhanced physical performance, and peace of mind knowing
                    you're consuming the purest water available. Plus, you'll be
                    supporting a company that values sustainability and
                    transparency.
                  </p>
                  <br />
                  <p>[Final CTA]</p>
                  <br />
                  <p>
                    Order Pure H2O Water today and experience the difference of
                    truly pure water.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100">
              <div className="card-body p-3 h-100 row">
                <div className="my-auto">
                  <div className="btn-group w-100 border" role="group">
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-scissors" />
                    </button>
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-music-note-beamed" />
                    </button>
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-magic" />
                    </button>
                  </div>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/PDbPtq-Qb9Y?si=Gz9iuIrhrxt31-n0"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen=""
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="customRange1" className="form-label">
                      00:00:00
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      defaultValue={0}
                      className="form-range"
                      id="customRange1"
                    />
                  </div>
                  <div className="btn-group w-100 border" role="group">
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-chevron-double-left fs-5" />
                    </button>
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-play-fill fs-3" />
                    </button>
                    <button type="button" className="btn btn-outline">
                      <i className="bi bi-chevron-double-right fs-5" />
                    </button>
                  </div>
                  <div className=" p-2">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Subtitle
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-dark w-100 py-3 px-2 mt-3 "
          style={{ overflowX: "scroll", cursor: "grab" }}
          id="video-timeline"
        >
          <div className="d-flex flex-row m-0">
            {/*? for ($i = 0; $i < 5; $i++) { ?*/}
            <div
              className="col-2 p-1 position-relative hvr-grow"
              onclick="selectText(79-11,71);"
            >
              <i
                className="bi bi-play-fill fs-3 position-absolute m-auto text-center text-white"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 25,
                  height: 25,
                }}
              />
              <img
                src="https://i.vimeocdn.com/video/1732511512-93f5802d2cc5d2c9faf6e1e36d2f138189c7d79c209b29ffecdb8dc1cf6c15c8-d_640x360.jpg"
                className="img-fluid"
              />
            </div>
            <div
              className="col-2 p-1 position-relative hvr-grow"
              onclick="selectText(198-25,239);"
            >
              <i
                className="bi bi-play-fill fs-3 position-absolute m-auto text-center text-white"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 25,
                  height: 25,
                }}
              />
              <img
                src="https://i.vimeocdn.com/video/1719008281-826186d4c4b1d7d264063a0089279febd797dcba2ea847b2951125cd1d1b26ec-d_640x360.jpg"
                className="img-fluid"
              />
            </div>
            <div
              className="col-2 p-1 position-relative hvr-grow"
              onclick="selectText(486-40,130);"
            >
              <i
                className="bi bi-play-fill fs-3 position-absolute m-auto text-center text-white"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 25,
                  height: 25,
                }}
              />
              <img
                src="https://i.vimeocdn.com/video/1719908806-38991c3281a0375245bd871c3f7f811b07713d1afa2da236ff56102560d8e819-d_640x360.jpg"
                className="img-fluid"
              />
            </div>
            {/*? } ?*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoEditor;
