import Categories from "../Categories/Categories";
import Devices from "../Devices/Devices";
import Greeting from "../Greeting/Greeting";
import Questions from "../Quesions/Questions";
import StartFreeTrial from "../StartFreeTreal/StartFreeTrial";
import Subscription from "../Subscription/Subscription";

const Content = () => {
  return (
    <main className="2xl:mx-[162px] 2xl:my-6 mx-4 mb-[20.5px] mt-[46.5px] flex flex-col justify-between sm:mx-10 lg:mx-20 lg:my-[18px]">
      <Greeting />
      <Categories />
      <Devices />
      <Questions />
      <Subscription />
      <StartFreeTrial />
    </main>
  );
};

export default Content;
