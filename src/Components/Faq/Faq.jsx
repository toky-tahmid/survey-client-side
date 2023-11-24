const Faq = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold ">FAQ</h1>
      <br />
      <hr />
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is Google Surveys?
          </div>
          <div className="collapse-content text-sm">
            <p>
              Google Surveys is a market-research tool that gathers data from
              survey questions. Internet users answer survey questions in order
              to access high-quality content around the web. In turn, content
              publishers get paid as their users answer. Google then aggregates
              and analyzes responses through a simple online interface.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            When will I be billed for my survey?
          </div>
          <div className="collapse-content">
            <p>
              If you are a Google Surveys user, you will be billed for your
              survey when the survey begins. If you are a Google Surveys 360
              user, you will be billed for your survey when the survey ends. We
              will always make our best effort to reach the goal response count
              for your survey within a reasonable time. However, if your survey
              is targeting a highly granular audience, such as an audience based
              on postal codes or user lists, respondents can be hard to find and
              we may fall short of the goal. If we do, you will only be billed
              for the number of completed responses we were able to collect.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          What can I do to make my survey run faster?
          </div>
          <div className="collapse-content">
            <p>Sometimes, surveys run slower due to a combination of very targeted screening and/or a limited supply in the target country on the network that you are using. Generally, the surveys that run on our app publisher network (AdMob) run faster than those run on our news publisher network (Google Opinion Rewards for Publishers), so adjusting your survey so that its eligible for that network is a good option for faster surveys. </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How many responses should I purchase for my survey?
          </div>
          <div className="collapse-content">
            <p>The number of responses you should purchase depends on how confident you want to be in your results. A top-line margin of error of 10% or more is acceptable for some business decisions, but others require more accuracy. For general internet-audience questions, we recommend 1,500 responses to ensure that top-line results are within a 3-5% margin of error and that results segmented by one or two dimensions  are within a 10% margin of error. The number of responses recommended in order to receive statistically significant responses can be different for targeted surveys to a custom audience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
