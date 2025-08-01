import cosplayA from '../assets/cosplays/personagem-a.png';
import cosplayB from '../assets/cosplays/personagem-b.png';
import cosplayC from '../assets/cosplays/personagem-c.png';
import cosplayD from '../assets/cosplays/personagem-d.png';
import cosplayE from '../assets/cosplays/personagem-e.png'; // 

/*
  large - 2x2
  tall - 1x2
  normal - 1x1
  wide - 2x1
*/

export const cosplayData = [
  {
    id: 'personagem-a',
    title: 'Cosplay do Personagem A',
    description: 'Este cosplay foi feito para o evento X, utilizando materiais Y e Z.',
    image: cosplayA,
    gridClass: 'large',
  },
  {
    id: 'personagem-b',
    title: 'Cosplay do Personagem B',
    description: 'Um estudo de armadura leve e tecidos.',
    image: cosplayB,
    gridClass: 'tall',
  },
  {
    id: 'personagem-c',
    title: 'Cosplay do Personagem C',
    description: 'Foco na maquiagem e peruca estilizada.',
    image: cosplayC,
    gridClass: 'normal',
  },
  {
    id: 'personagem-d',
    title: 'Cosplay do Personagem D',
    description: 'Desafio de costura com múltiplos padrões.',
    image: cosplayD,
    gridClass: 'wide',
  },
  {
    id: 'personagem-e',
    title: 'Cosplay do Personagem E',
    description: 'Acessórios impressos em 3D e pintados à mão.',
    image: cosplayE,
    gridClass: 'normal',
  },
];