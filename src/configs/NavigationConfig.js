import { 
  DashboardOutlined, 
  AppstoreOutlined,
  FileTextOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  AntDesignOutlined,
  SafetyOutlined,
  StopOutlined,
  DotChartOutlined,
  MailOutlined,
  MessageOutlined,
  CalendarOutlined,
  BulbOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  LayoutOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  CommentOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  FileUnknownOutlined,
  ProfileOutlined
} from '@ant-design/icons';

const extraNavTree = [
  {
    key: 'extra',
    path: '/app/pages',
    title: 'sidenav.pages',
    icon: PlusCircleOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages',
        path: '/app/pages',
        title: 'sidenav.pages',
        icon: FileTextOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-profile',
            path: '/app/pages/profile',
            title: 'sidenav.pages.profile',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'extra-pages-list',
            path: '/app/pages/user-list',
            title: 'sidenav.pages.userlist',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-invoice',
            path: '/app/pages/invoice',
            title: 'sidenav.pages.invoice',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-pricing',
            path: '/app/pages/pricing',
            title: 'sidenav.pages.pricing',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-pages-faq',
            path: '/app/pages/faq',
            title: 'sidenav.pages.faq',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'extra-pages-setting',
            path: '/app/pages/setting',
            title: 'sidenav.pages.setting',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'extra-auth',
        path: '/auth',
        title: 'sidenav.authentication',
        icon: SafetyOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-auth-login-1',
            path: '/auth/login-1',
            title: 'sidenav.authentication.login.1',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-login-2',
            path: '/auth/login-2',
            title: 'sidenav.authentication.login.2',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-register-1',
            path: '/auth/register-1',
            title: 'sidenav.authentication.register.1',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-register-2',
            path: '/auth/register-2',
            title: 'sidenav.authentication.register.2',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-auth-forgot-password',
            path: '/auth/forgot-password',
            title: 'sidenav.authentication.forgetPassword',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      },
      {
        key: 'extra-errors',
        path: '/auth/error-1',
        title: 'sidenav.errors',
        icon: StopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-errors-error-1',
            path: '/auth/error-1',
            title: 'sidenav.errors.error.1',
            icon: '',
            breadcrumb: true,
            submenu: []
          },
          {
            key: 'extra-errors-error-2',
            path: '/auth/error-2',
            title: 'sidenav.errors.error.2',
            icon: '',
            breadcrumb: true,
            submenu: []
          }
        ]
      }
    ]
  }
]

const dashBoardNavTree = [{
  key: 'dashboards',
  path: 'app',
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-default',
      path: '/app/dashboard',
      title: 'Dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-analytic',
      path: '/app/updates',
      title: 'sidenav.dashboard.analytic',
      icon: DotChartOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-sales',
      path: '/app/modules',
      title: 'sidenav.dashboard.sales',
      icon: FundOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'apps-mail',
      path: '/app/mail/inbox',
      title: 'General',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'apps-general-settings',
          path: '/app/general/settings',
          title: 'Settings',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-chat',
      path: '/app/chat',
      title: 'Account',
      icon: MessageOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'Settings',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-calendar',
      path: '/app/calendar',
      title: 'CMS',
      icon: CalendarOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'Settings',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-project',
      path: '/app/project',
      title: 'Hotels',
      icon: BulbOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-project-list',
          path: '/app/project/list',
          title: 'Flights',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-project-scrumboard',
          path: '/app/project/scrumboard',
          title: 'Boats',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-ecommerce',
      path: '/app/ecommerce',
      title: 'Rentals',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Tours',
      path: '/app/Tours',
      title: 'Tours',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Cartrawler',
      path: '/app/Cartrawler',
      title: 'Cartrawler',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Visa',
      path: '/app/Visa',
      title: 'Visa',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Blogs',
      path: '/app/Blogs',
      title: 'Blogs',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Locations',
      path: '/app/Locations',
      title: 'Locations',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Offers',
      path: '/app/Offers',
      title: 'Offers',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'apps-Coupons',
      path: '/app/Coupons',
      title: 'Coupons',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'apps-Newlatter',
      path: '/app/Newlatter',
      title: 'Newlatter',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'apps-Bookings',
      path: '/app/Bookings',
      title: 'Bookings',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'apps-Payouts',
      path: '/app/Payouts',
      title: 'Payouts',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'apps-ecommerce-productList',
          path: '/app/ecommerce/product-list',
          title: 'sidenav.apps.ecommerce.productList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'apps-ecommerce-addProduct',
          path: '/app/ecommerce/add-product',
          title: 'sidenav.apps.ecommerce.addProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-editProduct',
          path: '/app/ecommerce/edit-product/12',
          title: 'sidenav.apps.ecommerce.editProduct',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'apps-ecommerce-orders',
          path: '/app/ecommerce/orders',
          title: 'sidenav.apps.ecommerce.orders',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },

  ]
}]

// const appsNavTree = [{
//   key: 'apps',
//   path: '/app/apps',
//   title: 'sidenav.apps',
//   icon: AppstoreOutlined,
//   breadcrumb: false,
//   submenu: [
//     {
//       key: 'apps-mail',
//       path: '/app/apps/mail/inbox',
//       title: 'sidenav.apps.mail',
//       icon: MailOutlined,
//       breadcrumb: false,
//       submenu: []
//     },
//     {
//       key: 'apps-chat',
//       path: '/app/apps/chat',
//       title: 'sidenav.apps.chat',
//       icon: MessageOutlined,
//       breadcrumb: false,
//       submenu: []
//     },
//     {
//       key: 'apps-calendar',
//       path: '/app/apps/calendar',
//       title: 'sidenav.apps.calendar',
//       icon: CalendarOutlined,
//       breadcrumb: true,
//       submenu: []
//     },
//     {
//       key: 'apps-project',
//       path: '/app/apps/project',
//       title: 'sidenav.apps.project',
//       icon: BulbOutlined,
//       breadcrumb: true,
//       submenu: [
//         {
//           key: 'apps-project-list',
//           path: '/app/apps/project/list',
//           title: 'sidenav.apps.project.list',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         },
//         {
//           key: 'apps-project-scrumboard',
//           path: '/app/apps/project/scrumboard',
//           title: 'sidenav.apps.project.scrumboard',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         }
//       ]
//     },
//     {
//       key: 'apps-ecommerce',
//       path: '/app/apps/ecommerce',
//       title: 'sidenav.apps.ecommerce',
//       icon: ShoppingCartOutlined,
//       breadcrumb: true,
//       submenu: [
//         {
//           key: 'apps-ecommerce-productList',
//           path: '/app/apps/ecommerce/product-list',
//           title: 'sidenav.apps.ecommerce.productList',
//           icon: '',
//           breadcrumb: true,
//           submenu: []
//         },
//         {
//           key: 'apps-ecommerce-addProduct',
//           path: '/app/apps/ecommerce/add-product',
//           title: 'sidenav.apps.ecommerce.addProduct',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         },
//         {
//           key: 'apps-ecommerce-editProduct',
//           path: '/app/apps/ecommerce/edit-product/12',
//           title: 'sidenav.apps.ecommerce.editProduct',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         },
//         {
//           key: 'apps-ecommerce-orders',
//           path: '/app/apps/ecommerce/orders',
//           title: 'sidenav.apps.ecommerce.orders',
//           icon: '',
//           breadcrumb: false,
//           submenu: []
//         }
//       ]
//     }
//   ]
// }]

// const componentsNavTree = [
//   {
//     key: 'components',
//     path: '/app/components',
//     title: 'sidenav.components',
//     icon: AntDesignOutlined,
//     breadcrumb: true,
//     submenu: [
//       {
//         key: 'components-general',
//         path: '/app/components/general',
//         title: 'sidenav.components.general',
//         icon: InfoCircleOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-general-button',
//             path: '/app/components/general/button',
//             title: 'sidenav.components.general.button',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-general-icon',
//             path: '/app/components/general/icon',
//             title: 'sidenav.components.general.icon',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-general-typography',
//             path: '/app/components/general/typography',
//             title: 'sidenav.components.general.typography',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-layout',
//         path: '/app/components/layout',
//         title: 'sidenav.components.layout',
//         icon: LayoutOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-layout-grid',
//             path: '/app/components/layout/grid',
//             title: 'sidenav.components.layout.grid',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-layout-layout',
//             path: '/app/components/layout/layout',
//             title: 'sidenav.components.layout.layout',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-navigation',
//         path: '/app/components/navigation',
//         title: 'sidenav.components.navigation',
//         icon: CompassOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-navigation-affix',
//             path: '/app/components/navigation/affix',
//             title: 'sidenav.components.navigation.affix',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-breadcrumb',
//             path: '/app/components/navigation/breadcrumb',
//             title: 'sidenav.components.navigation.breadcrumb',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-dropdown',
//             path: '/app/components/navigation/dropdown',
//             title: 'sidenav.components.navigation.dropdown',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-menu',
//             path: '/app/components/navigation/menu',
//             title: 'sidenav.components.navigation.menu',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-pagination',
//             path: '/app/components/navigation/pagination',
//             title: 'sidenav.components.navigation.pagination',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-page-header',
//             path: '/app/components/navigation/page-header',
//             title: 'sidenav.components.navigation.pageHeader',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-navigation-steps',
//             path: '/app/components/navigation/steps',
//             title: 'sidenav.components.navigation.steps',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-data-entry',
//         path: '/app/components/data-entry',
//         title: 'sidenav.components.dataEntry',
//         icon: FileDoneOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-data-entry-auto-complete',
//             path: '/app/components/data-entry/auto-complete',
//             title: 'sidenav.components.dataEntry.autoComplete',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-checkbox',
//             path: '/app/components/data-entry/checkbox',
//             title: 'sidenav.components.dataEntry.checkbox',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-cascader',
//             path: '/app/components/data-entry/cascader',
//             title: 'sidenav.components.dataEntry.cascader',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-date-picker',
//             path: '/app/components/data-entry/date-picker',
//             title: 'sidenav.components.dataEntry.datePicker',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-form',
//             path: '/app/components/data-entry/form',
//             title: 'sidenav.components.dataEntry.form',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-input-number',
//             path: '/app/components/data-entry/input-number',
//             title: 'sidenav.components.dataEntry.inputNumber',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-input',
//             path: '/app/components/data-entry/input',
//             title: 'sidenav.components.dataEntry.input',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-mentions',
//             path: '/app/components/data-entry/mentions',
//             title: 'sidenav.components.dataEntry.mentions',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-rate',
//             path: '/app/components/data-entry/rate',
//             title: 'sidenav.components.dataEntry.rate',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-radio',
//             path: '/app/components/data-entry/radio',
//             title: 'sidenav.components.dataEntry.radio',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-switch',
//             path: '/app/components/data-entry/switch',
//             title: 'sidenav.components.dataEntry.switch',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-slider',
//             path: '/app/components/data-entry/slider',
//             title: 'sidenav.components.dataEntry.slider',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-select',
//             path: '/app/components/data-entry/select',
//             title: 'sidenav.components.dataEntry.select',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-tree-select',
//             path: '/app/components/data-entry/tree-select',
//             title: 'sidenav.components.dataEntry.treeSelect',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-transfer',
//             path: '/app/components/data-entry/transfer',
//             title: 'sidenav.components.dataEntry.transfer',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-time-picker',
//             path: '/app/components/data-entry/time-picker',
//             title: 'sidenav.components.dataEntry.timePicker',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-entry-upload',
//             path: '/app/components/data-entry/upload',
//             title: 'sidenav.components.dataEntry.upload',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//         ]
//       },
//       {
//         key: 'components-data-display',
//         path: '/app/components/data-display',
//         title: 'sidenav.components.dataDisplay',
//         icon: DesktopOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-data-display-avatar',
//             path: '/app/components/data-display/avatar',
//             title: 'sidenav.components.dataDisplay.avatar',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-badge',
//             path: '/app/components/data-display/badge',
//             title: 'sidenav.components.dataDisplay.badge',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-comment',
//             path: '/app/components/data-display/comment',
//             title: 'sidenav.components.dataDisplay.comment',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-collapse',
//             path: '/app/components/data-display/collapse',
//             title: 'sidenav.components.dataDisplay.collapse',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-carousel',
//             path: '/app/components/data-display/carousel',
//             title: 'sidenav.components.dataDisplay.carousel',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-card',
//             path: '/app/components/data-display/card',
//             title: 'sidenav.components.dataDisplay.card',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-calendar',
//             path: '/app/components/data-display/calendar',
//             title: 'sidenav.components.dataDisplay.calendar',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-descriptions',
//             path: '/app/components/data-display/descriptions',
//             title: 'sidenav.components.dataDisplay.descriptions',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-empty',
//             path: '/app/components/data-display/empty',
//             title: 'sidenav.components.dataDisplay.empty',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-list',
//             path: '/app/components/data-display/list',
//             title: 'sidenav.components.dataDisplay.list',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-popover',
//             path: '/app/components/data-display/popover',
//             title: 'sidenav.components.dataDisplay.popover',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-statistic',
//             path: '/app/components/data-display/statistic',
//             title: 'sidenav.components.dataDisplay.statistic',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tree',
//             path: '/app/components/data-display/tree',
//             title: 'sidenav.components.dataDisplay.tree',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tooltip',
//             path: '/app/components/data-display/tooltip',
//             title: 'sidenav.components.dataDisplay.tooltip',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-timeline',
//             path: '/app/components/data-display/timeline',
//             title: 'sidenav.components.dataDisplay.timeline',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tag',
//             path: '/app/components/data-display/tag',
//             title: 'sidenav.components.dataDisplay.tag',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-tabs',
//             path: '/app/components/data-display/tabs',
//             title: 'sidenav.components.dataDisplay.tabs',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-data-display-table',
//             path: '/app/components/data-display/table',
//             title: 'sidenav.components.dataDisplay.table',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//         ]
//       },
//       {
//         key: 'components-feedback',
//         path: '/app/components/feedback',
//         title: 'sidenav.components.feedback',
//         icon: CommentOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-feedback-alert',
//             path: '/app/components/feedback/alert',
//             title: 'sidenav.components.feedback.alert',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-drawer',
//             path: '/app/components/feedback/drawer',
//             title: 'sidenav.components.feedback.drawer',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-modal',
//             path: '/app/components/feedback/modal',
//             title: 'sidenav.components.feedback.modal',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-message',
//             path: '/app/components/feedback/message',
//             title: 'sidenav.components.feedback.message',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-notification',
//             path: '/app/components/feedback/notification',
//             title: 'sidenav.components.feedback.notification',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-progress',
//             path: '/app/components/feedback/progress',
//             title: 'sidenav.components.feedback.progress',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-popconfirm',
//             path: '/app/components/feedback/popconfirm',
//             title: 'sidenav.components.feedback.popconfirm',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-result',
//             path: '/app/components/feedback/result',
//             title: 'sidenav.components.feedback.result',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-spin',
//             path: '/app/components/feedback/spin',
//             title: 'sidenav.components.feedback.spin',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-feedback-skeleton',
//             path: '/app/components/feedback/skeleton',
//             title: 'sidenav.components.feedback.skeleton',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-other',
//         path: '/app/components/other',
//         title: 'sidenav.components.other',
//         icon: RobotOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-other-anchor',
//             path: '/app/components/other/anchor',
//             title: 'sidenav.components.other.anchor',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-other-backtop',
//             path: '/app/components/other/backtop',
//             title: 'sidenav.components.other.backtop',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-other-config-provider',
//             path: '/app/components/other/config-provider',
//             title: 'sidenav.components.other.configProvider',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-other-divider',
//             path: '/app/components/other/divider',
//             title: 'sidenav.components.other.divider',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-charts',
//         path: '/app/components/charts',
//         title: 'sidenav.charts',
//         icon: PieChartOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-charts-apex',
//             path: '/app/components/charts/apex-charts',
//             title: 'sidenav.charts.apex',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-charts-chartjs',
//             path: '/app/components/charts/chartjs',
//             title: 'sidenav.charts.chartjs',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       },
//       {
//         key: 'components-maps',
//         path: '/app/components/maps',
//         title: 'sidenav.maps',
//         icon: EnvironmentOutlined,
//         breadcrumb: true,
//         submenu: [
//           {
//             key: 'components-maps-google',
//             path: '/app/components/maps/google-map',
//             title: 'sidenav.maps.google',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           },
//           {
//             key: 'components-maps-simple',
//             path: '/app/components/maps/simple-map',
//             title: 'sidenav.maps.simple',
//             icon: '',
//             breadcrumb: true,
//             submenu: []
//           }
//         ]
//       }
//     ]
//   }
// ]

// const docsNavTree = [{
//   key: 'docs',
//   path: '/app/docs',
//   title: 'sidenav.docs',
//   icon: BookOutlined,
//   breadcrumb: false,
//   submenu: [
//     {
//       key: 'docs-documentation',
//       path: '/app/docs/documentation',
//       title: 'sidenav.docs.documentation',
//       icon: FileUnknownOutlined,
//       breadcrumb: false,
//       submenu: []
//     },
//     {
//       key: 'docs-changelog',
//       path: '/app/docs/documentation/changelog',
//       title: 'sidenav.docs.changelog',
//       icon: ProfileOutlined,
//       breadcrumb: false,
//       submenu: []
//     }
//   ]
// }]

const navigationConfig = [
  ...dashBoardNavTree,
  // ...appsNavTree,
  // ...componentsNavTree,
  // ...extraNavTree,
  // ...docsNavTree
]

export default navigationConfig;
