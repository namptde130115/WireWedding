import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';
import { CardInfor } from '../../components/CardInfor/index.jsx';
import { HomeLayout } from '../../layout/homepage/index.jsx';

export const HomePage = () => {
  return (
    <HomeLayout>
      <h1>Home Page</h1>
      <ButtonCustom type='primary' text='asdasd' />
      <ButtonCustom type='ghost' text='asdasd' />
      <ButtonCustom type='link' text='asdasd' />
      <CardInfor title='asdasdasd' title2='asdasdsd' />
    </HomeLayout>
  );
};
