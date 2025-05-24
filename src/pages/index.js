import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'

export default function () {
    // 定义背景图片链接数组
    const desktopBackgroundImages = [
        "./docs/pic1.jpg"
    ];

    const mobileBackgroundImages = [
        "./docs/pic2.jpg"
    ];

    // 判断屏幕比例是否接近手机（高宽比大于1）
    var isMobileRatioOld;
    const isMobileRatio = () => {
        const aspectRatio = window.innerHeight / window.innerWidth;
        return aspectRatio > 1;
    };

    // 定义状态存储背景图片
    const [backgroundImage, setBackgroundImage] = useState('');
    // 新增状态管理标题
    const [title, setTitle] = useState('');

    // 随机选择背景图片
    const selectRandomBackgroundImage = () => {
        const images = isMobileRatio() ? mobileBackgroundImages : desktopBackgroundImages;
        const randomIndex = Math.floor(Math.random() * images.length);
        setBackgroundImage(images[randomIndex]);
    };

    const [logoColor, setLogoColor] = useState('');
    const [openTime, setOpenTime] = useState('');
    const [stayTime, setStayTime] = useState('');

    // 在组件挂载时选择背景图片
    useEffect(() => {
        var cometime = new Date();

        update();
        setInterval(() => {
            update();
        }, 100);

        function update() {
            setLogoColor(`hsl(${(new Date() / 30) % 360},50%,70%)`);
            setOpenTime(TimetoTextDay(new Date() - 1748030400000));
            setStayTime(TimetoTextStay(new Date() - cometime));
        }

        function TimetoTextDay(time) {
            return `${Math.round(time / 864) / 100000}天`;
        }
        
        function TimetoTextStay(time) {
            if (time <= 1000000) {
                return `${Math.round(time / 1000)}秒,欢迎你的来访٩(๑❛ᴗ❛๑)۶`;
            }
            else  {
                return `${Math.round(time / 600) / 100}分,为你颁发─=≡Σ((( つ•̀ω•́)つ发呆达人`;
            }
        }

        // 初始化时选择背景图片
        selectRandomBackgroundImage();
        isMobileRatioOld = isMobileRatio();

        // 监听窗口大小变化，动态调整背景图片
        const handleResize = () => {
            if (isMobileRatio() == isMobileRatioOld) return;
            isMobileRatioOld = isMobileRatio();
            selectRandomBackgroundImage();
        };

        // 添加事件监听器
        window.addEventListener('resize', handleResize);

        // 清理事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Layout description=''>
            <div id='index-page-container'>
                {/* Set the background image dynamically */}
                <div id='index-page-bg' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div id='index-page-bg-mask'></div>
                <div id='index-page-main'>

                    <div id='logo' style={{textAlign: "center", color: `${logoColor}` }}>
                     <span>欢迎来到我的小闭站</span>
                    </div>
                    <div id='index-page-description' style={{ textAlign: "center"}}>
                        欢迎来到我的小站!想来点什么?<br />本站已启用{openTime}<br />你已经在本页面{stayTime}
                    </div>
                    <div id='index-page-button-container'>
                        <div id='index-page-button'>
                            <Link
                                className="button button--secondary button--lg"
                                to="./blog">
                                博客
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/intro">
                                自我介绍
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/song">
                                歌歌
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}