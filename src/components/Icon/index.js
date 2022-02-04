import React from 'react';
import styles from './Icon.module.scss';

export default function Icon() {
  return (
    <section className={styles.section}>
      {/* <svg className="active" height="80" width="80" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.8959 4.98315H42.984V20.9995H34.0199" stroke="#E93CAC" strokeMiterlimit={10} className={styles.arrowBody} /><path d="M31.5583 8.2852L28.255 4.98309L31.5583 1.67981" stroke="#E93CAC" strokeMiterlimit={10} className={styles.arrowTip} /><path d="M10.7798 21.0135H25.018" stroke="#E93CAC" strokeMiterlimit={10} className={styles.boxLine} /><path d="M8.11969 16.5187H7.61969V17.0187V24.9837V25.4837H8.11969H27.6781H28.1781V24.9837V17.0187V16.5187H27.6781H8.11969Z" stroke="white" strokeMiterlimit={10} className={styles.boxMiddle} /><path d="M1 0.5H0.5V1V8.965V9.465H1H20.5584H21.0584V8.965V1V0.5H20.5584H1Z" stroke="white" strokeMiterlimit={10} className={styles.boxTop} /><path d="M1 32.535H0.5V33.035V41V41.5H1H20.5584H21.0584V41V33.035V32.535H20.5584H1Z" stroke="white" strokeMiterlimit={10} className={styles.boxBottom} /></svg> */}
      <svg className="active" height="80" width="80" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.5139 30.6483C41.5139 21.2434 41.5139 10.404 41.5139 1H1C1 10.4049 1 30.6996 1 30.6996L9.126 30.7131C9.126 30.7131 9.126 37.0661 9.126 39.4034C9.396 39.3188 18.2987 30.6735 19.097 30.6735L41.5139 30.6483Z" stroke="#E93CAC" strokeMiterlimit="10" strokeLinecap="square" className={styles.bubble}></path><path d="M21.2578 7.8479L23.8227 13.0462L29.5593 13.8796L25.4085 17.926L26.3886 23.64L21.2578 20.9418L16.1269 23.64L17.1061 17.926L12.9554 13.8796L18.6919 13.0462L21.2578 7.8479Z" stroke="white" strokeMiterlimit="10" strokeLinecap="square" className={styles.star}></path></svg>
      {/* <svg className="active" height="80" width="80" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.8071 12.5657L29.8889 13.652L30.6593 12.8817L36.0507 7.49027L36.213 7.328L36.1957 7.09917L35.8842 2.96245L35.8024 1.87612L35.0321 2.64645L29.6406 8.0379L29.4783 8.20016L29.4956 8.429L29.8071 12.5657Z" stroke="white" strokeMiterlimit="10" className={styles.arrowFletching1}></path><path d="M30.9325 13.155L30.162 13.9253L31.2485 14.0071L35.3852 14.3187L35.6141 14.3359L35.7763 14.1736L41.1678 8.78218L41.9383 8.01162L40.8517 7.93003L36.7149 7.61945L36.4862 7.60227L36.324 7.76446L30.9325 13.155Z" stroke="white" strokeMiterlimit="10" className={styles.arrowFletching2}></path><path d="M36.3698 7.44446L22.3448 21.4695" stroke="white" strokeMiterlimit="10" className={styles.arrowShaft}></path><path d="M19.6314 18.4008C18.84 19.1921 18.3954 20.2655 18.3954 21.3847C18.3954 21.9388 18.5046 22.4876 18.7167 22.9996C18.9287 23.5115 19.2396 23.9767 19.6314 24.3686C20.0233 24.7605 20.4885 25.0713 21.0004 25.2834C21.5124 25.4954 22.0612 25.6046 22.6153 25.6046C23.7345 25.6046 24.8079 25.16 25.5993 24.3686" stroke="#E93CAC" strokeMiterlimit="10" className={styles.targetInner}></path><path d="M22.6153 8.55151C19.2118 8.55151 15.9476 9.90357 13.5409 12.3103C11.1342 14.7169 9.78218 17.9811 9.78218 21.3847C9.78218 24.7882 11.1342 28.0524 13.5409 30.4591C15.9476 32.8658 19.2118 34.2178 22.6153 34.2178" stroke="white" strokeMiterlimit="10" className={styles.targetMiddle}></path><path d="M44.2307 21.3846C44.2307 33.3222 34.5529 43 22.6153 43C10.6777 43 1 33.3222 1 21.3846" stroke="#E93CAC" strokeMiterlimit="10" className={styles.targetOuter}></path></svg> */}
      {/* <svg className="active" height="80" width="80" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.8925 12.2457L22.4898 11.6966L22.0865 12.2453L12.4729 25.3244L12.3033 25.5552L12.4165 25.8182L17.2101 36.9567L17.3402 37.2591H17.6694H27.3093H27.639L27.7689 36.956L32.5417 25.8175L32.6542 25.555L32.4853 25.3248L22.8925 12.2457Z" stroke="white" className={styles.penTip}></path><path d="M30.0336 38.2262V37.7262H29.5336H15.4432H14.9432V38.2262V41V41.5H15.4432H29.5336H30.0336V41V38.2262Z" stroke="white" className={styles.penBase}></path><path d="M22.478 11.7197V24.9459" stroke="white" strokeMiterlimit="10" className={styles.penLine}></path><path d="M23.5808 25.3317C23.2731 25.1261 22.9113 25.0164 22.5412 25.0164C22.0448 25.0164 21.5689 25.2135 21.2179 25.5645C20.867 25.9154 20.6698 26.3914 20.6698 26.8877C20.6698 27.2578 20.7796 27.6196 20.9852 27.9274C21.1908 28.2351 21.4831 28.475 21.825 28.6166C22.167 28.7582 22.5432 28.7953 22.9062 28.7231C23.2692 28.6509 23.6027 28.4727 23.8644 28.2109C24.1261 27.9492 24.3043 27.6158 24.3766 27.2528C24.4488 26.8898 24.4117 26.5135 24.2701 26.1716C24.1284 25.8296 23.8886 25.5374 23.5808 25.3317Z" stroke="white" className={styles.penCircle}></path><path d="M43.3851 22.2445C43.0774 22.0388 42.7156 21.9291 42.3455 21.9291C41.8492 21.9291 41.3732 22.1262 41.0222 22.4772C40.6713 22.8281 40.4741 23.3041 40.4741 23.8004C40.4741 24.1705 40.5839 24.5323 40.7895 24.8401C40.9951 25.1478 41.2874 25.3877 41.6293 25.5293C41.9713 25.671 42.3475 25.708 42.7106 25.6358C43.0736 25.5636 43.407 25.3854 43.6687 25.1237C43.9304 24.862 44.1087 24.5285 44.1809 24.1655C44.2531 23.8025 44.216 23.4262 44.0744 23.0843C43.9327 22.7423 43.6929 22.4501 43.3851 22.2445Z" stroke="#E93CAC" className={styles.dot1}></path>
        <path d="M43.3851 0.829416C43.0774 0.62379 42.7156 0.514038 42.3455 0.514038C41.8492 0.514038 41.3732 0.711197 41.0222 1.06214C40.6713 1.41309 40.4741 1.88907 40.4741 2.38538C40.4741 2.7555 40.5839 3.11731 40.7895 3.42505C40.9951 3.73279 41.2874 3.97264 41.6293 4.11428C41.9713 4.25592 42.3475 4.29298 42.7106 4.22077C43.0736 4.14857 43.407 3.97034 43.6687 3.70863C43.9304 3.44691 44.1087 3.11347 44.1809 2.75046C44.2531 2.38746 44.216 2.01119 44.0744 1.66925C43.9327 1.32731 43.6929 1.03504 43.3851 0.829416Z" stroke="#E93CAC" className={styles.dot2}></path><path d="M3.41102 22.2445C3.10328 22.0388 2.74147 21.9291 2.37135 21.9291C1.87504 21.9291 1.39906 22.1262 1.04811 22.4772C0.697161 22.8281 0.5 23.3041 0.5 23.8004C0.5 24.1705 0.609753 24.5323 0.815381 24.8401C1.02101 25.1478 1.31328 25.3877 1.65522 25.5293C1.99716 25.671 2.37343 25.708 2.73644 25.6358C3.09944 25.5636 3.43289 25.3854 3.6946 25.1237C3.95631 24.862 4.13454 24.5285 4.20675 24.1655C4.27896 23.8025 4.2419 23.4262 4.10026 23.0843C3.95862 22.7423 3.71876 22.4501 3.41102 22.2445Z" stroke="#E93CAC" className={styles.dot3}></path><path d="M3.41102 0.826486C3.10328 0.62086 2.74147 0.511108 2.37135 0.511108C1.87504 0.511108 1.39906 0.708267 1.04811 1.05921C0.697161 1.41016 0.5 1.88614 0.5 2.38245C0.5 2.75257 0.609753 3.11438 0.815381 3.42212C1.02101 3.72986 1.31328 3.96971 1.65522 4.11135C1.99716 4.25299 2.37343 4.29005 2.73644 4.21784C3.09944 4.14564 3.43289 3.96741 3.6946 3.7057C3.95631 3.44398 4.13454 3.11054 4.20675 2.74753C4.27896 2.38453 4.2419 2.00826 4.10026 1.66632C3.95862 1.32438 3.71876 1.03211 3.41102 0.826486Z" stroke="#E93CAC" className={styles.dot4}></path><path d="M21.1444 2.32251H3.72968" stroke="#E93CAC" strokeMiterlimit="10" className={styles.straightLine1}></path><path d="M23.9134 2.44885H40.9096" stroke="#E93CAC" strokeMiterlimit="10" className={styles.straightLine2}></path><path d="M24.4153 1V0.5H23.9153H21.1443H20.6443V1V3.77097V4.27097H21.1443H23.9153H24.4153V3.77097V1Z" stroke="#E93CAC" className={styles.square}></path><path d="M24.5374 2.56421C34.5676 3.64621 42.3762 12.1401 42.3762 22.4568" stroke="#E93CAC" strokeMiterlimit="10" className={styles.curve1}></path><path d="M2.35741 22.4572C2.35741 12.0972 10.2311 3.57602 20.3216 2.55151" stroke="#E93CAC" strokeMiterlimit="10" className={styles.curve2}></path>
      </svg> */}

      <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 125" fill="none"><g id="Symbol"><path className={styles.middle} id="Vector" d="M87.2363 15.5268L71.8449 31.0718C69.1487 28.352 65.9479 26.1944 62.4252 24.7224C58.9025 23.2504 55.1269 22.4928 51.314 22.4928C47.501 22.4928 43.7253 23.2504 40.2026 24.7224C36.6799 26.1944 33.4791 28.352 30.7829 31.0718C28.0868 33.7917 25.9481 37.0207 24.4889 40.5743C23.0298 44.128 22.2787 47.9369 22.2787 51.7833C22.2787 55.6298 23.0298 59.4386 24.4889 62.9923C25.9481 66.546 28.0868 69.775 30.7829 72.4948L15.3915 88.0217C6.15157 78.351 1.04306 65.4083 1.16472 51.9773C1.28638 38.5463 6.62849 25.6999 16.0421 16.2011C25.4556 6.7024 38.1887 1.31007 51.5026 1.18396C64.8165 1.05786 77.6476 6.208 87.2363 15.5268Z" fill="#B6B6B6" /><path className={styles.outer} id="Vector_2" d="M123.89 51.7743C123.894 66.2559 119.64 80.4133 111.667 92.4556C103.693 104.498 92.3584 113.884 79.096 119.426C65.8336 124.969 51.2396 126.419 37.1602 123.592C23.0809 120.766 10.1488 113.791 0 103.549L15.3915 88.0217C24.9802 97.3405 37.8114 102.491 51.1253 102.365C64.4392 102.238 77.1722 96.8461 86.5858 87.3473C95.9993 77.8486 101.341 65.0022 101.463 51.5712C101.585 38.1402 96.4762 25.1975 87.2363 15.5268L102.646 0C109.392 6.79381 114.741 14.8648 118.387 23.7496C122.033 32.6345 123.903 42.1583 123.89 51.7743Z" fill="white" /><path className={styles.inner} id="Vector_3" d="M80.3536 51.7742C80.3498 57.5661 78.6447 63.227 75.4537 68.042C72.2627 72.8569 67.7288 76.6099 62.4247 78.8271C57.1206 81.0442 51.2841 81.626 45.6524 80.499C40.0207 79.3719 34.8464 76.5866 30.783 72.4948L51.323 51.7742L71.8449 31.0718C74.5466 33.7859 76.6893 37.0124 78.1496 40.5654C79.6099 44.1185 80.359 47.9279 80.3536 51.7742Z" fill="#E7E7E7" /></g></svg>
    
    </section>
  )
}
