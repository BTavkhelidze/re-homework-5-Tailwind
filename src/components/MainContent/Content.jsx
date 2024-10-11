import Categories from '../Categories/Categories';
import Devices from '../Devices/Devices';
import Greeting from '../Greeting/Greeting';
import Questions from '../Quesions/Questions';

const Content = () => {
  return (
    <main className=' flex flex-col justify-between mx-4 mt-[46.5px] mb-[20.5px] sm:mx-10  lg:mx-20 lg:my-[18px] 2xl:mx-[162px] 2xl:my-6 '>
      <Greeting />
      <Categories />
      <Devices />
      <Questions />
    </main>
  );
};

export default Content;
