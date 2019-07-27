/* eslint-disable import/first */

import * as React from "react";

import { Layout, Typography } from 'antd';
const { Content } = Layout;

import './About.scss';

const About = () => (
    <Content className='section page-about'>
        <Typography.Title level={3}>About</Typography.Title>
        <Typography.Paragraph>
            An innovative team that applies machine learning technology, complemented by reality and large amounts of data for a variety of content for different people, from texts to video content and artificial intelligence to emulate user actions in multi-user services.
        </Typography.Paragraph>
    </Content>
)

export default About;
