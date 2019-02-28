export const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    component: resolve => require(["./components/login/Login.vue"], resolve)
  }
];
  export const userrouter=[{
      path: "/layout",
      component: resolve => require(["./components/Layout.vue"], resolve),
      name: "layout",
      children: [ 
              {
                  path: "/test",
                  component: resolve => require(["./components/test.vue"], resolve)
              },
              {
                  path: "/home",
                  component: resolve => require(["./components/Home.vue"], resolve)
              },
              
              {
                  path: "/data",
                  component: resolve => require(["./components/data.vue"], resolve)
              }
      ]
  },]
  export const people = [
    {
      path: "/layout",
      component: resolve => require(["./components/Menu.vue"], resolve)
    }  
  ];
  export const dismake = [
    {
      path: "*",
      component: resolve => require(["./components/Error404.vue"], resolve)
    }  
  ];
