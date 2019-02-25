export const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/login",
    component: resolve => require(["./components/login/Login.vue"], resolve)
  },
  {
    path: "/",
    component: resolve => require(["./components/Layout.vue"], resolve),
    name: "layout",
    children: [
      {
        path: "/home",
        component: resolve => require(["./components/Home.vue"], resolve)
      },
      {
        path: "/test",
        component: resolve => require(["./components/test.vue"], resolve)
      },
      {
        path: "/data",
        component: resolve => require(["./components/data.vue"], resolve)
      }
        ]
  },
  

     
];
