import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Layout, Card, Col, Row, Space, Button } from 'antd';
import { CameraOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { PlanningToolsHeader } from '../../../layout/planningtools-header';
import { Footer } from '../../../layout/footer';
import clsx from 'clsx';

export const Hired_Service_Manage = () => {


    return (
        <Layout>
            <PlanningToolsHeader />
            <div className={clsx(styles.body)}>

                {/* Your Progress */}
                <div className={clsx(styles.services)}>
                    <p className={clsx(styles.your_service_text)}>Your Hired Services</p>
                   <div>
                        
                        <Space size={0} className={clsx(styles.button_group)}>
                            <Button className={clsx(styles.added_btn)}>Added 0</Button>
                            <Button className={clsx(styles.hired_btn)}>Hired 0</Button> 
                        </Space>
                        <Button className={clsx(styles.remove_all_btn)}>Remove All</Button>
                        <Button className={clsx(styles.hire_btn)}>Hire All</Button>
                    </div>
                        
                             
                    <div className={clsx(styles.services_list)}>
                        {/* Row 1 */}
                        <Row gutter={16} className={clsx(styles.services_list_inner)}>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={clsx(styles.detail)} hoverable>
                                    <div>
                                        <h1>
                                            H             &amp; M       </h1>
                                        <p>I'm attending a wedding on</p>
                                        <div>
                                            <span>07-</span>
                                            <span>07-</span>
                                            <span>2022</span>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__notebook homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 21</p>
                                            <a href="https://www.weddingwire.com/tools/Vendors" class="app-tool-cards-tile-link" title="Services hired">Services hired</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__to_do homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 81</p>
                                            <a href="https://www.weddingwire.com/tools/Checklist" class="app-tool-cards-tile-link" title="Tasks completed">Tasks completed</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__calculator homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg" />
                                        <div>
                                            <p><strong>$0</strong></p>
                                            <a href="https://www.weddingwire.com/tools/Budget" class="app-tool-cards-tile-link" title="Budget spent">Budget spent</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <h1>
                                            H             &amp; M       </h1>
                                        <p>I'm attending a wedding on</p>
                                        <div>
                                            <span>07-</span>
                                            <span>07-</span>
                                            <span>2022</span>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__notebook homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 21</p>
                                            <a href="https://www.weddingwire.com/tools/Vendors" class="app-tool-cards-tile-link" title="Services hired">Services hired</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__to_do homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 81</p>
                                            <a href="https://www.weddingwire.com/tools/Checklist" class="app-tool-cards-tile-link" title="Tasks completed">Tasks completed</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__calculator homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg" />
                                        <div>
                                            <p><strong>$0</strong></p>
                                            <a href="https://www.weddingwire.com/tools/Budget" class="app-tool-cards-tile-link" title="Budget spent">Budget spent</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <h1>
                                            H             &amp; M       </h1>
                                        <p>I'm attending a wedding on</p>
                                        <div>
                                            <span>07-</span>
                                            <span>07-</span>
                                            <span>2022</span>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__notebook homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 21</p>
                                            <a href="https://www.weddingwire.com/tools/Vendors" class="app-tool-cards-tile-link" title="Services hired">Services hired</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__to_do homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 81</p>
                                            <a href="https://www.weddingwire.com/tools/Checklist" class="app-tool-cards-tile-link" title="Tasks completed">Tasks completed</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__calculator homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg" />
                                        <div>
                                            <p><strong>$0</strong></p>
                                            <a href="https://www.weddingwire.com/tools/Budget" class="app-tool-cards-tile-link" title="Budget spent">Budget spent</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>

                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <h1>
                                            H             &amp; M       </h1>
                                        <p>I'm attending a wedding on</p>
                                        <div>
                                            <span>07-</span>
                                            <span>07-</span>
                                            <span>2022</span>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__notebook homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/notebook.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 21</p>
                                            <a href="https://www.weddingwire.com/tools/Vendors" class="app-tool-cards-tile-link" title="Services hired">Services hired</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__to_do homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/to_do.svg" />
                                        <div>
                                            <p><strong>0</strong> out of 81</p>
                                            <a href="https://www.weddingwire.com/tools/Checklist" class="app-tool-cards-tile-link" title="Tasks completed">Tasks completed</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col span={5} className={clsx(styles.col_line)}>
                                <Card bordered={false} className={styles.detail} hoverable>
                                    <div>
                                        <img class="svgIcon svgIcon__calculator homeToolsLoggedTile__icon" src="https://cdn1.weddingwire.com/assets/svg/original/illustration/calculator.svg" />
                                        <div>
                                            <p><strong>$0</strong></p>
                                            <a href="https://www.weddingwire.com/tools/Budget" class="app-tool-cards-tile-link" title="Budget spent">Budget spent</a>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}
