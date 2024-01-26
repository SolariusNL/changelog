export function Logo(props) {
  return (
    <svg
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      alt="Solarius Logo"
      width={props.width || 72}
      height={props.height || 72}
    >
      <path
        d="M40 13.4906H26.4471V0H13.4588C13.4588 7.45283 7.43529 13.4906 0 13.4906V26.5094H13.4588V40H26.4471C26.4471 32.5472 32.5647 26.5094 40 26.5094V13.4906Z"
        fill="#B6B0DA"
      />
    </svg>
  );
}
