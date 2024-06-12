const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="flex flex-wrap justify-around pt-10 text-white">
          <div className="first-col">
            <h1 className="text-3xl font-bold">Tickety</h1>
            <p className="w-60">
              Tickety is an e booking app that aims to make organizing events
              easy and streamlined for organizers and event attendees.
            </p>
            <h1 className="follow">Follow us on</h1>
            <div className="flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0007 8.74998C10.2057 8.74998 8.75067 10.2051 8.75067 12C8.75067 13.7949 10.2057 15.25 12.0007 15.25C13.7956 15.25 15.2507 13.7949 15.2507 12C15.2507 10.2051 13.7956 8.74998 12.0007 8.74998Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.77021 3.08145C10.2183 2.69607 13.783 2.69607 17.2312 3.08145C19.1296 3.29363 20.6607 4.78941 20.8836 6.69446C21.2958 10.2195 21.2958 13.7805 20.8836 17.3055C20.6607 19.2106 19.1296 20.7063 17.2312 20.9185C13.783 21.3039 10.2183 21.3039 6.77021 20.9185C4.87181 20.7063 3.34062 19.2106 3.1178 17.3055C2.70552 13.7805 2.70552 10.2195 3.1178 6.69446C3.34062 4.7894 4.87181 3.29363 6.77021 3.08145ZM17.0007 5.99998C16.4484 5.99998 16.0007 6.4477 16.0007 6.99998C16.0007 7.55227 16.4484 7.99998 17.0007 7.99998C17.553 7.99998 18.0007 7.55227 18.0007 6.99998C18.0007 6.4477 17.553 5.99998 17.0007 5.99998ZM7.25067 12C7.25067 9.37663 9.37732 7.24998 12.0007 7.24998C14.624 7.24998 16.7507 9.37663 16.7507 12C16.7507 14.6233 14.624 16.75 12.0007 16.75C9.37732 16.75 7.25067 14.6233 7.25067 12Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2 2.875C12.9734 2.875 11.797 3.36228 10.9296 4.22963C10.0623 5.09699 9.575 6.27337 9.575 7.5V10.075H7.1C6.97574 10.075 6.875 10.1757 6.875 10.3V13.7C6.875 13.8243 6.97574 13.925 7.1 13.925H9.575V20.9C9.575 21.0243 9.67574 21.125 9.8 21.125H13.2C13.3243 21.125 13.425 21.0243 13.425 20.9V13.925H15.9219C16.0252 13.925 16.1152 13.8547 16.1402 13.7546L16.9902 10.3546C17.0257 10.2126 16.9183 10.075 16.7719 10.075H13.425V7.5C13.425 7.29446 13.5067 7.09733 13.652 6.95199C13.7973 6.80665 13.9945 6.725 14.2 6.725H16.8C16.9243 6.725 17.025 6.62426 17.025 6.5V3.1C17.025 2.97574 16.9243 2.875 16.8 2.875H14.2Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8088 6.22724C21.8667 6.14647 21.7812 6.04218 21.6885 6.07811C21.0297 6.33344 20.3413 6.50571 19.6391 6.5906C20.421 6.12348 21.0243 5.4124 21.3589 4.57053C21.393 4.48477 21.2993 4.40819 21.2186 4.4528C20.4918 4.85414 19.7081 5.14313 18.8939 5.30957C18.8599 5.31654 18.8247 5.30494 18.8008 5.27969C18.1898 4.63502 17.3856 4.20578 16.5089 4.05745C15.6137 3.90601 14.6936 4.05596 13.8928 4.48379C13.0921 4.91162 12.456 5.59313 12.0843 6.42144C11.7309 7.209 11.6355 8.08691 11.8098 8.93003C11.8234 8.99545 11.7721 9.05721 11.7055 9.05307C10.1214 8.95469 8.57372 8.53336 7.15771 7.81446C5.74529 7.09739 4.49456 6.09983 3.48169 4.8833C3.43674 4.82931 3.35154 4.83629 3.31879 4.89845C3.00362 5.49651 2.8386 6.16311 2.83905 6.8406C2.83777 7.51498 3.00327 8.17922 3.32081 8.77416C3.63834 9.36911 4.09807 9.87631 4.65905 10.2506C4.06413 10.2344 3.4808 10.0873 2.9503 9.82067C2.88193 9.78631 2.79993 9.83524 2.80348 9.91167C2.84485 10.8009 3.1713 11.6936 3.73637 12.3786C4.33769 13.1074 5.17231 13.6062 6.09905 13.7906C5.74231 13.8992 5.37193 13.9564 4.99905 13.9606C4.79611 13.9582 4.59357 13.9433 4.39259 13.9158C4.31807 13.9056 4.25722 13.9764 4.28331 14.0469C4.55972 14.7944 5.04805 15.4467 5.69013 15.9228C6.37658 16.4318 7.20463 16.7142 8.05905 16.7306C6.61625 17.8659 4.83493 18.4855 2.99905 18.4906C2.81041 18.4912 2.62185 18.4851 2.43373 18.4723C2.32772 18.4651 2.27897 18.6063 2.37035 18.6605C4.15911 19.7221 6.20364 20.2831 8.28905 20.2806C9.82874 20.2966 11.3562 20.0056 12.7822 19.4247C14.2081 18.8437 15.5041 17.9845 16.5943 16.8971C17.6844 15.8097 18.547 14.516 19.1316 13.0915C19.7162 11.667 20.0111 10.1403 19.9991 8.6006V8.12077C19.9991 8.0892 20.014 8.05951 20.0392 8.04048C20.7175 7.52834 21.314 6.91691 21.8088 6.22724Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.92051 7.40766L9.9208 7.40832C10.0521 7.70083 10.2695 8.23024 10.4429 8.65259L10.4463 8.66095C10.5148 8.82774 10.5766 8.97816 10.6247 9.09391C10.6488 9.15184 10.669 9.19974 10.6845 9.23596C10.6983 9.26807 10.7053 9.2835 10.7073 9.28795C10.7078 9.28911 10.708 9.28952 10.7079 9.28931C10.8081 9.48871 10.9102 9.81184 10.7302 10.1808L9.92051 7.40766ZM9.92051 7.40766C9.79974 7.13959 9.64305 6.92805 9.42222 6.80005M9.92051 7.40766L9.42222 6.80005M13.254 13.965C13.1997 13.938 13.1318 13.9087 13.0692 13.8817L13.0601 13.8778L13.059 13.8773C12.7137 13.7283 12.0551 13.4441 11.291 12.7639L11.2902 12.7631C10.6439 12.1904 10.181 11.4832 10.0001 11.1828C10.0873 11.0945 10.1807 10.9816 10.2562 10.8903L10.2652 10.8795C10.3145 10.8199 10.3589 10.7663 10.4006 10.7184L10.4007 10.7183C10.5584 10.5371 10.6307 10.3871 10.6991 10.2451L10.703 10.2371L10.703 10.2371L10.7302 10.1809L9.95436 11.1104L9.92563 11.127L9.92537 11.1272L9.52392 11.3599M13.254 13.965L13.2448 13.9834C13.2493 13.9782 13.2539 13.9728 13.2587 13.9673M13.254 13.965C13.254 13.965 13.2539 13.9649 13.2539 13.9649L13.2446 13.9836C13.2324 13.9978 13.2213 14.0108 13.2114 14.0223L13.2113 14.0223C13.1985 14.0372 13.1988 14.0333 13.2134 14.0241C13.2134 14.0241 13.2134 14.0241 13.2134 14.0241C13.2139 14.0237 13.2145 14.0234 13.2151 14.023C13.219 14.0207 13.2235 14.0181 13.2287 14.0155L13.2212 14.0307L13.2212 14.0308L13.0312 14.4126M13.254 13.965C13.2556 13.9658 13.2571 13.9665 13.2587 13.9673M13.2587 13.9673C13.2993 13.9872 13.3216 13.9942 13.3296 13.9963C13.3307 13.9966 13.3312 13.9967 13.3312 13.9967C13.3312 13.9967 13.3171 13.9938 13.2932 13.9966C13.2791 13.9983 13.2643 14.0016 13.2497 14.0068C13.2419 14.0095 13.2349 14.0125 13.2288 14.0155L13.2212 14.0308L13.2212 14.0308L13.0312 14.4126M13.2587 13.9673C13.4477 13.747 13.85 13.2736 13.9909 13.0662M13.0312 14.4126C13.2885 14.5406 13.4418 14.5209 13.5902 14.3486C13.7387 14.1762 14.2333 13.6001 14.4065 13.3441M13.0312 14.4126C12.9894 14.3918 12.9324 14.3672 12.862 14.3368C12.4997 14.1805 11.7829 13.8712 10.9586 13.1373C10.1918 12.4579 9.6724 11.6159 9.52392 11.3599M13.9909 13.0662C13.9901 13.0673 13.9894 13.0685 13.9886 13.0696L14.4065 13.3441M13.9909 13.0662C13.9914 13.0654 13.9919 13.0647 13.9924 13.064L14.4065 13.3441M13.9909 13.0662C14.1286 12.858 14.329 12.6876 14.6114 12.6544C14.8384 12.6276 15.0465 12.7053 15.1556 12.746L15.16 12.7477L15.1601 12.7477C15.3062 12.8022 15.7095 12.9933 16.0752 13.1693C16.4553 13.3523 16.8382 13.5404 16.969 13.6055L16.9691 13.6055C17.0162 13.629 17.0606 13.6502 17.1049 13.6715L16.8888 14.1224M14.4065 13.3441C14.5747 13.0881 14.7478 13.1275 14.9853 13.2161C15.2227 13.3047 16.4891 13.9251 16.7463 14.0531C16.7971 14.0784 16.8447 14.1012 16.8888 14.1224M9.52392 11.3599L9.92529 11.1271L9.92554 11.127L9.95433 11.1103L10.0236 10.3899C9.97698 10.4435 9.92839 10.5022 9.87998 10.5607C9.79484 10.6636 9.71025 10.7658 9.63774 10.838C9.50914 10.9659 9.37553 11.1039 9.52392 11.3599ZM16.8888 14.1224L17.1049 13.6715L17.1171 13.6774C17.1965 13.7154 17.2919 13.7611 17.3733 13.8108C17.4583 13.8627 17.5835 13.9509 17.671 14.0984M16.8888 14.1224C17.0677 14.2082 17.1894 14.2665 17.241 14.3535M17.671 14.0984L17.0926 15.5746C17.3053 14.9739 17.3053 14.4618 17.241 14.3535M17.671 14.0984C17.7506 14.2325 17.767 14.387 17.7733 14.4663C17.7816 14.5722 17.7798 14.6933 17.7688 14.822C17.7467 15.0806 17.6846 15.4006 17.5639 15.7415L17.5627 15.7449C17.3959 16.2053 16.9606 16.5749 16.5892 16.8141C16.2114 17.0574 15.751 17.2604 15.3982 17.2934M17.671 14.0984C17.671 14.0983 17.6709 14.0983 17.6709 14.0982L17.241 14.3535M17.241 14.3535L15.3982 17.2934M15.3982 17.2934C15.3609 17.2969 15.3228 17.3015 15.2756 17.3072L15.2155 16.8108L15.2756 17.3072C15.0357 17.3362 14.7353 17.3714 14.2297 17.2866C13.7426 17.2049 13.0761 17.0143 12.0764 16.6208C9.50628 15.61 7.83474 13.139 7.50095 12.6455L7.4953 12.6371L7.90942 12.357L7.4953 12.6371L7.46461 12.5919L7.45627 12.5799C7.45576 12.5791 7.45539 12.5786 7.45514 12.5783L7.45088 12.5726L7.45085 12.5725L7.4508 12.5725C7.37167 12.4666 7.08919 12.0886 6.82593 11.5683C6.56604 11.0548 6.30318 10.3608 6.30318 9.62685C6.30318 8.24151 6.9995 7.50184 7.2936 7.19102L7.2936 7.19102C7.31098 7.17265 7.32482 7.15802 7.33694 7.14495C7.33694 7.14495 7.33694 7.14495 7.33694 7.14494L15.3982 17.2934ZM9.42222 6.80005C9.21127 6.67777 9.0043 6.67264 8.90962 6.67029M9.42222 6.80005L8.90962 6.67029M8.90962 6.67029C8.90652 6.67022 8.90353 6.67014 8.90067 6.67007L8.90962 6.67029ZM7.51626 20.1816C7.40475 20.1212 7.27446 20.1054 7.15176 20.1375L2.71214 21.2971L3.89671 16.9973C3.93232 16.868 3.91453 16.7299 3.84734 16.6139C3.01903 15.1837 2.58339 13.562 2.58399 11.9115V11.9114C2.58399 6.72456 6.82972 2.5 12.0419 2.5C14.5761 2.5 16.9474 3.48164 18.7334 5.25928C20.5188 7.03641 21.4999 9.40027 21.4999 11.9163C21.4999 17.103 17.2542 21.3275 12.0419 21.3275H12.037C10.4534 21.3275 8.89782 20.93 7.51626 20.1816Z"
                  fill="white"
                  stroke="white"
                  strokeLinejoin="round"
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.98803 4.89055C10.3237 4.62958 13.6747 4.62958 17.0103 4.89055L19.251 5.06585C20.4991 5.16349 21.5201 6.09889 21.7264 7.33366C22.2426 10.4232 22.2426 13.5769 21.7264 16.6664C21.5201 17.9012 20.4991 18.8366 19.251 18.9342L17.0103 19.1095C13.6747 19.3705 10.3237 19.3705 6.98803 19.1095L4.74733 18.9342C3.49925 18.8366 2.47823 17.9012 2.27192 16.6664C1.75571 13.5769 1.75571 10.4232 2.27192 7.33366C2.47823 6.09889 3.49925 5.16349 4.74733 5.06585L6.98803 4.89055ZM9.99915 14.4702V9.52989C9.99915 9.2967 10.2535 9.15267 10.4535 9.27264L14.5704 11.7428C14.7646 11.8593 14.7646 12.1408 14.5704 12.2573L10.4535 14.7274C10.2535 14.8474 9.99915 14.7034 9.99915 14.4702Z"
                    fill="white"
                  />
                </svg>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Home</h1>
            <h4 className="item">Gallery</h4>
            <h4 className="item">Blog post</h4>
            <h4 className="item">About us</h4>
            <h4 className="item">FAQ</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Services</h1>
            <h4 className="item">Event Managment</h4>
            <h4 className="item">Event planning</h4>
            <h4 className="item">Analytics</h4>
            <h4 className="item">Feedback & surveys</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Events</h1>
            <h4 className="item">Corporate</h4>
            <h4 className="item">Entertainment</h4>
            <h4 className="item">Reunions</h4>
            <h4 className="item">Festival</h4>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Contact us</h1>
            <div className="flex align-center gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                  fill="white"
                />
                <path
                  d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                  fill="white"
                />
              </svg>
              <h4 className="item">+172 895 2342</h4>
            </div>
            <div className="flex align-center gap-4">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0.5H5C2 0.5 0 2 0 5.5V12.5C0 16 2 17.5 5 17.5H15C18 17.5 20 16 20 12.5V5.5C20 2 18 0.5 15 0.5ZM15.47 6.59L12.34 9.09C11.68 9.62 10.84 9.88 10 9.88C9.16 9.88 8.31 9.62 7.66 9.09L4.53 6.59C4.21 6.33 4.16 5.85 4.41 5.53C4.67 5.21 5.14 5.15 5.46 5.41L8.59 7.91C9.35 8.52 10.64 8.52 11.4 7.91L14.53 5.41C14.85 5.15 15.33 5.2 15.58 5.53C15.84 5.85 15.79 6.33 15.47 6.59Z"
                  fill="white"
                />
              </svg>

              <h4 className="item">info@tickety.com</h4>
            </div>
            <div className="flex align-center gap-4">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6191 7.45C16.5691 2.83 12.5391 0.75 8.99912 0.75C8.99912 0.75 8.99912 0.75 8.98912 0.75C5.45912 0.75 1.41912 2.82 0.369119 7.44C-0.800881 12.6 2.35912 16.97 5.21912 19.72C6.27912 20.74 7.63912 21.25 8.99912 21.25C10.3591 21.25 11.7191 20.74 12.7691 19.72C15.6291 16.97 18.7891 12.61 17.6191 7.45ZM8.99912 12.46C7.25912 12.46 5.84912 11.05 5.84912 9.31C5.84912 7.57 7.25912 6.16 8.99912 6.16C10.7391 6.16 12.1491 7.57 12.1491 9.31C12.1491 11.05 10.7391 12.46 8.99912 12.46Z"
                  fill="white"
                />
              </svg>
              <h4 className="item">213 St Louis Avenue, USA</h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
