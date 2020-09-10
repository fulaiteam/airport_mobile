<template>
<div   >
  <div   class='all_bh' >
  <!--聊天信息区域展示开始  -->
  <div  class='message_content' >
    <div
      v-for="(item,i) in msgList"
        :key="i"
        :class="{message_left:!item.bySelf,message_right:item.bySelf}"
    >
    <div  class='message_c_top'  >
       {{item.from}}  &nbsp&nbsp&nbsp    {{renderTime(item.time)}}
    </div>
    <div  class='message_c_bottom'  >
      {{item.msg}}
    </div>
    
    </div>
  </div>
  <!--聊天信息区域展示结束  -->
  </div>
  <!--发送信息区域开始  -->
  <div  class='text_area' >
 <textarea   class='text_area_mes'      v-model="message"     placeholder="消息" ></textarea>
 <button  class='text_area_btn'  @click='onSendTextMsg' >发送消息</button>
  </div>
 
  <!-- 发送信息区域结束 -->
  
</div>
</template>

<script>
import ChatEmoji from "../chatEmoji/index.vue";
import UpLoadImage from "../upLoadImage/index.vue";
import RecordAudio from "../recorder/index.vue";
import { mapActions, mapGetters } from "vuex";
import EmediaModal from "../emediaModal/index";
import moment from "moment";
import _ from "lodash";
import AddAVMemberModal from "../emediaModal/addAVMemberModal";
import MultiAVModal from "../emediaModal/multiAVModal";
import GetGroupInfo from "../group/groupInfo.vue";

export default {
  data() {
    return {
      activedKey: {
        contact: "",
        group: "",
        chatroom: ""
      },
      message: "",
      isHttps: window.location.protocol === "https:",
      loadText: "加载更多",
      status: {
        sending: "发送中",
        sent: "已发送",
        read: "已读"
      },
      nowIsVideo: false
    };
  },

  beforeMount() {
    if (this.type === "contact") {
      this.onGetContactUserList();
    } else if (this.type === "group") {
      this.onGetGroupUserList();
    } else if (this.type === "chatroom") {
      this.onGetChatroomUserList();
    }
  },
  updated() {
    // console.log("数据", this.$store);
    this.scollBottom();
    console.log(this.msgList)
  },
  computed: {
    ...mapGetters({
      contact: "onGetContactUserList",
      group: "onGetGroupUserList",
      chatroom: "onGetChatroomUserList",
      msgList: "onGetCurrentChatObjMsg"
    }),
    userList() {
      return {
        contact: this.contact,
        group: this.group,
        chatroom: this.chatroom
      };
    },
    selectedKeys() {
      return [this.getKey(this.activedKey[this.type]) || ""];
    }
  },
  props: [
    "type", // 聊天类型 contact, group, chatroom
    "username", // 选中的聊天对象
    "broken", // 是否适应移动端
    "showUserList",
    "hideUserList"
  ],
  methods: {
    ...mapActions([
      "onGetContactUserList",
      "onGetGroupUserList",
      "onGetChatroomUserList",
      "onGetCurrentChatObjMsg",
      "onSendText",
      "onCallVideo",
      "onCallVoice",
      "getGroupMembers",
      "getHistoryMessage",
      "onAddBlack",
      "onDelteFirend",
      "onGetGroupinfo",
      "recallMessage",
      "onGetGroupBlack"
    ]),
    getKey(item, type) {
      let key = "";
      switch (type) {
        case "contact":
          key = item.name;
          break;
        case "group":
          key = item.groupid;
          break;
        case "chatroom":
          key = item.id;
          break;
        default:
          break;
      }
      return key;
    },
    getCurrentMsg(props) {
      this.onGetCurrentChatObjMsg({
        type: props,
        id: this.getKey(this.activedKey[props], props)
      });
    },
    select(key) {
      this.$data.activedKey[this.type] = key;
      const me = this;
      me.$data.loadText = "加载更多";
      // if( me.roomId){
      //     WebIM.conn.quitChatRoom({
      //         roomId: me.roomId // 聊天室id
      //     });
      //     me.roomId = ''
      //   }

      if (this.type === "group") {
        this.$router.push({ name: this.type, params: { id: key.groupid } });
        this.onGetCurrentChatObjMsg({ type: this.type, id: key.groupid });

        setTimeout(() => {
          Vue.$store.commit("updateMessageStatus", {
            action: "oneUserReadMsgs",
            readUser: key.groupid
          });
          this.$forceUpdate();
        }, 100);

        if (!this.msgList) {
          this.getHistoryMessage({ name: key.groupid, isGroup: true });
        }
      } else if (this.type === "contact") {
        this.$router.push({ name: this.type, params: { id: key.name } });
        this.onGetCurrentChatObjMsg({ type: this.type, id: key.name });
        setTimeout(() => {
          Vue.$store.commit("updateMessageStatus", {
            action: "oneUserReadMsgs",
            readUser: key.name
          });
          this.$forceUpdate();
        }, 100);

        if (!this.msgList) {
          this.getHistoryMessage({ name: key.name, isGroup: false });
        }
      } else if (this.type === "chatroom") {
        const me = this;
        // me.roomId = key.id

        this.$router.push({ name: this.type, params: { id: key.id } });
        this.onGetCurrentChatObjMsg({ type: this.type, id: key.id });

        WebIM.conn.joinChatRoom({
          roomId: key.id, // 聊天室id
          success: function() {
            // console.log("加入聊天室成功");
            if (!me.msgList) {
              me.getHistoryMessage({ name: key.id, isGroup: true });
              setTimeout(() => {
                me.$forceUpdate();
              }, 100);
            }
          }
        });
      }
    },

    loadMoreMsgs() {
      const me = this;
      const success = function(msgs) {
        if (msgs.length === 0) {
          me.$data.loadText = "已无更多数据";
        }
      };
      let name = "";
      let isGroup = false;
      if (this.type === "contact") {
        name = this.$data.activedKey[this.type].name;
      } else if (this.type === "group") {
        name = this.$data.activedKey[this.type].groupid;
        isGroup = true;
      } else if (this.type === "chatroom") {
        name = this.$data.activedKey[this.type].id;
        isGroup = true;
      }
      this.getHistoryMessage({
        name,
        isGroup,
        success
      });
    },

    changeMenus() {
      if (this.type === "contact") {
      } else if (this.type === "group") {
        this.$refs.groupInfoModel.chengeInfoModel();
        this.getGroupInfo();
      }
    },
    menuClick(i) {
      this.changeMenus();
      switch (i) {
        case "1":
          // console.log("加入黑名单");
          this.onAddBlack({
            userId: this.$data.activedKey[this.type]
          });
          this.$data.activedKey.contact = "";
          this.$router.push({
            // 核心语句
            path: "/contact" // 跳转的路径
          });
          break;
        case "2":
          this.onDelteFirend({
            userId: this.$data.activedKey[this.type],
            callback: () => {
              this.closeContactMessage();
            }
          });
          break;
        default:
          break;
      }
    },
    getGroupInfo() {
      this.onGetGroupinfo({
        select_id: this.$data.activedKey[this.type].groupid
      });
    },
    onSendTextMsg() {
      if (this.$data.message == "" || this.$data.message == "\n") {
        this.$data.message = "";
        return;
      }
      console.log(this.$data.activedKey,6666)
      this.onSendText({
        chatType: this.type,
        chatId: this.$data.activedKey[this.type],
        message: this.$data.message
      });
      this.$data.message = "";
    },

    selectEmoji(v) {
      this.$data.message = v;
      this.$refs.txtDom.focus();
    },

    customEmoji(value) {
      return ``;
    },

    renderTxt(txt = "") {
      let rnTxt = [];
      let match = null;
      const regex = /(\[.*?\])/g;
      let start = 0;
      let index = 0;
      while ((match = regex.exec(txt))) {
        index = match.index;
        if (index > start) {
          rnTxt.push(txt.substring(start, index));
        }
        if (match[1] in emoji.obj) {
          const v = emoji.obj[match[1]];
          rnTxt.push(this.customEmoji(v));
        } else {
          rnTxt.push(match[1]);
        }
        start = index + match[1].length;
      }
      rnTxt.push(txt.substring(start, txt.length));
      return rnTxt.toString().replace(/,/g, "");
    },

    callVideo() {
      if (this.type == "contact") {
        this.$refs.emediaModal.showEmediaModal();
        this.$refs.emediaModal.showCallerWait(
          this.$data.activedKey[this.type].name
        );
        const videoSetting = JSON.parse(localStorage.getItem("videoSetting"));
        const recMerge = (videoSetting && videoSetting.recMerge) || false;
        const rec = (videoSetting && videoSetting.rec) || false;
        this.onCallVideo({
          chatType: this.type,
          to: this.$data.activedKey[this.type].name,
          rec,
          recMerge
        });
      } else if (this.type == "group") {
        this.getGroupMembers(this.$data.activedKey[this.type].groupid);
        this.$refs.addAvMembertModal.show();
      }
    },
    callVoice() {
      this.$refs.emediaModal.showEmediaModal();
      this.$refs.emediaModal.showCallerWait(
        this.$data.activedKey[this.type].name
      );
      const videoSetting = JSON.parse(localStorage.getItem("videoSetting"));
      const recMerge = (videoSetting && videoSetting.recMerge) || false;
      const rec = (videoSetting && videoSetting.rec) || false;
      this.onCallVoice({
        chatType: this.type,
        to: this.$data.activedKey[this.type].name,
        rec,
        recMerge
      });
    },
    readablizeBytes(value) {
      let s = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
      let e = Math.floor(Math.log(value) / Math.log(1024));
      return (value / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
    },

    // TODO 可以抽离到utils
    renderTime(time) {
      const nowStr = new Date();
      const localStr = time ? new Date(time) : nowStr;
      const localMoment = moment(localStr);
      const localFormat = localMoment.format("MM-DD hh:mm A");
      return localFormat;
    },
    getLastMsg(item) {
      const { name, params } = this.$route;
      const chatList = this.$store.state.chat.msgList[name];
      let userId = "";
      if (name == "contact") {
        userId = item.name;
      } else if (name == "group") {
        userId = item.groupid;
      } else {
        userId = item.id;
      }
      const currentMsgs = chatList[userId] || [];
      const lastMsg = currentMsgs.length
        ? currentMsgs[currentMsgs.length - 1].msg
        : "";
      const msgTime = currentMsgs.length
        ? this.renderTime(currentMsgs[currentMsgs.length - 1].time)
        : "";
      return { lastMsg, msgTime };
    },
    scollBottom() {
      setTimeout(() => {
        const dom = this.$refs.msgContent;
        if (!dom) return;
        dom.scrollTop = dom.scrollHeight;
      }, 0);
    },
    handleCommand(item) {
      let name = "";
      if (this.type === "contact") {
        name = this.$data.activedKey[this.type].name;
      } else if (this.type === "group") {
        name = this.$data.activedKey[this.type].groupid;
      } else if (this.type === "chatroom") {
        name = this.$data.activedKey[this.type].id;
      }
      this.recallMessage({ to: name, message: item });
    },
    closeGroupMessage() {
      //退出群组或解散群组时关闭聊天框
      this.$data.activedKey["group"] = "";
    },
    closeContactMessage() {
      //删除好友时关闭当前聊天框
      this.$data.activedKey["contact"] = "";
    },
    changeIsVideoState(v) {
      v ? (this.$data.nowIsVideo = true) : (this.$data.nowIsVideo = false);
    }
  },
  components: {
    EmediaModal,
    AddAVMemberModal,
    ChatEmoji,
    UpLoadImage,
    MultiAVModal,
    GetGroupInfo,
    RecordAudio
  }
};
</script>

<style scoped >
.all_bh{
  width:30.45rem;
  overflow-y: auto;
}

.message_content{
  width:30rem;
  height:30rem;
  box-sizing: border-box;
  border:2px solid #eeeeee;
}
.message_left{
  margin-top:0.5rem;
  width:30rem;
  padding-left:1rem;
  font-size: 2rem;
  text-align: left;
  box-sizing: border-box;
  background: #eeeeee;;
}
.message_right{
 margin-top:0.5rem;
  width:30rem;
  padding-right:1rem;
  font-size: 2rem;
   box-sizing: border-box;
  text-align: right;
  background: #eeeeee;;
}
.text_area{
  width:30rem;
  box-sizing: border-box;
  height:7rem;
  resize: none;
}
.text_area_mes{
  width:30rem;
  height:7rem;
  resize: none;
}
.text_area_btn{
  float:right;
  margin-bottom:4rem;
}
.message_c_top{
  width:30rem;
  font-size:1rem;
 word-wrap: break-word
}
.message_c_bottom{
  width:30rem;
  font-size: 1.7rem;
  word-wrap: break-word
}
</style>

