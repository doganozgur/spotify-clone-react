const HomeIcon = ({ size }) => {
    return (
        <svg xmins="http://www.w3.org/2000/svg" role="img" height={size} width={size} viewBox="0 0 24 24">
            <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z" fill="currentColor" />
        </svg>
    )
}

const SearchIcon = ({ size }) => {
    return (
        <svg xmins="http://www.w3.org/2000/svg" role="img" height={size} width={size} viewBox="0 0 24 24"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z" fill="currentColor" />
        </svg>
    )
}

const LibraryIcon = ({ size }) => {
    return (
        <svg xmins="http://www.w3.org/2000/svg" role="img" height={size} width={size} className="Svg-sc-1bi12j5-0 jgfuCe collection-icon" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z" fill="currentColor" />
        </svg>
    )
}

const prevIcon = ({ size }) => {
  return (
    <svg
      xmins="http://www.w3.org/2000/svg"
      role="img"
      height={size}
      width={size}
      className="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"
        fill="currentColor"
      />
    </svg>
  );
};

const nextIcon = ({ size }) => {
  return (
    <svg
      xmins="http://www.w3.org/2000/svg"
      role="img"
      height={size}
      width={size}
      className="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"
        fill="currentColor"
      />
    </svg>
  );
};

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    library: LibraryIcon,
    prevIcon: prevIcon,
    nextIcon: nextIcon,
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export {
    Icon
}