import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {   // 主页
            path: '/',
            name: 'Home',
            component: resolve => require(['@/pages/Home'], resolve),
            //项目已通过审核列表
            redirect: {name: 'index'},
            children: [
                {   //首页
                    path: '/home/index',
                    name: 'index',
                    component: resolve => require(['@/pages/indexPage/index'], resolve),
                },
                {   // 登录页面
                    path: '/login',
                    name: 'Login',
                    component: resolve => require(['@/pages/Login'], resolve),
                },
                {   // 注册页面
                    path: '/register',
                    name: 'register',
                    component: resolve => require(['@/pages/register'], resolve),
                },
                {   // 大会专题  congressDes
                    path: '/home/congressTopics',
                    name: 'congressTopics',
                    component: resolve => require(['@/pages/congressTopics/congressTopics'], resolve),
                },
                {   //大会专题-- 大会介绍  congressTopics
                    path: '/home/congressDes',
                    name: 'congressDes',
                    component: resolve => require(['@/pages/congressTopics/congressDes'], resolve),
                },
                 {   //大会专题-- 大会视频  congressVideo
                    path: '/home/congressVideo',
                    name: 'congressVideo',
                    component: resolve => require(['@/pages/congressTopics/congressVideo'], resolve),
                },
                {   //大会专题--  主旨发言  CongressKeynotespeech
                    path: '/home/CongressKeynotespeech',
                    name: 'CongressKeynotespeech',
                    component: resolve => require(['@/pages/congressTopics/CongressKeynotespeech'], resolve),
                },
                {   //云展馆  yunExhibitionhall
                    path: '/home/yunExhibitionhall/yunExhibitionhall',
                    name: 'yunExhibitionhall',
                    component: resolve => require(['@/pages/yunExhibitionhall/yunExhibitionhall'], resolve),
                },
                {   //云展馆 ---企业名称  companyName
                    path: '/home/yunExhibitionhall/companyName',
                    name: 'companyName',
                    component: resolve => require(['@/pages/yunExhibitionhall/companyName'], resolve),
                },
                {   //云展馆 ---云展馆企业名称  exhibitionConpanyname
                    path: '/home/yunExhibitionhall/exhibitionConpanyname',
                    name: 'exhibitionConpanyname',
                    component: resolve => require(['@/pages/yunExhibitionhall/exhibitionConpanyname'], resolve),
                },
                 {   //云会谈   cloudTalks
                    path: '/home/cloudTalks/cloudTalks',
                    name: 'cloudTalks',
                    component: resolve => require(['@/pages/cloudTalks/cloudTalks'], resolve),
                    meta: {
                        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                     },
                },
                 {   //合作伙伴   cooperative
                    path: '/home/cooperative/cooperative',
                    name: 'cooperative',
                    component: resolve => require(['@/pages/cooperative/cooperative'], resolve),
                    meta: {
                        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                     },
                },
                
                 {   //合作伙伴  -- 三级页面   cooperativeDes
                    path: '/home/cooperative/cooperativeDes',
                    name: 'cooperativeDes',
                    component: resolve => require(['@/pages/cooperative/cooperativeDes'], resolve),
                    meta: {
                        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                     },
                },
                {   //云展馆 ---场景演示  sceneDemonstration
                    path: '/home/yunExhibitionhall/sceneDemonstration',
                    name: 'sceneDemonstration',
                    component: resolve => require(['@/pages/yunExhibitionhall/sceneDemonstration'], resolve),
                },
                {   //首页二级页面
                    path: '/home/index2',
                    name: 'index2',
                    component: resolve => require(['@/pages/indexPage/indexSecondary'], resolve),
                },
                {   //大会嘉宾
                    path: '/home/conference',
                    name: 'conferenceGuests',
                    component: resolve => require(['@/pages/conferenceGuests/conferenceGuests'], resolve),
                },
                {   //嘉宾介绍
                    path: '/home/guestIntro',
                    name: 'guestIntro',
                    component: resolve => require(['@/pages/conferenceGuests/guestIntro'], resolve),
                },
                {   //嘉宾致辞
                    path: '/home/guestSpeak',
                    name: 'guestSpeak',
                    component: resolve => require(['@/pages/conferenceGuests/guestSpeak'], resolve),
                },
                {   //云体验
                    path: '/home/cloudExperience',
                    name: 'cloudExperience',
                    component: resolve => require(['@/pages/cloudExperience/cloudExperience'], resolve),
                },
                {   //云发布
                    path: '/home/cloudRelease',
                    name: 'cloudRelease',
                    component: resolve => require(['@/pages/cloudExperience/cloudRelease'], resolve),
                },
                {   //新闻资讯
                    path: '/home/newsInfo',
                    name: 'newsInfo',
                    component: resolve => require(['@/pages/newsInfo/newsInfo'], resolve),
                },
                {   //新闻资讯二级页面
                    path: '/home/newsInfosSecond',
                    name: 'newsInfosSecond',
                    component: resolve => require(['@/pages/newsInfo/newsInfosSecond'], resolve),
                },
                {   //联系我们
                    path: '/home/contactUs',
                    name: 'contactUs',
                    component: resolve => require(['@/pages/contactUs/contactUs'], resolve),
                },
                {   //用户协议
                    path: '/home/userTready',
                    name: 'contactUs',
                    component: resolve => require(['@/pages/contactUs/userTready'], resolve),
                },
                {   //用户调研
                    path: '/home/userSurvey',
                    name: 'userSurvey',
                    component: resolve => require(['@/pages/contactUs/userSurvey'], resolve),
                },




            ]
        },
        {   // 主页
            path: '/login',
            name: 'Login',
            component: resolve => require(['@/pages/Login'], resolve),

        },
    ]
})
