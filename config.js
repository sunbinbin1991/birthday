// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "独立漂亮体贴可爱的慧宝宝",  // 同上...
        "今天是你的生日哦",
        "这是我们在一起的",
        "过的第一个生日哦",
        "去年的生日",
        "你可还不是我的呢",
        "然后今年么",
        "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈~1",
        "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈~2",
        "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈~3",
        "重要的事情哈三遍",
        "终于找到我的宝宝了"
        "在过去的这么多年",
        "为了找到我的宝宝可是太麻烦了呢",
        "我可是爬山涉水,走了好远才找到你呢",
        "在我过去的一段时间内",
        "每次想到我家宝宝,总是能开心的笑出声来",
        "可不是么,我可是捡到宝了呢",
        "在一些比较烦心的时刻,宝宝总是会给我带来快乐",
        "在一些压力较大的时刻,宝宝总是如此温柔体贴",
        "在一些平淡的日子,宝宝总是我快乐的源泉",
        "...",
        "我是如此喜欢我家的宝宝",
        "我家宝宝有我梦想中的女票的一切优点",
        "我家宝宝是那么的温柔",
        "我家宝宝是那么的高挑动人",
        "我家宝宝是那么的知书达理",
        "喜欢我家宝宝",
        "那我们也来回忆一下过去吧",
        "并不清楚从什么时候开始喜欢上的",
        "如果非要往前推的话",
        "那就是你第一次来杭州找我玩的时候",
        "当时坐在地铁上",
        "那时你离我真的好近",
        "你肯定是在诱惑我的",
        "那一刻",
        "是的了",
        "那一刻",
        "我心动了额",
        "地铁的风微微的吹过宝宝的脖颈",
        "带着阵阵的香味",
        "激动的心,颤抖的手",
        "当时我就想,如果这个宝宝是我的就好了",
        "哈哈哈~4",
        "当时我真的好想亲宝宝一下~1",
        "当时我真的好想亲宝宝一下~2",
        "不过我忍住了",
        "万一你不同意,把我抓起来,我就亏大了",
        "还好,肯定是那时候留下了好印象",
        "所以,我才能现在拥有了宝宝",
        "时钟滴答..."
        "想到了宝宝同意做我女票的那天",
        "哦哦哦,真是超级开心",
        "虽然宝宝是提前几天就同意了",
        "不过还是要等到见到宝宝,听到宝宝亲口说呢",
        "想到同意的那天,我俩在告别时",
        "我问到,我能亲宝宝不",
        "当宝宝说道可以时",
        "我觉得那是我听过最动听的情话",
        "哈哈哈,这么漂亮的宝宝同意了",
        "莫不是我在做梦",
        "哦哦,还好不是做梦额",
        "时钟再次滴答...",
        "想到订婚的那天",
        "漂亮宝宝带着家人",
        "作为帅气的元彬哥哥的我",
        "也带着家人",
        "在亲戚家人的见证下",
        "收获了他们的祝福",
        "这一刻,简直是太幸福了",
        "能够获得家人的同意和祝福简直太开心了,好么",
        "但是那天的求婚词说的有点差了",
        "我没想到,要说这么多,我应该打个草稿",
        "能够拥有宝宝,是一件太过开心的事",
        "我将会一直和宝宝一起吃火锅(鸳鸯)",
        "我将会一直和宝宝一起爬山",
        "我将会一直和宝宝一起去看博物馆",
        "我将会一直和宝宝一起去抓娃娃",
        "我将会一直和宝宝一起吃烤肉吃到饱",
        "我将会一直和宝宝一起在雨后老街一直逛",
        "我将会一直和宝宝一起逛超市,买饼干",
        "我将会一直和宝宝一起去商城给宝宝买漂亮衣服",
        "我将会一直和宝宝一起去买菜做饭(我做)",
        "我将会一直和宝宝一起喝咖啡",
        "我将会一直和宝宝一起看恐怖片",
        "我将会一直和宝宝一起做以前还没做过的事",
        "时间还挺长",
        "未来也很长",
        "我期待未来和宝宝的每一天",
        "我还要带我的宝宝一起吃",
        "我还要带我的宝宝一起喝",
        "我还要带我的宝宝一起玩",
        "我还要带我的宝宝一起浪",
        "更是要把我家可爱宝宝保护的好好的",
        "我们还有好多事要一起做呢",
        "值此宝宝如此重要时刻",
        "希望宝宝",
        "年年有今日,岁岁有今朝",
        "天天开心,日日快乐",
        "爱毛毛的元彬奉上",
        "~~~Happy Ending~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
