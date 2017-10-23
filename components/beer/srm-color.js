export default srmColors = (srm) => {
  switch (srm) {
    case srm <= 2:
      '#f9f754'
      break
    case 3:
      '#f5f616'
      break
    case 4:
      '#ede61a'
      break
    case 5 >= srm <= 6:
      '#d4bc28'
    default:
      'tomato'
  }
}
