// components/Logo.tsx
import { Jaro } from "next/font/google";

// Use the Jaro font from Google Fonts
const jaro = Jaro({
  weight: '400', // Choose the desired weight
  style: 'normal', // Choose the desired style
  subsets: ['latin'], // Define subsets if needed
});

function Logo() {
  return (
    <div className={`${jaro.className} font-semibold text-[28px] dark:text-white text-black`}>SnapFit</div>
  );
}

export default Logo;
