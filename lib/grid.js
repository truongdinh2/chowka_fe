module.exports = function({ addUtilities }) {
  for (let i = 1; i <= 12; i++) {
    addUtilities({
      [`.grid-${i}`]: {
        width: `${i/12}%`  
      }
    })
  }
}