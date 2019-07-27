/* eslint-disable import/first */

import * as React from "react";

import { Layout, Typography } from 'antd';
const { Content } = Layout;

import './Banner.scss';

const Banner: React.FC = () => (
    <Content className='section page-banner'>
        <img src={require('../assets/logo.png')}></img>
        <Typography.Title level={1} >Lulz tech</Typography.Title>
        <Typography.Title level={2}>Innovation meme development</Typography.Title>
    </Content>
);

export default Banner;
