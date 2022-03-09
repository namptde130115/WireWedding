import { HomeCustomerLayout } from "../../../layout/homepage_customer/index.jsx";
import { HomepageContent } from "../../../components/HomepageContent/index.jsx";
import { Row, Col, Card } from "antd";
import clsx from "clsx";
import styles from "./index.module.scss";

export const HomePage_customer = () => {
  return (
    <HomeCustomerLayout>
      {/* <HomepageContent /> */}
      <div className={clsx(styles.h1)}>Your progress</div>
      <div className={styles.progress_menu}>
        <Row gutter={16} className={styles.progress_menu_inner}>
          <Col span={8}>
            <Card bordered={false} className={styles.detail} hoverable>
              <div>
                <h1>H &amp; M </h1>
                <p>I'm attending a wedding on</p>
                <div>
                  <span>07-</span>
                  <span>07-</span>
                  <span>2022</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className={styles.detail} hoverable>
              <div>
                <img
                  class="svgIcon svgIcon__notebook homeToolsLoggedTile__icon"
                  src="https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg"
                />
                <div>
                  <p>
                    <strong>0</strong> out of 21
                  </p>
                  <a
                    href="https://www.weddingwire.com/tools/Vendors"
                    class="app-tool-cards-tile-link"
                    title="Services hired"
                  >
                    Services hired
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className={styles.detail} hoverable>
              <div>
                <img
                  class="svgIcon svgIcon__to_do homeToolsLoggedTile__icon"
                  src="https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg"
                />
                <div>
                  <p>
                    <strong>0</strong> out of 81
                  </p>
                  <a
                    href="https://www.weddingwire.com/tools/Checklist"
                    class="app-tool-cards-tile-link"
                    title="Tasks completed"
                  >
                    Tasks completed
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={5}>
            <Card bordered={false} className={styles.detail} hoverable>
              <div>
                <img
                  class="svgIcon svgIcon__calculator homeToolsLoggedTile__icon"
                  src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg"
                />
                <div>
                  <p>
                    <strong>$0</strong>
                  </p>
                  <a
                    href="https://www.weddingwire.com/tools/Budget"
                    class="app-tool-cards-tile-link"
                    title="Budget spent"
                  >
                    Budget spent
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <HomepageContent />
    </HomeCustomerLayout>
  );
};
