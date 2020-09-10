<template>
<div  class='all_bgp' >
  <NavBar></NavBar>
    <div  class='top_title_area margin_top_20' >
<MessageBox     :type="activeKey" :select="select" ref="messageBox" />
    </div>
        
        <!-- <MessageBox v-if="activeKey == 'chatroom'"  type="chatroom" />
        <MessageBox v-if="activeKey == 'group'" type="group" />-->

<div  class='top_title_area margin_top_20' >
        <Message
          v-if='!collapsed'
          :type="activeKey"
          :broken="broken"
          :hideUserList="hideUserList"
          :showUserList="showUserList"
          ref="messageList"
        />
        </div>


</div>
</template>

<script>
import NavBar  from '../navBar.vue';
import Vue from "vue";
import MessageBox from "../../components/chat/index.vue";
import Message from "../../components/chat/message.vue";
import AddFriend from "../../components/addModal/addFriend.vue";
import GetFriendRequest from "../../components/addModal/getFriendRequest.vue";
import FirendBlack from "../../components/addModal/firendBlack.vue";
import AddGroupUser from "../../components/group/addGroupUser.vue";
import CreateGroup from "../../components/group/createGroup.vue";
import VidoeSetting from "../../components/videoSetting/index";
import GroupRequest from "../../components/group/groupRequest.vue";
import GroupInvite from "../../components/group/groupInvite.vue";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      groupRead: false,
      contactRead: false,
      showSettingOptions: false,
      activeKey: "contact",
      selectedItem: "",
      showAddOptions: false,
      showccccccm:false,
      addList: [
        {
          name: "添加好友",
          id: "1",
          icon: "chat"
        },
        {
          name: "申请入群",
          id: "2",
          icon: "friends"
        },
        {
          name: "创建群组",
          id: "3",
          icon: "comment"
        }
      ],
      userName:
        localStorage.getItem("userInfo") &&
        JSON.parse(localStorage.getItem("userInfo")).userId,
      collapsed: false,
      broken: false,
      current: ["contact"]
    };
  },
  computed: {
    chatList() {
      return this.$store.state.chat.msgList;
    }
  },
  created(){
    this.contactTypeChange({key:'group'})
  },
  methods: {
    ...mapActions(["onLogout", "onGetFirendBlack"]),
    toLogout() {
      this.onLogout();
    },
    onCollapse(collapsed, type) {
      if (type != "responsive") {
        this.$data.collapsed = true;
      } else {
        this.$data.collapsed = false;
      }
    },
    onBreakpoint(broken) {
      this.$data.broken = broken;
    },
    hideUserList() {
      this.$data.collapsed = true;
    },
    showUserList() {
      this.$data.collapsed = false;
    },
    select(i) {
      this.$refs.messageList.select(i);
      if (this.broken) {
        this.$data.collapsed = true;
        this.$data.canfasong = true;
      }
    },
    GetFirendBlack() {
      this.onGetFirendBlack();
      this.$refs.firendModel.changModel();
    },
    optionsVisibleChange() {
      this.$data.showSettingOptions = !this.$data.showSettingOptions;
    },
    contactTypeChange(type) {
      this.$data.activeKey = type.key;
      this.$router.push(`/${type.key}`);
      if (this.broken && this.collapsed) {
        this.$data.collapsed = false;
      }

      // switch (type.key) {
      //   case "contact":
      //     this.$refs.messageBox.onGetContactUserList();
      //     break;
      //   case "group":
      //     this.$refs.messageBox.onGetGroupUserList();
      //     break;
      //   case "chatroom":
      //     this.$refs.messageBox.onGetChatroomUserList();
      //     break;
      //   default:
      //     break;
      // }
      // this.$refs.messageList.getCurrentMsg(type.key);
    },
    addModalChange() {
      this.$data.showAddOptions = !this.$data.showAddOptions;
    },
    ulClick(i) {
      // this.addModalChange();
      switch (i) {
        case "1":
          this.$refs.addFriendMethods.changeModal();
          break;
        case "2":
          this.$refs.addGroupModel.changeGroupModel();
          break;
        case "3":
          this.$refs.createGroupModel.changeCreateModel();
          break;
        default:
          break;
      }
    },
    recEmedia() {
      this.$refs.videoSetting.show();
    },
    getUnread(type) {
      const chatList = this.chatList[type];
      let obj = {
        contact: false,
        group: false
      };
      if (JSON.stringify(chatList) != "{}") {
        for (const item in chatList) {
          chatList[item].map((v, k) => {
            if (v.status === "unread") {
              if (v.chatType === "group") {
                obj.group = true;
              }
              if (v.chatType === "contact") {
                obj.contact = true;
              }
            }
            return obj;
          });
        }
      }
      return {
        contact: obj.contact,
        group: obj.group
      };
    }
  },
  components: {
    MessageBox,
    Message,
    AddFriend,
    GetFriendRequest,
    FirendBlack,
    AddGroupUser,
    CreateGroup,
    VidoeSetting,
    GroupRequest,
    GroupInvite,
    NavBar
  }
};
</script>



<style scoped>
@font-face {
  font-style: normal;
  font-weight: 400;
  font-family: 'vant-icon';
  src: url(https://img.yzcdn.cn/vant/vant-icon-3a7dc2.woff2) format('woff2'), url(https://img.yzcdn.cn/vant/vant-icon-3a7dc2.woff) format('woff'), url(https://img.yzcdn.cn/vant/vant-icon-3a7dc2.ttf) format('truetype');
}
.all_bgp{
  width:100%;
}
.layout-header {
  height: 100px !important;
  background: #434648 !important;
  padding: 0 !important;
}
.layout-header .header {
  height: 47px;
  display: flex;
  line-height: 50px;
  padding: 0 16px;
  justify-content: space-between;
}
.layout-header .header .setting {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.layout-header .navMenu-icon {
  font-size: 20px !important;
  margin-right: 5px !important;
}
.layout-header .navMenu-text {
  font-size: 16px;
}
.layout-header .ant-menu-horizontal > .ant-menu-item:hover,
.layout-header .ant-menu-horizontal > .ant-menu-submenu:hover,
.layout-header .ant-menu-horizontal > .ant-menu-item-active,
.layout-header .ant-menu-horizontal > .ant-menu-submenu-active,
.layout-header .ant-menu-horizontal > .ant-menu-item-open,
.layout-header .ant-menu-horizontal > .ant-menu-submenu-open,
.layout-header .ant-menu-horizontal > .ant-menu-item-selected,
.layout-header .ant-menu-horizontal > .ant-menu-submenu-selected {
  border-bottom: 2px solid #2bb907 !important;
  color: #05af4a !important;
}
.van-icon {
  position: relative;
  font: 14px/1 "vant-icon";
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
.top_title_area{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ccccccc_center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.tip-style {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: relative;
  top: 10px;
}
.margin_top_20{
  margin-top:4rem;
}
.contact {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.contact .mask {
  width: 100%;
  position: fixed;
  cursor: default;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.contact .header {
  width: 100%;
  height: 50px;
  background: #000;
  color: #fff;
  position: relative;
  text-align: left !important;
}
.contact .header .setting {
  display: inline-block;
  margin-left: 12px;
  margin-top: 12px;
}
.contact .header .options {
  position: absolute;
  top: 40px;
  width: 130px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
  background-color: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  z-index: 99;
}
.contact .header .options .option {
  width: 100%;
  padding: 7px 8px;
  margin: 0;
  clear: both;
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  cursor: pointer;
}
.contact .header .options .option:hover {
  background-color: #dbdbdb;
}
.contact .header .options2 {
  right: 10px;
  text-align: center;
  z-index: 999;
}
.contact .header .option2 {
  display: flex;
  justify-content: center;
}
.contact .header .option2:hover {
  background-color: #dbdbdb;
}
.contact .header .add-style {
  margin-right: 12px;
  margin-top: 12px;
  float: right;
  cursor: pointer;
}
.contact .header .username {
  position: relative;
  top: -5px;
}
.contact .content {
  width: 100%;
  height: calc(50%);
  overflow: hidden;
}
.contact .content .van-tabs,
.contact .content .van-tab__pane {
  height: 100%;
}
.contact .content .van-tab {
  text-align: center;
  display: inline-block;
  width: 122px;
  line-height: 50px;
  padding: 0 20px;
  cursor: pointer;
}
.contact .content .van-tab::before {
  content: "\F02D";
  font: 20px/1 "vant-icon";
  vertical-align: text-top;
  margin-right: 5px;
}
.contact .content .van-tabs__content {
  height: calc(50%);
}
.contact .content .van-tabs__nav {
  background: #000;
  color: #fff;
  text-align: left !important;
}
.contact .content .van-tabs__line {
  background: #00ba6e;
  width: 122px !important;
  height: 2px;/* transform: translateX(0) translateX(0) !important; */
}

</style>