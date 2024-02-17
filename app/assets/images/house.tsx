import { SvgXml } from 'react-native-svg';

interface Props {
  opacity: number;
}

export const House = ({opacity}: Props) => {

  return (
    <SvgXml
      width='14'
      height='16'
      xml={`
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity='${opacity}' d="M1 7.58824L8 1L15 7.58824L15 17H1L1 7.58824Z" stroke="#3D444F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>       
        </svg>
        `} />
  );
}

export default House;