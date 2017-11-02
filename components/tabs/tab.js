const Tab = ({tabClass, linkClass, isActive, tabName, click, tabIndex}) => {
  return (
    <li class={`${tabClass}`}>
      <a class={`${linkClass} ${isActive ? 'active' : ''}`} onClick={() => click(tabIndex)}>
      {tabName}</a>
    </li>
  )
}

export default Tab
