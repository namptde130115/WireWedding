<<<<<<< HEAD
// import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { HomeLayout } from "../../layout/homepage/index.jsx";
import { HomepageContent } from "../../components/HomepageContent/index.jsx";
=======
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';
import { CardInfor } from '../../components/CardInfor/index.jsx';
import { HomeLayout } from '../../layout/homepage/index.jsx';
>>>>>>> 330b0961327440f2bd615b995fff677661795ce7

export const HomePage = () => {
  return (
    <HomeLayout>
      {/* <ButtonCustom type='primary' text='asdasd' />
      <ButtonCustom type='ghost' text='asdasd' />
      <ButtonCustom type='link' text='asdasd' />
      <CardInfor title='asdasdasd' title2='asdasdsd' /> */}
      <HomepageContent />
    </HomeLayout>
  );
};
