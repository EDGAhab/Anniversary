// Gallery.js
import React from 'react';
import './Gallery.css';
import photo1 from './photos/photo1.jpg';
import photo2 from './photos/photo2.jpg';
import photo3 from './photos/photo3.jpg';
import photo4 from './photos/photo4.jpg';
import photo5 from './photos/photo5.jpg';
import photo6 from './photos/photo6.jpg';
import photo7 from './photos/photo7.jpg';
import photo8 from './photos/photo8.jpg';
import photo9 from './photos/photo9.jpg';
import photo10 from './photos/photo10.jpg';
import photo11 from './photos/photo11.jpg';
import photo12 from './photos/photo12.jpg';
import photo13 from './photos/photo13.jpg';
import photo14 from './photos/photo14.jpg';
import photo15 from './photos/photo15.jpg';
import photo16 from './photos/photo16.jpg';
import photo17 from './photos/photo17.jpg';
import photo18 from './photos/photo18.jpg';
import photo19 from './photos/photo19.jpg';
import photo20 from './photos/photo20.jpg';
import photo21 from './photos/photo21.jpg';
import photo22 from './photos/photo22.jpg';
import photo23 from './photos/photo23.jpg';
import photo24 from './photos/photo24.jpg';
import photo25 from './photos/photo25.jpg';
import photo26 from './photos/photo26.jpg';
import photo27 from './photos/photo27.jpg';
import photo28 from './photos/photo28.jpg';
import photo29 from './photos/photo29.jpg';
import photo30 from './photos/photo30.jpg';
import photo31 from './photos/photo31.jpg';
import photo32 from './photos/photo32.jpg';
import photo33 from './photos/photo33.jpg';
import photo34 from './photos/photo34.jpg';
import photo35 from './photos/photo35.jpg';
import photo36 from './photos/photo36.jpg';
import photo37 from './photos/photo37.jpg';
import photo38 from './photos/photo38.jpg';
import photo39 from './photos/photo39.jpg';
import photo40 from './photos/photo40.jpg';
import photo41 from './photos/photo41.jpg';
import photo42 from './photos/photo42.jpg';
import photo43 from './photos/photo43.jpg';
import photo44 from './photos/photo44.jpg';
import photo45 from './photos/photo45.jpg';
import photo46 from './photos/photo46.jpg';
import photo47 from './photos/photo47.jpg';
import photo48 from './photos/photo48.jpg';
import photo49 from './photos/photo49.jpg';
import photo50 from './photos/photo50.jpg';
import photo51 from './photos/photo51.jpg';
import photo52 from './photos/photo52.jpg';


const photos = [ 
    { src: photo1, subtitle: '我们在一起啦', date: 'Day 0' },
    { src: photo2, subtitle: '送你的第一束花', date: 'Day 3' },
    { src: photo3, subtitle: 'Baltimore再也吃不到的Duck Duck Goose', date: 'Day 34' },
    { src: photo4, subtitle: '你做的好精致的干花', date: 'Day 35' },
    { src: photo5, subtitle: 'Omakase', date: 'Day 70' },
    { src: photo6, subtitle: '我的手机壁纸', date: 'Day 70' },
    { src: photo7, subtitle: '飞往阿拉斯加的7小时转机', date: 'Day 72' },
    { src: photo8, subtitle: '雪地爱心', date: 'Day 73' },
    { src: photo9, subtitle: '极光合影', date: 'Day 74' },
    { src: photo10, subtitle: '张开个大嘴巴睡着了', date: 'Day 75' },
    { src: photo11, subtitle: '新年焰火-2024开始啦', date: 'Day 76' },
    { src: photo12, subtitle: '极光', date: 'Day 77' },
    { src: photo13, subtitle: '前往北极圈', date: 'Day 77' },
    { src: photo14, subtitle: '进入北极圈', date: 'Day 78' },
    { src: photo15, subtitle: '被困暴风雪', date: 'Day 78' },
    { src: photo16, subtitle: '狗拉雪橇', date: 'Day 79' },
    { src: photo17, subtitle: '阿拉斯加帝王蟹', date: 'Day 80' },
    { src: photo19, subtitle: '100天啦', date: 'Day 100' },
    { src: photo18, subtitle: '我在干嘛', date: 'Day 100' },
    { src: photo20, subtitle: '生日快乐！！', date: 'Day 106' },
    { src: photo21, subtitle: '华盛顿一日游', date: 'Day 154' },
    { src: photo22, subtitle: '红豆馅外星人', date: 'Day 170' },
    { src: photo23, subtitle: 'Whole Food经典机位', date: 'Day 190' },
    { src: photo24, subtitle: 'Azumi Flame Room -- 超好吃', date: 'Day 190' },
    { src: photo25, subtitle: 'Azumi厕所自拍', date: 'Day 190' },
    { src: photo26, subtitle: '拼装鹦鹉', date: 'Day 192' },
    { src: photo27, subtitle: '经典表情包出处', date: 'Day 262' },
    { src: photo28, subtitle: '经典表情包出处*2', date: 'Day 278' },
    { src: photo29, subtitle: '洛杉矶迪士尼--回家了', date: 'Day 282' },
    { src: photo30, subtitle: '星巴克等咖啡中', date: 'Day 283' },
    { src: photo31, subtitle: '旋转木马打卡', date: 'Day 283' },
    { src: photo32, subtitle: '圣何塞逛Mall', date: 'Day 289' },
    { src: photo33, subtitle: '花舞节', date: 'Day 294' },
    { src: photo34, subtitle: '咋不亲回我', date: 'Day 295' },
    { src: photo35, subtitle: '角色互换', date: 'Day 295' },
    { src: photo36, subtitle: '经典照片回顾', date: 'Day 297' },
    { src: photo37, subtitle: '狂风', date: 'Day 297' },
    { src: photo38, subtitle: '“格林威治”天文台', date: 'Day 300' },
    { src: photo39, subtitle: '洛杉矶环球！', date: 'Day 301' },
    { src: photo40, subtitle: '咋又不亲回我', date: 'Day 301' },
    { src: photo41, subtitle: '一模一样', date: 'Day 302' },
    { src: photo42, subtitle: '狗仔偷拍', date: 'Day 302' },
    { src: photo43, subtitle: '小东京美食之旅', date: 'Day 303' },
    { src: photo44, subtitle: '追星成功', date: 'Day 304' },
    { src: photo45, subtitle: '可爱捏', date: 'Day 304' },
    { src: photo46, subtitle: '又回家了', date: 'Day 304' },
    { src: photo47, subtitle: '真好看', date: 'Day 304' },
    { src: photo48, subtitle: '比饭店好吃的肥肉饭', date: 'Day 319' },
    { src: photo49, subtitle: 'Omasake*2', date: 'Day 322' },
    { src: photo50, subtitle: '内小伙笑什么呢', date: 'Day 326' },
    { src: photo51, subtitle: '影', date: 'Day 338' },
    { src: photo52, subtitle: '生气中，勿扰', date: 'Day 358' }
];



const Gallery = () => {
    return (
        <div className="gallery-container">
            <div className="gallery">
                {photos.map((photo, index) => (
                    <div className="gallery-item" key={index}>
                        <p className="gallery-subtitle">{photo.date}</p>
                        <img src={photo.src} alt={`Event on ${photo.date}`} className="gallery-photo" />
                        <p className="gallery-subtitle">{photo.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
