<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <div class="menu-logo">
            <img src="/imgs/logo.png" alt="logo">
          </div>
          <div class="menu-item">
            <router-link to="/index">ホーム</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/topic">トピック</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/question">シツモン</router-link>
          </div>
          <div class="menu-item">
            <router-link to="/answer">アンサー</router-link>
          </div> 
          <div class="header-search">
            <div class="wrapper">
              <a href="javascript:;" class="icon-search"></a>
              <input type="text" name="keyword">
            </div>
          </div>
        </div>
        <div class="topbar-user">
          <div class="user-item">
            <router-link to="/" v-if="username">{{username}}</router-link>
          </div>
          <div class="user-item">
            <router-link to="/" v-if="username"  @click="logout">ログアウト</router-link>
          </div>
          <div class="user-item">
            <router-link to="/" v-if="!username">ログイン</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name:'nav-header',
  props:{
  },
  setup(){
  }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height: 60px;
      line-height: 60px;
      .container{
        background-color: $colorG;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .topbar-menu{
          margin-left:20px;
          display: flex;
          .menu-logo{
            height: 60px;
          }
          .menu-item{
            box-sizing: border-box;
            direction: ltr;
            position: relative;
            width: 120px;
            flex:1;
            padding-left: 16px;
            padding-right: 16px;
            text-align: center;
              &:hover{
                background-color: #e4e4e4;
              }
            a{
              width: 100%;
              font-weight: bold;
              color: #B0B0B0;
              text-decoration: none;
              cursor: pointer;
              &.router-link-exact-active {
                color: $colorA;
              }
            }
          }
          .header-search{
            width: 210px;
            margin-left: 20px;
            display: flex;
            .wrapper{
              height: 30px;
              border: 1px solid #e0e0e0;
              display: flex;
              align-items: center;
              flex: 1;
              margin: auto;
              border-radius: 3px;
              input{
                width: 190px;
                height: 30px;
                border: none;
                box-sizing: border-box;
                padding-left: 14px;
              }
              &:hover{
                border: 2px solid $colorA;
              }

              .icon-search{
                @include bgImg(16px,12px,'/imgs/icon-search.png');
                margin-left: 5px;
              }
            }
          }
        }
        .topbar-user{
          margin-right:20px;
          .user-item{
            a{

            }
          }
        }
      }
    }
  }
</style>