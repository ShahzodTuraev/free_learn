import { ReactComponent as home} from '../assets/icons/navbar/home.svg'
import { ReactComponent as compass} from '../assets/icons/navbar/compass.svg'
import { ReactComponent as subscription} from '../assets/icons/navbar/subscriptions.svg'

export const sidebar = [
    {id: 1,
    title: '',
    data:[
      {id:1, title: 'Anasayfa', icon: home},
      {id:2, title: 'Keşfet', icon: compass},
      {id:3, title: 'Abonelikler', icon: subscription},  
    ]   
    },
    {id: 2,
    title: '',
    data:[
        {id:1, title: 'Kitaplık', icon: home},
        {id:2, title: 'Geçmiş', icon: compass},
        {id:3, title: 'Videolariniz', icon: subscription},  
        {id:4, title: 'Daha sonra izle', icon: subscription},  
        {id:5, title: 'Beğendiğim videolar', icon: subscription},  
        {id:6, title: 'Daha fazla göster', icon: subscription},  
    ]   
    },
    {id: 3,
    title: 'ABONELİKLER',
    data:[
        {id:1, title: 'The Game', icon: home},
        {id:2, title: 'Lean Yo', icon: compass},
        {id:3, title: 'Best Kuaför', icon: subscription},  
        {id:4, title: 'Meyau Seu', icon: subscription},  
        {id:5, title: 'Discover Design', icon: subscription},  
        {id:6, title: 'Build Game', icon: subscription}, 
        {id:7, title: 'Vlogger Man', icon: subscription}, 
        {id:8, title: 'Daha fazla göster', icon: subscription}, 
    ]   
    },
    {id: 1,
    title: 'YOUTUBE’DEN DAHA FAZLA İÇERİK',
    data:[
        {id:1, title: 'Youtube Premium', icon: home}, 
    ]   
    },
]