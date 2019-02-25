<template>
  <div>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['0','1', '2']" router unique-opened:flase>
          <el-submenu
            style="overflow: hidden;"
            v-for="(value,i) in routeList"
            :key="i"
            :index="''+i"
          >
            <template slot="title">
              <i class="el-icon-message"></i>
              {{value.name}}
            </template>
            <div v-for="(child,j) in value.child" :key="j">
              <el-menu-item :index="i+'_'+j" :route="{'name':child.name}">{{child.name}}</el-menu-item>
            </div>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="padding">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>