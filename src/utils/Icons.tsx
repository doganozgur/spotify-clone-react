type Props = {
  name: string;
  size?: number;
};

const LogoIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.903 11.532a.695.695 0 01-.947.267 8.299 8.299 0 00-3.237-1.02 8.318 8.318 0 00-3.384.351.696.696 0 01-.423-1.326 9.668 9.668 0 013.948-.409 9.703 9.703 0 013.777 1.19.697.697 0 01.266.947zm.958-2.429a.695.695 0 01-.938.295 10.87 10.87 0 00-3.944-1.177 10.828 10.828 0 00-4.127.367.695.695 0 11-.386-1.336 12.264 12.264 0 014.653-.415c1.566.159 3.062.606 4.447 1.327.34.178.473.598.295.939zm.346-2.022a.69.69 0 01-.31-.073 13.454 13.454 0 00-4.659-1.345 13.423 13.423 0 00-4.843.383.695.695 0 11-.359-1.344 14.85 14.85 0 015.343-.423c1.802.183 3.532.682 5.139 1.484a.695.695 0 01-.311 1.318z"
        fill="currentColor"
      />
    </svg>
  );
};

const HomeIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
        fill="currentColor"
      />
    </svg>
  );
};

const SearchDark = ({ size }: any) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
    </svg>
  );
};

const SearchLight = ({ size }: any) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path
        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const CollectionIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
        fill="currentColor"
      />
    </svg>
  );
};

const PlusIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor" />
      <path fill="none" d="M0 0h16v16H0z" />
    </svg>
  );
};

const HeartIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
      />
    </svg>
  );
};

const HeartFilledIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
      />
    </svg>
  );
};

const DownloadIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
      />
    </svg>
  );
};

const DownDirIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M3 6l5 5.794L13 6z" />
    </svg>
  );
};

const ExternalIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
      />
    </svg>
  );
};

const PrevIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none" />
    </svg>
  );
};

const NextIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none" />
    </svg>
  );
};

const PlayIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
    </svg>
  );
};

const ChevronLeft = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "
        fill="currentColor"
      />
    </svg>
  );
};

const PauseIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M3 2h3v12H3zm7 0h3v12h-3z" fill="currentColor" />
    </svg>
  );
};

const PlayerPrevIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" fill="currentColor" />
    </svg>
  );
};

const PlayerNextIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" fill="currentColor" />
    </svg>
  );
};

const ShuffleIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
        fill="currentColor"
      />
    </svg>
  );
};

const RepeatIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
        fill="currentColor"
      />
    </svg>
  );
};

const QueueIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"
        fill="currentColor"
      />
    </svg>
  );
};

const DeviceIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3v8c0 .55.45 1 1 1h5v-1H1V3h5V2H1c-.55 0-1 .45-1 1zm3 11.5c0 .275.225.5.5.5H6v-1H3.5c-.275 0-.5.225-.5.5zM15 2H9c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H9V3h6v11zm-3-8a.75.75 0 100-1.5.75.75 0 000 1.5zm0 6a2 2 0 100-4 2 2 0 000 4zm0-3c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
};

const FullScreenIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"
        fill="currentColor"
      />
    </svg>
  );
};

const FullScreenOffIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.125 2.582l-.707-.707-4.273 4.273L15 4.001v5h5l-2.146-2.146 4.271-4.273zM6.147 17.146l-4.273 4.272.707.707 4.273-4.272L9 19.999v-5H4l2.147 2.147z"
        fill="currentColor"
      />
    </svg>
  );
};

const PictureInPictureIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
          fillRule="nonzero"
        />
        <path d="M10 8h4v3h-4z" />
      </g>
    </svg>
  );
};

const VolumeMutedIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"
        fill="currentColor"
      />
    </svg>
  );
};

const VolumeLowIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.04 5.984l.658-.77q.548.548.858 1.278.31.73.31 1.54 0 .54-.144 1.055-.143.516-.4.957-.259.44-.624.805l-.658-.77q.825-.865.825-2.047 0-1.183-.825-2.048zM0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302z"
        fill="currentColor"
      />
    </svg>
  );
};

const VolumeNormalIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"
        fill="currentColor"
      />
    </svg>
  );
};

const VolumeFullIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
        fill="currentColor"
      />
    </svg>
  );
};

const LyricsIcon = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 1A4.505 4.505 0 004 5.5c0 .731.191 1.411.502 2.022L1.99 13.163a1.307 1.307 0 00.541 1.666l.605.349a1.307 1.307 0 001.649-.283L9.009 9.95C11.248 9.692 13 7.807 13 5.5 13 3.019 10.981 1 8.5 1zM4.023 14.245a.307.307 0 01-.388.066l-.605-.349a.309.309 0 01-.128-.393l2.26-5.078A4.476 4.476 0 007.715 9.92l-3.692 4.325zM8.5 9C6.57 9 5 7.43 5 5.5S6.57 2 8.5 2 12 3.57 12 5.5 10.429 9 8.5 9z"
        fill="currentColor"
      />
    </svg>
  );
};

const CreatePlaylist = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill=""
        d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
      />
    </svg>
  );
};

const LikedSongs = ({ size }: any) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
      />
    </svg>
  );
};
const SpotifyIcon = ({ size }: any) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      fill="currentColor"
    >
      <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z"></path>
    </svg>
  );
};

const TimesIcon = ({ size }: any) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z"></path>
    </svg>
  );
};
const ArrowLeft = ({ size }: any) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
      fill="currentColor"
    >
      <path d="M13.414 3.5a.999.999 0 0 0-1.707-.707l-9.207 9.2 9.207 9.202a1 1 0 1 0 1.414-1.413L6.335 13H20.5a1 1 0 0 0 0-2H6.322l6.799-6.794a.999.999 0 0 0 .293-.707z"></path>
    </svg>
  );
};

const GearIcon = ({ size }: any) => {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-encore-id="icon"
    >
      <path
        d="m23.2 11.362-1.628-.605a.924.924 0 0 1-.52-.7.88.88 0 0 1 .18-.805l1.2-1.25a1 1 0 0 0 .172-1.145 12.075 12.075 0 0 0-3.084-3.865 1 1 0 0 0-1.154-.086l-1.35.814a.982.982 0 0 1-.931-.02 1.01 1.01 0 0 1-.59-.713l-.206-1.574a1 1 0 0 0-.787-.848 12.15 12.15 0 0 0-4.945 0 1 1 0 0 0-.785.848l-.2 1.524a1.054 1.054 0 0 1-.62.747 1.024 1.024 0 0 1-.968.02l-1.318-.795a1 1 0 0 0-1.152.086 12.118 12.118 0 0 0-3.085 3.867 1 1 0 0 0 .174 1.143l1.174 1.218a.91.91 0 0 1 .182.828.949.949 0 0 1-.532.714l-1.618.6a1 1 0 0 0-.653.955 12.133 12.133 0 0 0 1.1 4.822 1 1 0 0 0 1 .578l1.935-.183a.83.83 0 0 1 .654.327.794.794 0 0 1 .188.726l-.6 1.822a1 1 0 0 0 .34 1.106c.66.504 1.369.94 2.117 1.3.748.36 1.532.642 2.338.841a.988.988 0 0 0 .715-.09 1 1 0 0 0 .362-.332l1.136-1.736a.81.81 0 0 1 1.16.022l1.124 1.714a1 1 0 0 0 1.077.422c1.617-.4 3.133-1.13 4.454-2.145a1 1 0 0 0 .341-1.106l-.613-1.859a.771.771 0 0 1 .18-.7.78.78 0 0 1 .635-.317l1.945.183a.994.994 0 0 0 1-.578 12.133 12.133 0 0 0 1.1-4.822 1 1 0 0 0-.643-.953zm-1.6 2.977c-.103.448-.237.888-.4 1.318l-1.213-.115a2.851 2.851 0 0 0-2.9 3.637l.383 1.16a10.09 10.09 0 0 1-2.473 1.191l-.72-1.1a2.691 2.691 0 0 0-2.275-1.18 2.637 2.637 0 0 0-2.232 1.16l-.735 1.12a10.117 10.117 0 0 1-2.471-1.19l.37-1.125a2.879 2.879 0 0 0-2.93-3.669l-1.2.113a10.46 10.46 0 0 1-.4-1.317 10.09 10.09 0 0 1-.214-1.358l.93-.345a3.032 3.032 0 0 0 1.095-4.8L3.55 7.15a10.158 10.158 0 0 1 1.71-2.146l.688.415a3 3 0 0 0 2.875.066 3.022 3.022 0 0 0 1.726-2.283l.105-.8a10.174 10.174 0 0 1 2.745 0l.11.844a3.099 3.099 0 0 0 4.542 2.184l.721-.435a10.22 10.22 0 0 1 1.712 2.146l-.694.72a3.005 3.005 0 0 0 1.084 4.768l.942.35c-.042.457-.113.912-.215 1.36H21.6zM12 7.001a5 5 0 1 0 5 5 5.006 5.006 0 0 0-4.993-5H12zm0 8a3 3 0 1 1 .007 0H12z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const Icon = ({ name, size = 22 }: Props) => {
  const icons: any = {
    home: HomeIcon,
    searchDark: SearchDark,
    searchLight: SearchLight,
    collection: CollectionIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    heartFilled: HeartFilledIcon,
    download: DownloadIcon,
    prev: PrevIcon,
    next: NextIcon,
    downDir: DownDirIcon,
    external: ExternalIcon,
    play: PlayIcon,
    pause: PauseIcon,
    playerPrev: PlayerPrevIcon,
    playerNext: PlayerNextIcon,
    repeat: RepeatIcon,
    shuffle: ShuffleIcon,
    queue: QueueIcon,
    fullScreen: FullScreenIcon,
    fullScreenOff: FullScreenOffIcon,
    pictureInPicture: PictureInPictureIcon,
    device: DeviceIcon,
    volumeMuted: VolumeMutedIcon,
    volumeLow: VolumeLowIcon,
    volumeNormal: VolumeNormalIcon,
    volumeFull: VolumeFullIcon,
    lyrics: LyricsIcon,
    chevronLeft: ChevronLeft,
    logo: LogoIcon,
    createPlaylists: CreatePlaylist,
    likedSongs: LikedSongs,
    spotifyIcon: SpotifyIcon,
    times: TimesIcon,
    gear: GearIcon,
    arrowLeft: ArrowLeft,
  };

  const Component = icons[name];
  return <Component size={size} />;
};
