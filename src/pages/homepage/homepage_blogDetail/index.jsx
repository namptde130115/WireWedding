import clsx from 'clsx';
import styles from './index.module.scss';
import { imageUrl } from '../../../assets/images-url/index.js';
import { ShareAltOutlined } from '@ant-design/icons';
import { BlogComment } from '../../../components/BlogComment/index.jsx';
import { ButtonCustom } from '../../../components/ButtonCustom/index.jsx';
import { CommonLayout } from '../../../layout/common/index.jsx';

export const HomePageBlogDetail = () => {
  return (
    <CommonLayout>
      <div className={clsx(styles.h1)}>Blog title</div>
      <div className={clsx(styles.blog_container)}>
        <div className={clsx(styles.blog_detail)}>
          <p>By Username</p>
          <p>March 9th, 2022</p>
        </div>
        <img width='100%' height='60%' src={imageUrl.slider_img5} />
        <div className={clsx(styles.blog_child)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
            quisque non tellus orci ac auctor augue mauris augue. Metus aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices. Odio eu
            feugiat pretium nibh ipsum. Tempus iaculis urna id volutpat lacus
            laoreet non curabitur.
          </p>
          <p>
            Eget aliquet nibh praesent tristique magna sit amet purus. Ultrices
            gravida dictum fusce ut placerat orci nulla pellentesque dignissim.
            Vestibulum morbi blandit cursus risus at. In aliquam sem fringilla
            ut. Imperdiet massa tincidunt nunc pulvinar sapien et ligula
            ullamcorper malesuada. Ornare quam viverra orci sagittis eu volutpat
            odio facilisis. Duis ultricies lacus sed turpis. Velit aliquet
            sagittis id consectetur purus ut faucibus pulvinar. Iaculis nunc sed
            augue lacus viverra vitae. Convallis aenean et tortor at risus
            viverra adipiscing. Sit amet nisl suscipit adipiscing. At auctor
            urna nunc id cursus metus aliquam eleifend. Magna sit amet purus
            gravida quis blandit.
          </p>
          <p>
            Tincidunt arcu non sodales neque sodales ut etiam. Tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu. Nisl vel pretium
            lectus quam. Tincidunt arcu non sodales neque sodales ut etiam.
            Lacus vestibulum sed arcu non odio euismod lacinia. Rutrum quisque
            non tellus orci ac. In fermentum et sollicitudin ac. Mattis enim ut
            tellus elementum. Enim sit amet venenatis urna cursus eget nunc.
            Quis blandit turpis cursus in hac. Integer vitae justo eget magna
            fermentum iaculis eu. Sed libero enim sed faucibus turpis in.
            Adipiscing elit ut aliquam purus sit amet luctus. Dui id ornare arcu
            odio ut sem nulla pharetra. Et leo duis ut diam quam nulla porttitor
            massa. Amet commodo nulla facilisi nullam vehicula.
          </p>
          <p>
            Elementum curabitur vitae nunc sed velit dignissim. Eu volutpat odio
            facilisis mauris. Risus commodo viverra maecenas accumsan lacus vel.
            Cras fermentum odio eu feugiat pretium. Iaculis urna id volutpat
            lacus laoreet. Ut sem nulla pharetra diam sit. Dictum at tempor
            commodo ullamcorper a lacus. Ipsum dolor sit amet consectetur. Velit
            laoreet id donec ultrices tincidunt arcu non sodales neque. Duis at
            tellus at urna condimentum mattis pellentesque. Tristique senectus
            et netus et malesuada fames ac turpis. Consequat nisl vel pretium
            lectus quam. In nisl nisi scelerisque eu ultrices vitae. Nibh sit
            amet commodo nulla facilisi nullam. Velit dignissim sodales ut eu
            sem integer vitae.
          </p>
          <div className={clsx(styles.blog_share)}>
            <p>Share now</p>
            <ShareAltOutlined />
          </div>
        </div>
        <div className={clsx(styles.comment_container)}>
          <h4>Comment</h4>
          <BlogComment />
          <BlogComment />
          <BlogComment />
        </div>
        <div className={clsx(styles.comment_button)}>
          <ButtonCustom type='link' text='View more' />
        </div>
      </div>
    </CommonLayout>
  );
};
