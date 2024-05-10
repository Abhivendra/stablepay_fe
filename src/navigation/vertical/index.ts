// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',

      // icon: 'tabler:smart-home',
    },
    {
      title: 'Payments',
      path: '/payments',

      // icon: 'tabler:payment',
    },
    {
      title: 'Recipients',
      path: '/recipients',

      // icon: 'tabler:mail',
    },
    {
      title: 'Earn 1000 USD',
      path: '/earn',

      // icon: 'tabler:mail',
    },

    // {
    //   path: '/acl',
    //   action: 'read',
    //   subject: 'acl-page',
    //   title: 'Access Control',
    //   icon: 'tabler:shield',
    // }
  ]
}

export default navigation
