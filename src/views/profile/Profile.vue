<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info></user-info>
    <account-info></account-info>
    <normal-list-view :list-data="orderList" />
    <normal-list-view :list-data="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import UserInfo from "./childComps/UserInfo";
import AccountInfo from "./childComps/AccountInfo";
import NormalListView from "./childComps/NomalListView";
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" }
      ]
    };
  }
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  position: relative;
  background-color: var(--color-tink);
  font-weight: 700;
  color: #fff;
  z-index: 99;
}
</style>
