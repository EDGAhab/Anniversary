/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2023, 10, 19) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 40)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR - 72000000) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR - 72000000) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR - 72000000) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR - 72000000) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <p></p>
                    <h1 style={{ fontWeight: 900 }}>给我最爱最爱的语佳！</h1>
                    <p></p>
                    <p>我们在一起已经一周年啦，我感觉这一年以来我们越来越好，各种方面上都是！虽然只过了一年，我觉得我们已经是磨合的特别好的老夫老妻了！</p>
                    <p>在你的影响下，我感觉我过的越来越像个人啦！每天和你一起上课，一起买菜，一起做饭，我每时每刻都很开心！
                        只要你在我身边，我就一直都很有能量。每次看到你笑的时候心里都特别特别快乐。我希望你每天都开开心心的，
                        在接下来的日子里，我的主要任务就是确保你的心情！继续帮你减轻压力，平时少气你，生活里面帮你把烦恼降低的越少越好。 </p>
                    <p>这一年里我们一起去了阿拉斯加，一起在加州吃喝玩乐，接下来还要一起回亚特兰大见见你的朋友。每一段旅行都特别值得回忆，
                        我已经在期待咱们感恩节和寒假要去哪里了。我们要好好地出去走走玩玩，在各种地方都留下回忆。</p>
                    <p>我们也吃了好多好多好吃的。Inner Harbor, 甚至是整个巴尔的摩我们可能都吃了个遍，加州的中餐厅和日料也被我们扫荡了不少。更何况，
                        现在的我厨艺还在进步，等我学会做更多更好吃的菜，那以后咱们不得每天都生活在美食里嘿嘿</p>  
                    <p> 我们之后可能会遇到很多难关，但我相信我们可以手拉着手一关一关地过去的。
                        我们的未来只会更好不会更坏，我会更加努力地给我们实现一个更好的未来！ </p>
                    <p>这是我们的第一年，希望在第二个一周年的时候我们会更加快乐，烦恼更少，过着我们想要的轻松快乐自由的生活。 </p>
                    <p>一周年快乐！之后的每一天也要快快乐乐的！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>Hunter Huang</p>
                        <p>2024年10月19日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main