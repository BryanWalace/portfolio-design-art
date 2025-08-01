// Importe todas as suas imagens de arte aqui
import xiaoImg from '../assets/arts/xiao.png';
import dilucImg from '../assets/arts/diluc.png';
import rosaImg from '../assets/arts/rosa.png';
import ventiImg from '../assets/arts/venti.png';
import raidenImg from '../assets/arts/raiden.png';

export const artData = [
  { 
    id: 'xiao',
    title: 'Xiao', 
    description: 'Ilustração do personagem Xiao, de Genshin Impact.', 
    image: xiaoImg,
    primaryColor: '#A4EFCE', 
    secondaryColor: '#000000' 
  },
  { 
    id: 'diluc', 
    title: 'Diluc', 
    description: 'Fanart do personagem Diluc em tons quentes.', 
    image: dilucImg,
    primaryColor: '#E1BCB9', 
    secondaryColor: '#000000'
  },
  { 
    id: 'rosa', 
    title: 'Sussurros da Floresta', 
    description: 'Criação de ambiente fantástico com personagem original.', 
    image: rosaImg,
    primaryColor: '#99EAE9',
    secondaryColor: '#050505' 
  },
  {
    id: 'venti',
    title: 'Venti',
    description: 'Estudo de cores frias com o personagem Venti.',
    image: ventiImg,
    primaryColor: '#9FE6C3',
    secondaryColor: '#000000'
  },
  {
    id: 5,
        title: 'Raiden Shogun',
        description: 'Ilustração digital.',
        image: raidenImg,
        primaryColor: '#C8B9DA',
        secondaryColor: '#000000ff'
  }
  
];