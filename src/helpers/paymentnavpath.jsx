const data =
  JSON.parse(sessionStorage.getItem("catalogs")) === null
    ? []
    : JSON.parse(sessionStorage.getItem("catalogs"));

console.log(data);

const nameToPathConverter = (string) => {
  if (string.includes("&")) {
    return string
      .toLowerCase()
      .replace(/\s+&\s+/g, "_")
      .replace("&", "")
      .replace(/\s+/g, "");
  } else if (string.includes(" ")) {
    return string.split(" ").join("_").toLowerCase();
  } else if (string.includes("/")) {
    return string.split("/").join("_").toLowerCase();
  } else {
    return string?.toLowerCase();
  }
};

const neededData1 = data?.filter((obj) => obj.Merchants.length !== 0);

const neededData = neededData1?.filter(
  (obj) => obj.Name !== "Unified Money Transfer"
);

console.log(neededData);

const billerService = neededData?.map((n) => {
  return nameToPathConverter(n?.Name);
});

// console.log(billerService);

// const billerdata = neededData?.Merchants?.map((n) => {
//   return n?.Name;
// });
// console.log(billerdata);
const navigation = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.131 0H8.8645C7.67592 0 6.70313 0.971886 6.70313 2.16137V29.8377C6.70312 31.0272 7.67592 32 8.8645 32H23.131C24.3196 32 25.2924 31.029 25.2924 29.8386V2.16137C25.2924 0.971886 24.3196 0 23.131 0ZM13.7157 1.55794H18.2798C18.4243 1.55794 18.5413 1.67497 18.5413 1.82034C18.5413 1.9648 18.4243 2.08183 18.2798 2.08183H13.7157C13.5712 2.08183 13.4542 1.9648 13.4542 1.82034C13.4542 1.67497 13.5712 1.55794 13.7157 1.55794ZM15.9978 30.9193C15.4007 30.9193 14.9171 30.4357 14.9171 29.8377C14.9171 29.2398 15.4007 28.757 15.9978 28.757C16.5948 28.757 17.0784 29.2398 17.0784 29.8377C17.0784 30.4357 16.5948 30.9193 15.9978 30.9193ZM23.7884 28H8.20712V3.42766H23.7884V28Z"
          fill="white"
        />
      </svg>
    ),
    name: "Airtime Recharge",
    id: "pnav1",
    path: `/payment/airtime_recharge`,
  },
  {
    icon: (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2171_23364)">
          <path
            d="M18.4968 24.6445H0.5V27.428C0.502102 29.1044 1.80132 30.4931 3.47415 30.6069C3.50988 30.6018 3.54592 30.5988 3.58196 30.5985H19.766C18.9491 29.7135 18.4959 28.553 18.4968 27.3484V24.6445Z"
            fill="#D0D5DD"
          />
          <path
            d="M5.5408 3.39538L5.40625 23.1062H19.2655C19.6901 23.1062 20.0343 23.4507 20.0343 23.875V27.348C20.0343 29.0214 21.3693 30.4486 23.0079 30.5982H23.27C23.3121 30.5985 23.3541 30.6021 23.3956 30.6093C25.1537 30.5495 26.5481 29.107 26.5484 27.348V3.64044C26.5481 2.82926 26.8169 2.0409 27.3121 1.3985H7.57281C6.4607 1.39009 5.55191 2.28356 5.5408 3.39538ZM8.83299 6.65243H16.1147C16.5394 6.65243 16.8836 6.9966 16.8836 7.42127C16.8836 7.84593 16.5394 8.19011 16.1147 8.19011H8.83299C8.40833 8.19011 8.06415 7.84593 8.06415 7.42127C8.06415 6.9966 8.40833 6.65243 8.83299 6.65243ZM8.83299 12.1496H22.4162C22.8409 12.1496 23.185 12.4938 23.185 12.9185C23.185 13.3431 22.8409 13.6873 22.4162 13.6873H8.83299C8.40833 13.6873 8.06415 13.3431 8.06415 12.9185C8.06415 12.4938 8.40833 12.1496 8.83299 12.1496ZM8.83299 17.6468H22.4162C22.8409 17.6468 23.185 17.991 23.185 18.4157C23.185 18.8403 22.8409 19.1845 22.4162 19.1845H8.83299C8.40833 19.1845 8.06415 18.8403 8.06415 18.4157C8.06415 17.991 8.40833 17.6468 8.83299 17.6468Z"
            fill="#D0D5DD"
          />
          <path
            d="M30.2927 1.4688C29.0842 1.4607 28.097 2.43196 28.0859 3.64047V14.2847H32.4996V3.64047C32.4884 2.43196 31.5013 1.4604 30.2927 1.4688Z"
            fill="#D0D5DD"
          />
        </g>
        <defs>
          <clipPath id="clip0_2171_23364">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Bills Payment",
    id: "pnav9",
    path: "/payment/bills_payment",
  },
  {
    icon: (
      <svg
        width="24"
        height="33"
        viewBox="0 0 24 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.00671 18.1987C3.79232 19.159 5.79144 22.7171 6.21609 24.499H17.649C18.0736 22.7188 20.0703 19.1607 20.8559 18.2011C22.1984 16.5635 23.0434 14.5755 23.2911 12.4725C23.5354 10.3735 23.1699 8.24854 22.2384 6.35178C21.2981 4.44093 19.836 2.83531 18.0213 1.72065C16.1907 0.594658 14.0834 -0.00100845 11.9342 1.28159e-06C9.78069 1.28159e-06 7.67051 0.596144 5.84697 1.71902C4.03182 2.83326 2.56918 4.43859 1.62824 6.34933C0.696211 8.24536 0.329919 10.3697 0.573146 12.4684C0.81732 14.5647 1.6609 16.5515 3.00671 18.1987ZM12.7492 6.53307L7.84935 13.8828H11.1159V18.7826L16.0157 11.4329H12.7492V6.53307Z"
          fill="white"
        />
        <path
          d="M6.21875 26.9494C6.21875 26.7329 6.30479 26.5251 6.45794 26.372C6.61108 26.2188 6.8188 26.1328 7.03538 26.1328H16.835C17.0516 26.1328 17.2593 26.2188 17.4124 26.372C17.5656 26.5251 17.6516 26.7329 17.6516 26.9494C17.6516 27.166 17.5656 27.3737 17.4124 27.5269C17.2593 27.68 17.0516 27.7661 16.835 27.7661H7.03538C6.8188 27.7661 6.61108 27.68 6.45794 27.5269C6.30479 27.3737 6.21875 27.166 6.21875 26.9494ZM17.6516 29.3993H6.21875V31.0326C6.21875 31.4658 6.39083 31.8812 6.69712 32.1875C7.00342 32.4938 7.41885 32.6659 7.85202 32.6659H16.0184C16.4515 32.6659 16.867 32.4938 17.1733 32.1875C17.4795 31.8812 17.6516 31.4658 17.6516 31.0326V29.3993Z"
          fill="white"
        />
      </svg>
    ),
    name: "Electricity",
    id: "pnav2",
    path: "/payment/electricity",
  },
  {
    icon: (
      <svg
        width="32"
        height="26"
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 0H0V23.1111H10.1818V26H21.8182V23.1111H31.9855L32 0ZM29.0909 20.2222H2.90909V2.88889H29.0909V20.2222Z"
          fill="white"
        />
      </svg>
    ),
    name: "Cable Tv",
    id: "pnav3",
    path: "/payment/cable_tv",
  },
  {
    icon: (
      <svg
        width="25"
        height="32"
        viewBox="0 0 25 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0701 30.9378C22.9032 31.0553 22.7041 31.1181 22.5001 31.1178C22.2588 31.1174 22.0253 31.0325 21.8401 30.8778L12.5001 22.7778L10.9701 21.4578L7.84005 18.7378L6.85005 17.8778C6.64849 17.7054 6.52366 17.46 6.50303 17.1956C6.4824 16.9312 6.56766 16.6694 6.74005 16.4678C6.91244 16.2663 7.15785 16.1414 7.42227 16.1208C7.6867 16.1002 7.94849 16.1854 8.15005 16.3578L8.59005 16.7378L12.5001 20.1278L14.0301 21.4578L20.1801 26.7878L17.1601 18.7378L16.4101 16.7378L14.1901 10.8278C14.8372 10.5941 15.4294 10.2299 15.9301 9.75781L23.4401 29.7678C23.5184 29.9761 23.5246 30.2047 23.4575 30.4168C23.3904 30.629 23.2539 30.8125 23.0701 30.9378Z"
          fill="white"
        />
        <path
          d="M18.1511 17.8778L17.1611 18.7378L14.0311 21.4578L12.5011 22.7778L3.16108 30.8778C2.97587 31.0325 2.74236 31.1174 2.50108 31.1178C2.33973 31.1172 2.18091 31.0777 2.03803 31.0028C1.89516 30.9278 1.77244 30.8195 1.68024 30.6871C1.58804 30.5547 1.52908 30.402 1.50834 30.242C1.4876 30.082 1.50569 29.9194 1.56108 29.7678L9.07108 9.75781C9.5717 10.2299 10.1639 10.5941 10.8111 10.8278L8.59108 16.7378L7.84108 18.7378L4.82108 26.7878L10.9711 21.4578L12.5011 20.1278L16.4111 16.7378L16.8511 16.3578C16.9509 16.2725 17.0665 16.2076 17.1914 16.1669C17.3163 16.1263 17.4479 16.1106 17.5789 16.1208C17.7098 16.131 17.8374 16.1669 17.9545 16.2265C18.0715 16.286 18.1757 16.368 18.2611 16.4678C18.3464 16.5676 18.4113 16.6833 18.452 16.8081C18.4927 16.933 18.5083 17.0647 18.4981 17.1956C18.4879 17.3265 18.452 17.4542 18.3925 17.5712C18.3329 17.6883 18.2509 17.7925 18.1511 17.8778Z"
          fill="white"
        />
        <path
          d="M12.5 9.11719C14.1569 9.11719 15.5 7.77404 15.5 6.11719C15.5 4.46033 14.1569 3.11719 12.5 3.11719C10.8431 3.11719 9.5 4.46033 9.5 6.11719C9.5 7.77404 10.8431 9.11719 12.5 9.11719Z"
          fill="white"
        />
        <path
          d="M17.5 18.1172H7.5C7.23478 18.1172 6.98043 18.0118 6.79289 17.8243C6.60536 17.6368 6.5 17.3824 6.5 17.1172C6.5 16.852 6.60536 16.5976 6.79289 16.4101C6.98043 16.2225 7.23478 16.1172 7.5 16.1172H17.5C17.7652 16.1172 18.0196 16.2225 18.2071 16.4101C18.3947 16.5976 18.5 16.852 18.5 17.1172C18.5 17.3824 18.3947 17.6368 18.2071 17.8243C18.0196 18.0118 17.7652 18.1172 17.5 18.1172Z"
          fill="white"
        />
        <path
          d="M22.132 12.1584C21.9559 12.1583 21.7829 12.1116 21.6306 12.0232C21.4783 11.9347 21.352 11.8076 21.2646 11.6547C21.1772 11.5018 21.1318 11.3285 21.1328 11.1523C21.1339 10.9762 21.1815 10.8035 21.2707 10.6516C22.0777 9.27717 22.5031 7.71223 22.5031 6.11841C22.5031 4.52459 22.0777 2.95965 21.2707 1.58521C21.1363 1.35651 21.0983 1.08378 21.1649 0.827016C21.2316 0.570251 21.3975 0.350482 21.6262 0.216057C21.8549 0.0816319 22.1276 0.0435617 22.3844 0.110222C22.6412 0.176881 22.8609 0.342811 22.9954 0.571507C23.9826 2.25334 24.5031 4.16821 24.5031 6.11841C24.5031 8.06862 23.9826 9.98348 22.9954 11.6653C22.9069 11.8156 22.7806 11.9401 22.6292 12.0266C22.4778 12.1131 22.3064 12.1585 22.132 12.1584Z"
          fill="white"
        />
        <path
          d="M18.6841 10.1396C18.5078 10.1393 18.3347 10.0925 18.1824 10.0038C18.03 9.91508 17.9039 9.7877 17.8166 9.63453C17.7294 9.48136 17.6842 9.30785 17.6856 9.13158C17.687 8.95531 17.735 8.78254 17.8247 8.63079C18.2704 7.86915 18.5054 7.00258 18.5054 6.12009C18.5054 5.2376 18.2704 4.37102 17.8247 3.60939C17.7537 3.49629 17.7062 3.37014 17.6848 3.23837C17.6634 3.1066 17.6686 2.97188 17.7001 2.84216C17.7316 2.71243 17.7888 2.59033 17.8682 2.48304C17.9477 2.37576 18.0478 2.28547 18.1627 2.21749C18.2775 2.14951 18.4049 2.10522 18.5372 2.08724C18.6694 2.06926 18.804 2.07794 18.9328 2.11278C19.0617 2.14762 19.1823 2.2079 19.2875 2.29008C19.3927 2.37227 19.4804 2.47468 19.5454 2.59129C20.1739 3.66088 20.5054 4.87897 20.5054 6.11959C20.5054 7.36021 20.1739 8.5783 19.5454 9.64789C19.4572 9.79786 19.3313 9.92214 19.1802 10.0084C19.0291 10.0947 18.858 10.1399 18.6841 10.1396Z"
          fill="white"
        />
        <path
          d="M2.8711 12.1584C2.69672 12.1585 2.52534 12.1131 2.37392 12.0266C2.2225 11.9401 2.09629 11.8156 2.0078 11.6653C1.02051 9.98348 0.5 8.06861 0.5 6.11841C0.5 4.1682 1.02051 2.25334 2.0078 0.571504C2.14222 0.342808 2.36199 0.176879 2.61876 0.110219C2.74589 0.0772123 2.87829 0.0695705 3.00838 0.0877297C3.13847 0.105889 3.26371 0.149494 3.37695 0.216054C3.49019 0.282615 3.58921 0.370828 3.66836 0.475656C3.7475 0.580485 3.80523 0.699876 3.83823 0.827013C3.87124 0.954151 3.87888 1.08654 3.86072 1.21664C3.84256 1.34673 3.79896 1.47197 3.7324 1.58521C2.92545 2.95965 2.50001 4.52459 2.50001 6.11841C2.50001 7.71223 2.92545 9.27717 3.7324 10.6516C3.82167 10.8035 3.86924 10.9762 3.87032 11.1523C3.87139 11.3285 3.82592 11.5017 3.73851 11.6547C3.6511 11.8076 3.52485 11.9347 3.37253 12.0232C3.22022 12.1116 3.04724 12.1583 2.8711 12.1584Z"
          fill="white"
        />
        <path
          d="M6.3213 10.1354C6.14737 10.1358 5.97637 10.0906 5.82528 10.0045C5.67419 9.91829 5.54827 9.7941 5.46 9.64423C4.83143 8.57464 4.5 7.35655 4.5 6.11593C4.5 4.87531 4.83143 3.65722 5.46 2.58763C5.52462 2.47038 5.61213 2.3673 5.71733 2.2845C5.82253 2.20171 5.94328 2.14087 6.07243 2.10562C6.20158 2.07036 6.33649 2.06139 6.46917 2.07925C6.60185 2.0971 6.7296 2.14142 6.84483 2.20957C6.96006 2.27771 7.06044 2.36831 7.14001 2.47597C7.21958 2.58363 7.27671 2.70618 7.30804 2.83634C7.33936 2.9665 7.34423 3.10162 7.32236 3.2337C7.30049 3.36578 7.25231 3.49212 7.1807 3.60523C6.73495 4.36686 6.5 5.23344 6.5 6.11593C6.5 6.99842 6.73495 7.865 7.1807 8.62663C7.27039 8.77838 7.31837 8.95115 7.31979 9.12742C7.3212 9.30369 7.27599 9.4772 7.18875 9.63037C7.1015 9.78354 6.97532 9.91093 6.82299 9.99962C6.67065 10.0883 6.49758 10.1352 6.3213 10.1354Z"
          fill="white"
        />
      </svg>
    ),
    name: "Internet Services",
    id: "pnav4",
    path: "/payment/internet_services",
  },
  {
    icon: (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_663_13496)">
          <path
            d="M7.04688 0.125C5.72656 0.4375 4.5625 1.48438 4.07031 2.78906C3.90625 3.23438 3.89844 3.34375 3.85938 7.49219L3.82031 11.7422L3.5 11.8359C2.58594 12.1094 1.52344 12.9453 1.0625 13.7734C0.59375 14.6016 0.539062 14.8906 0.539062 16.5625C0.539062 18.0391 0.546875 18.1016 0.742188 18.5234C1.1875 19.4688 1.94531 19.9297 3.14062 19.9844L3.85938 20.0156V26.5547C3.85938 33.75 3.84375 33.5391 4.34375 34.4688C4.8125 35.3516 5.85938 36.2109 6.8125 36.4922L7.14062 36.5859V37.0312C7.14062 38.3594 7.67969 39.3438 8.65625 39.7812C9.04688 39.9531 9.11719 39.9609 11.3203 39.9609H13.5859L14.0234 39.7578C14.9688 39.3125 15.4297 38.5547 15.4844 37.3594L15.5156 36.6406H20.5H25.4844L25.5156 37.3672C25.5703 38.5547 26.0312 39.3125 26.9766 39.7578L27.4141 39.9609H29.6797C31.8828 39.9609 31.9531 39.9531 32.3438 39.7812C33.3203 39.3438 33.8594 38.3594 33.8594 37.0312V36.5859L34.1953 36.4922C35.1406 36.2109 36.1875 35.3516 36.6562 34.4688C37.1562 33.5391 37.1406 33.75 37.1406 26.5547V20.0156L37.8672 19.9844C39.0547 19.9297 39.8125 19.4688 40.2578 18.5234C40.4531 18.1016 40.4609 18.0391 40.4609 16.5625C40.4609 14.8906 40.4062 14.6016 39.9375 13.7734C39.4766 12.9453 38.4141 12.1094 37.5 11.8359L37.1797 11.7422L37.1406 7.49219C37.1016 3.34375 37.0938 3.23438 36.9297 2.78906C36.4297 1.46875 35.2656 0.4375 33.9219 0.117188C33.2109 -0.046875 7.73438 -0.046875 7.04688 0.125ZM30.7344 3.58594C31.2109 3.83594 31.6484 4.25781 31.8906 4.72656C32.0703 5.0625 32.1016 5.21094 32.1016 5.82031C32.1016 6.64844 31.9453 7.05469 31.4141 7.57812C31.0156 7.98438 30.6641 8.16406 30.0703 8.27344C29.4297 8.39062 11.5703 8.39062 10.9297 8.27344C10.3359 8.16406 9.98438 7.98438 9.58594 7.57812C9.05469 7.05469 8.89844 6.64844 8.89844 5.82031C8.89844 5.23438 8.92969 5.05469 9.08594 4.76562C9.41406 4.13281 10 3.63281 10.6562 3.42969C10.7656 3.39844 15.25 3.375 20.6172 3.38281L30.3828 3.39844L30.7344 3.58594ZM32.3438 10.2188C32.7969 10.4297 33.3047 10.9141 33.5391 11.375C33.8438 11.9688 33.8672 12.3984 33.8438 16.9766L33.8203 21.3672L33.5625 21.8906C33.2734 22.4844 32.9219 22.8281 32.2969 23.1172L31.8672 23.3203H20.5H9.13281L8.60938 23.0625C8.01562 22.7734 7.67188 22.4219 7.38281 21.7969L7.17969 21.3672L7.15625 16.9766C7.13281 12.3984 7.15625 11.9609 7.46094 11.375C7.65625 10.9844 8.10938 10.5 8.42969 10.3281C9.05469 10 8.77344 10.0078 20.6172 10.0234L31.9453 10.0391L32.3438 10.2188ZM12.3359 26.9141C13.3906 27.375 13.9766 28.4766 13.7656 29.6094C13.6641 30.1641 13.4766 30.5156 13.0781 30.9141C12.5547 31.4453 12.1484 31.6016 11.3203 31.6016C10.7344 31.6016 10.5547 31.5703 10.2656 31.4141C9.78906 31.1641 9.35938 30.7422 9.10938 30.2734C8.92969 29.9375 8.89844 29.7891 8.89844 29.1797C8.89844 28.3516 9.05469 27.9453 9.58594 27.4219C9.97656 27.0234 10.2578 26.875 10.8125 26.75C11.3516 26.6328 11.8281 26.6875 12.3359 26.9141ZM30.0703 26.7266C30.6641 26.8359 31.0156 27.0156 31.4141 27.4219C31.9453 27.9453 32.1016 28.3516 32.1016 29.1797C32.1016 29.7891 32.0703 29.9375 31.8906 30.2734C31.6406 30.7422 31.2109 31.1641 30.7344 31.4141C30.2266 31.6797 29.1406 31.6797 28.6094 31.4219C28.1797 31.2109 27.6562 30.7109 27.4531 30.3125C26.7031 28.8438 27.625 26.9922 29.2422 26.7188C29.4375 26.6875 29.6016 26.6562 29.6094 26.6484C29.6094 26.6484 29.8203 26.6797 30.0703 26.7266Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_663_13496">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Transport & Toll Payments",
    id: "pnav5",
    path: "/payment/transport_tollpayments",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.6818 7.27273C28.6818 11.4182 22.6227 14.5455 14.5909 14.5455C6.55909 14.5455 0.5 11.4182 0.5 7.27273C0.5 3.12727 6.55909 0 14.5909 0C22.6227 0 28.6818 3.12727 28.6818 7.27273ZM17.4091 29.0909C11.4205 29.0909 6.30545 27.4909 3.31818 24.8C3.40273 28.9164 9.41955 32 17.4091 32C25.3986 32 31.3732 28.9309 31.5 24.8582C28.555 27.4909 23.5668 29.0909 17.4091 29.0909ZM14.5909 23.2727C10.9655 23.3512 7.36319 22.658 4.00864 21.2364C5.81227 24.1745 10.9695 26.1818 17.4091 26.1818C25.4409 26.1818 31.5 23.0545 31.5 18.9091C31.4885 18.0096 31.208 17.1358 30.6968 16.4073C28.5973 20.5673 22.5241 23.2727 14.5909 23.2727ZM16 17.4545H14.5909H13.1818C7.65818 17.2364 3.16318 15.68 0.5 13.2509C0.626818 17.2945 6.64364 20.3636 14.5909 20.3636C22.5382 20.3636 28.555 17.2945 28.6818 13.2218C25.9623 15.6509 21.4673 17.2073 16 17.4545Z"
          fill="white"
        />
      </svg>
    ),
    name: "Collections & Levies",
    id: "pnav6",
    path: "/payment/collections_levies",
  },
  {
    icon: (
      <svg
        width="33"
        height="25"
        viewBox="0 0 33 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.26 1.15911C29.2793 0.456538 28.5576 -0.127987 27.8465 0.024597L17.0893 2.07043V20.8868L29.26 18.5722C29.2647 17.6203 29.2541 1.61799 29.26 1.15911ZM26.2232 14.4817L20.3543 15.5976C20.0428 15.6595 19.7234 15.4594 19.6621 15.149C19.5992 14.8404 19.8071 14.5409 20.1265 14.4806L25.9954 13.3647C26.3144 13.302 26.6247 13.5043 26.6876 13.8133C26.7504 14.1219 26.5422 14.4213 26.2232 14.4817ZM26.2232 10.1687L20.3543 11.2847C20.0428 11.3465 19.7234 11.1465 19.6621 10.836C19.5992 10.5278 19.8071 10.228 20.1265 10.1676L25.9954 9.0517C26.3144 8.99021 26.6247 9.19138 26.6876 9.50034C26.7504 9.80854 26.5422 10.108 26.2232 10.1687ZM26.2232 5.85579L20.3543 6.9717C20.0428 7.03357 19.7234 6.83354 19.6621 6.52306C19.5992 6.21486 19.8071 5.91501 20.1265 5.85466L25.9954 4.73875C26.3144 4.67612 26.6247 4.87842 26.6876 5.18739C26.7504 5.49559 26.5422 5.79544 26.2232 5.85579ZM3.74039 18.5722L15.9107 20.8868V2.07043L5.1535 0.024597C4.44243 -0.128746 3.72154 0.457297 3.74 1.15911C3.74157 1.68214 3.73843 17.5561 3.74039 18.5722ZM6.34582 5.18739C6.40829 4.87842 6.71746 4.6765 7.03804 4.73875L12.9065 5.85466C13.2255 5.91539 13.4337 6.21486 13.3709 6.52306C13.3096 6.83354 12.9902 7.03357 12.6787 6.9717L6.81018 5.85579C6.49079 5.79506 6.28296 5.49559 6.34582 5.18739ZM6.34582 9.50034C6.40829 9.19138 6.71746 8.99021 7.03804 9.0517L12.9065 10.1676C13.2255 10.2283 13.4337 10.5278 13.3709 10.836C13.3096 11.1465 12.9902 11.3465 12.6787 11.2847L6.81018 10.1687C6.49079 10.108 6.28296 9.80854 6.34582 9.50034ZM6.34582 13.8133C6.40829 13.5043 6.71746 13.3024 7.03804 13.3647L12.9065 14.4806C13.2255 14.5413 13.4337 14.8408 13.3709 15.149C13.3096 15.4594 12.9902 15.6595 12.6787 15.5976L6.81018 14.4817C6.49079 14.4213 6.28296 14.1219 6.34582 13.8133ZM33 3.05198V20.8257C33 21.3734 32.5997 21.8501 32.0489 21.9587L16.7353 24.9769C16.579 25.0077 16.4214 25.0077 16.2651 24.9769L0.9515 21.9587C0.400321 21.8501 0 21.3734 0 20.8257V3.05198L2.56182 3.43002V19.0406C2.56182 19.3128 2.761 19.5466 3.03718 19.5993L16.3861 22.1378C16.4611 22.1522 16.5389 22.1522 16.6139 22.1378L29.9632 19.5993C30.2394 19.5469 30.4386 19.3128 30.4386 19.0406V3.43002L33 3.05198Z"
          fill="white"
        />
      </svg>
    ),
    name: "Education",
    id: "pnav7",
    path: "/payment/education",
  },
  {
    icon: (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.4692 17.0544C32.4769 16.9931 32.4769 16.9311 32.4692 16.8697C32.4846 16.5773 32.5 16.3002 32.5 16.0078C32.5054 12.3603 31.2559 8.82215 28.9615 5.9876C28.9081 5.88675 28.8348 5.79774 28.7461 5.72594C27.05 3.69743 24.8774 2.12146 22.4231 1.13913L22.2538 1.07757C18.5524 -0.359189 14.4476 -0.359189 10.7462 1.07757L10.5769 1.13913C8.12257 2.12146 5.95003 3.69743 4.25386 5.72594C4.16517 5.79774 4.0919 5.88675 4.03847 5.9876C1.74409 8.82215 0.494641 12.3603 0.500017 16.0078C0.500017 16.3002 0.515402 16.5773 0.530787 16.8697C0.523064 16.9311 0.523064 16.9931 0.530787 17.0544C0.708218 19.6992 1.53809 22.2588 2.94617 24.5041C2.99349 24.5969 3.0502 24.6846 3.1154 24.7658C5.27781 28.0678 8.58047 30.457 12.3923 31.4767H12.4385C15.1012 32.1744 17.8987 32.1744 20.5615 31.4767H20.6077C24.4195 30.457 27.7222 28.0678 29.8846 24.7658C29.9498 24.6846 30.0065 24.5969 30.0538 24.5041C31.4619 22.2588 32.2918 19.6992 32.4692 17.0544ZM7.34616 14.3301L9.37693 14.9919L11.3308 21.0256L10.0846 22.7495H4.76155C3.82136 21.131 3.23414 19.3317 3.03848 17.47L7.34616 14.3301ZM25.6538 14.3301L29.9615 17.47C29.7659 19.3317 29.1786 21.131 28.2384 22.7495H22.9154L21.6692 21.0256L23.6231 14.9919L25.6538 14.3301ZM26.5308 6.92651L24.8846 11.9905L22.8538 12.6523L17.7308 8.91208V6.78799L22.0385 3.64802C23.7488 4.41418 25.2792 5.53111 26.5308 6.92651ZM10.9615 3.64802L15.2692 6.78799V8.91208L10.1462 12.6523L8.11539 11.9905L6.46924 6.92651C7.72077 5.53111 9.25123 4.41418 10.9615 3.64802ZM13.7308 29.2603L12.0846 24.1963L13.3308 22.4724H19.6692L20.9154 24.1963L19.2692 29.2603C17.4437 29.6502 15.5563 29.6502 13.7308 29.2603Z"
          fill="white"
        />
      </svg>
    ),
    name: "Betting/Lottery",
    id: "pnav8",
    path: "/payment/betting_lottery",
  },
  {
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.862 6.31298 23.0798 6.77838 22.9732 7.22975C22.8667 7.68112 22.4638 8 22 8H1.99998C1.5362 8 1.13328 7.68112 1.02673 7.22975C0.920172 6.77838 1.13795 6.31298 1.55276 6.10557L11.5528 1.10557ZM6.23604 6H17.7639L12 3.11803L6.23604 6ZM5.99998 9C6.55226 9 6.99998 9.44772 6.99998 10V15C6.99998 15.5523 6.55226 16 5.99998 16C5.44769 16 4.99998 15.5523 4.99998 15V10C4.99998 9.44772 5.44769 9 5.99998 9ZM9.99998 9C10.5523 9 11 9.44772 11 10V15C11 15.5523 10.5523 16 9.99998 16C9.44769 16 8.99998 15.5523 8.99998 15V10C8.99998 9.44772 9.44769 9 9.99998 9ZM14 9C14.5523 9 15 9.44772 15 10V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V10C13 9.44772 13.4477 9 14 9ZM18 9C18.5523 9 19 9.44772 19 10V15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V10C17 9.44772 17.4477 9 18 9ZM2.99998 18C2.99998 17.4477 3.44769 17 3.99998 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H3.99998C3.44769 19 2.99998 18.5523 2.99998 18ZM0.999976 21C0.999976 20.4477 1.44769 20 1.99998 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H1.99998C1.44769 22 0.999976 21.5523 0.999976 21Z"
          fill="white"
        />
      </svg>
    ),
    name: "Telecomms",
    id: "pnav9",
    path: "/payment/telecomms",
  },
  {
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.862 6.31298 23.0798 6.77838 22.9732 7.22975C22.8667 7.68112 22.4638 8 22 8H1.99998C1.5362 8 1.13328 7.68112 1.02673 7.22975C0.920172 6.77838 1.13795 6.31298 1.55276 6.10557L11.5528 1.10557ZM6.23604 6H17.7639L12 3.11803L6.23604 6ZM5.99998 9C6.55226 9 6.99998 9.44772 6.99998 10V15C6.99998 15.5523 6.55226 16 5.99998 16C5.44769 16 4.99998 15.5523 4.99998 15V10C4.99998 9.44772 5.44769 9 5.99998 9ZM9.99998 9C10.5523 9 11 9.44772 11 10V15C11 15.5523 10.5523 16 9.99998 16C9.44769 16 8.99998 15.5523 8.99998 15V10C8.99998 9.44772 9.44769 9 9.99998 9ZM14 9C14.5523 9 15 9.44772 15 10V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V10C13 9.44772 13.4477 9 14 9ZM18 9C18.5523 9 19 9.44772 19 10V15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V10C17 9.44772 17.4477 9 18 9ZM2.99998 18C2.99998 17.4477 3.44769 17 3.99998 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H3.99998C3.44769 19 2.99998 18.5523 2.99998 18ZM0.999976 21C0.999976 20.4477 1.44769 20 1.99998 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H1.99998C1.44769 22 0.999976 21.5523 0.999976 21Z"
          fill="white"
        />
      </svg>
    ),
    name: "Insurance",
    id: "pnav10",
    path: "/payment/insurance",
  },
  {
    icon: (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.862 6.31298 23.0798 6.77838 22.9732 7.22975C22.8667 7.68112 22.4638 8 22 8H1.99998C1.5362 8 1.13328 7.68112 1.02673 7.22975C0.920172 6.77838 1.13795 6.31298 1.55276 6.10557L11.5528 1.10557ZM6.23604 6H17.7639L12 3.11803L6.23604 6ZM5.99998 9C6.55226 9 6.99998 9.44772 6.99998 10V15C6.99998 15.5523 6.55226 16 5.99998 16C5.44769 16 4.99998 15.5523 4.99998 15V10C4.99998 9.44772 5.44769 9 5.99998 9ZM9.99998 9C10.5523 9 11 9.44772 11 10V15C11 15.5523 10.5523 16 9.99998 16C9.44769 16 8.99998 15.5523 8.99998 15V10C8.99998 9.44772 9.44769 9 9.99998 9ZM14 9C14.5523 9 15 9.44772 15 10V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V10C13 9.44772 13.4477 9 14 9ZM18 9C18.5523 9 19 9.44772 19 10V15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V10C17 9.44772 17.4477 9 18 9ZM2.99998 18C2.99998 17.4477 3.44769 17 3.99998 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H3.99998C3.44769 19 2.99998 18.5523 2.99998 18ZM0.999976 21C0.999976 20.4477 1.44769 20 1.99998 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H1.99998C1.44769 22 0.999976 21.5523 0.999976 21Z"
          fill="white"
        />
      </svg>
    ),
    name: "Internet Services",
    id: "pnav11",
    path: "/payment/internet_services",
  },
];
export const unknownSvg = (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5528 1.10557C11.8343 0.964809 12.1657 0.964809 12.4472 1.10557L22.4472 6.10557C22.862 6.31298 23.0798 6.77838 22.9732 7.22975C22.8667 7.68112 22.4638 8 22 8H1.99998C1.5362 8 1.13328 7.68112 1.02673 7.22975C0.920172 6.77838 1.13795 6.31298 1.55276 6.10557L11.5528 1.10557ZM6.23604 6H17.7639L12 3.11803L6.23604 6ZM5.99998 9C6.55226 9 6.99998 9.44772 6.99998 10V15C6.99998 15.5523 6.55226 16 5.99998 16C5.44769 16 4.99998 15.5523 4.99998 15V10C4.99998 9.44772 5.44769 9 5.99998 9ZM9.99998 9C10.5523 9 11 9.44772 11 10V15C11 15.5523 10.5523 16 9.99998 16C9.44769 16 8.99998 15.5523 8.99998 15V10C8.99998 9.44772 9.44769 9 9.99998 9ZM14 9C14.5523 9 15 9.44772 15 10V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V10C13 9.44772 13.4477 9 14 9ZM18 9C18.5523 9 19 9.44772 19 10V15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V10C17 9.44772 17.4477 9 18 9ZM2.99998 18C2.99998 17.4477 3.44769 17 3.99998 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H3.99998C3.44769 19 2.99998 18.5523 2.99998 18ZM0.999976 21C0.999976 20.4477 1.44769 20 1.99998 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H1.99998C1.44769 22 0.999976 21.5523 0.999976 21Z"
      fill="white"
    />
  </svg>
);

// const data =
//   JSON.parse(sessionStorage.getItem("catalogs")) === null
//     ? []
//     : JSON.parse(sessionStorage.getItem("catalogs"));

// console.log(data);

// const neededData1 = data?.filter((obj) => obj.Merchants.length !== 0);

// const neededData = neededData1?.filter(
//   (obj) => obj.Name !== "Unified Money Transfer"
// );

// ///GET DATA AND FORMAT DATA INTO AN ARRAY THAT CARRIES RESPECTIVE ICON
// const formattedData = neededData
//   .filter((service) => navigation?.some((icon) => icon?.name === service?.Name))
//   .map((service) => {
//     const foundArr = navigation?.find((icon) => icon?.name === service?.Name);
//     // const neededArr = foundArr.filter((obj) => obj.Merchants.length === 0);
//     return { ...service, icon: foundArr?.icon, path: foundArr?.path };
//   });
// localStorage.setItem("formattedData", JSON.stringify(formattedData));

// const mappedData = neededData?.map((product) => {
//   const preparedMatch = navigation?.find(
//     (item) => item?.name === product?.Name
//   );
//   if (preparedMatch) {
//     return { ...product, icon: preparedMatch?.icon };
//   } else {
//     // return {
//     //   ...product,
//     //   icon: unknownSvg,
//     // };
//   }
// });
// console.log(neededData);

// const neededData1 = data?.filter((obj) => obj.Merchants.length !== 0);

// const neededData = neededData1?.filter(
//   (obj) => obj.Name !== "Unified Money Transfer"
// );

// ///GET DATA AND FORMAT DATA INTO AN ARRAY THAT CARRIES RESPECTIVE ICON

// console.log(neededData);

// const mymerchants = neededData.map((d) => {
//   console.log(d?.Merchants);
//   return d?.Merchants;
// });

// const BillerName = mymerchants.find(m = m.Name.toLowerCase() === window.
// const OnlyMerchnatsData = data?.map((d) => {
//   return {
//     data: d?.Merchants,
//   };
// });
// console.log(OnlyMerchnatsData);

// const filterOut = OnlyMerchnatsData.filter((d) => d?.data.length !== 0);

// const fliterName = filterOut?.map((d) => {
//   const testData = d.data.map((e) => {
//     return {
//       name: e.Name,
//       url: d.Name,
//     };
//   });

//   return testData;

//   // if (d?.data?.Name) {
//   //   console.log(d?.data?.Name);
//   // }
//   // return {
//   //   Name: d?.data?.Name,
//   // };
// });
// console.log(fliterName);

// const reMap = fliterName?.map((d) => {
//   return [];
// });

export default navigation;
