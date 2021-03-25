// build time:Mon Apr 20 2020 22:25:06 GMT+0800 (GMT+08:00)
  var botui = new BotUI("rock-paper-scissors");
  botui.message.add({ delay: 800, content: "Hi, 欢迎来到我的博客" }).then(function () {
    botui.message
      .add({ delay: 1100, content: "我是博主小弋" })
      .then(function () {
        botui.message
          .add({ delay: 1100, content: "是个阳光帅气的男生~" })
          .then(function () {
            botui.action
              .button({
                delay: 1600,
                action: [
                  { text: "继续了解", value: "sure" },
                  { text: "少废话", value: "skip" },
                ],
              })
              .then(function (a) {
                "sure" == a.value && sure();
                "skip" == a.value && end();
              });
          });
      });
  });
  var sure = function () {
      botui.message.add({ delay: 600, content: "目前我还是一名学生" }).then(function () {
        secondpart();
      });
    },
    end = function () {
      botui.message.add({
        delay: 600,
        content:
          "![...](https://gitee.com/lovelijunyi/images/raw/master/20200504222444.jpg)",
      });
    },
    secondpart = function () {
      botui.message
        .add({ delay: 1500, content: "我的专业方向是自动化，主攻嵌入式软硬件设计和控制策略相关算法" })
        .then(function () {
          botui.message
            .add({
              delay: 1500,
              content: "在校期间参加过”互联网＋“，全国机器人大赛以及各类电子设计大赛等数十项比赛",
            })
            .then(function () {
              botui.message
                .add({ delay: 1200, content: "我是比赛大佬，技术小菜鸡" })
                .then(function () {
                  botui.message
                    .add({
                      delay: 1500,
                      content:
                        "主要编程语言是 C 和 Python，平时会自学互联网相关技术",
                    })
                    .then(function () {
                      botui.message
                        .add({
                          delay: 1500,
                          content:
                            "喜欢钻研大数据处理和分布式开发技术，以及爬虫逆向相关的技能",
                        })
                        .then(function () {
                          botui.message
                            .add({
                              delay: 1800,
                              content: "更多技术可以关注我的技术博客",
                            })
                            .then(function () {
                              botui.action
                                .button({
                                  delay: 1100,
                                  action: [
                                    {
                                      text: "你没有别的爱好吗？",
                                      value: "why-mashiro",
                                    },
                                  ],
                                })
                                .then(function (a) {
                                  thirdpart();
                                });
                            });
                        });
                    });
                });
            });
        });
    },
    thirdpart = function () {
      botui.message
        .add({
          delay: 1e3,
          content:
            "当然有，而且我爱好可广泛了，除了喜欢追番看剧，游戏玩的也很好哦",
        })
        .then(function () {
          botui.action
            .button({
              delay: 1500,
              action: [{ text: "谈谈你未来想去的公司？", value: "why-cat" }],
            })
            .then(function (a) {
              fourthpart();
            });
        });
    },
    fourthpart = function () {
      botui.message
        .add({
          delay: 600,
          content:
              "华为！",
        })
        .then(function () {
          botui.message
            .add({
              delay: 2000,
              content: "路还很漫长，自己要多努力！",
            })
            .then(function () {
              botui.action
                .button({
                  delay: 1500,
                  action: [
                    { text: "你参加过最大的项目是什么？", value: "why-domain" },
                  ],
                })
                .then(function (a) {
                  fifthpart();
                });
            });
        });
    },
    fifthpart = function () {
      botui.message
        .add({ delay: 1e3, content: "无人船项目哦，目前已申请4项发明专利，“6197021086，内河无人船控制系统关键技术研究”已经申报国家自然科学基金项目，本人作为主要技术负责人参与其中" })
        .then(function () {
          botui.message.add({
            delay: 1600,
            content: "![...](https://gitee.com/lovelijunyi/images/raw/master/20200504184955.png)",
          });
        });
    };
//rebuild by neat
