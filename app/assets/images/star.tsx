import { SvgXml } from 'react-native-svg';

export const Star = () => {
  return (
    <SvgXml
      width='16'
      height='16'
      xml={`
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 13.4444L3.66667 16.1111L5 10.7778L1 6.33333L6.77778 5.88889L9 1L11.2222 5.88889L17 6.33333L13 10.7778L14.3333 16.1111L9 13.4444Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `} />
  );
}

export default Star;