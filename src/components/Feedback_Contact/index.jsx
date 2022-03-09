import clsx from "clsx";
import styles from "./index.module.scss";
import { Carousel } from "antd";

export const Feedback_Contact = ({}) => {
  return (
    <div className={clsx(styles.body_bottom)}>
      <div className={clsx(styles.feedback_container)}>
        <hr />
        <div className={clsx(styles.h2)}>Feedback</div>
        <div className={clsx(styles.feedback_child)}>
          <Carousel autoplay>
            <div className={clsx(styles.feedback_content)}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque pretium dui vel gravida. Vestibulum viverra porta
                magna, ut pellentesque augue interdum nec. Integer suscipit
                purus ac porttitor gravida. Proin id urna nibh. Integer in
                maximus magna. Nam pulvinar magna et lectus sagittis"
              </p>
              <div className={clsx(styles.userName)}>
                <p>Nguyen Van A</p>
              </div>
            </div>
            <div className={clsx(styles.feedback_content)}>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque pretium dui vel gravida. Vestibulum viverra porta
                magna, ut pellentesque augue interdum nec. Integer suscipit
                purus ac porttitor gravida. Proin id urna nibh. Integer in
                maximus magna. Nam pulvinar magna et lectus sagittis"
              </p>
              <div className={clsx(styles.userName)}>
                <p>Tran Thi B</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className={clsx(styles.contact_container)}>
        <hr />
        <div className={clsx(styles.h2)}>Contact us</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8638222963195!2d108.25836811416856!3d15.968486346373039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2zxJDhuqFpIGjhu41jIEZQVCDEkMOgIE7hurVuZyAoRlBUIHVuaXZlcnNpdHkgRGEgTmFuZyk!5e0!3m2!1svi!2s!4v1646236519647!5m2!1svi!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>{" "}
    </div>
  );
};
