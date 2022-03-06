import { Statistic } from "antd";
import styles from "./index.module.scss";
import clsx from "clsx";

export const Countdown = ({}) => {
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
  //
  return (
    <div className={styles.countdown}>
      <Countdown className={clsx(styles.countdown_time)}
        title="Countdown to my Wedding day"
        value={deadline}
        format="D 天 H 时 m 分 s 秒"
      />
    </div>
  );
};
