import Categories from '../Categories/Categories';
import Greeting from '../Greeting/Greeting';

const Content = () => {
  return (
    <main className=' flex flex-col justify-between mx-4 mt-[46.5px] mb-[20.5px] sm:mx-10  lg:mx-20 lg:my-[18px] 2xl:mx-[162px] 2xl:my-6 '>
      <Greeting />
      <Categories />
    </main>
  );
};

export default Content;
