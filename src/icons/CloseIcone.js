const CloseIcone = ({fill='black', ...props}) =>
<svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M15 5L5 15" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5 5L15 15" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export default CloseIcone