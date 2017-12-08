import chunk from 'lodash/chunk'
function num (data) { // 转为货币格式
  if (data > 999) {
    let nums = ''
    data = data.toString()
    let list = chunk([...data].reverse().join('').split(''), 3).reverse()
    list.forEach((item) => {
      nums = nums + item.reverse().join('') + ','
    })
    return nums.substring(0, nums.length - 1)
  } else {
    return data
  }
}
export default {
  bind (el, binding) {
    let nums = 0
    let speed = 1
    let len = binding.value.length
    switch (len) {
      case (8):
        speed = 99999
        break
      case (5):
        speed = 99
        break
      default:
        speed = 9999
    }
    let timer = setInterval(function () {
      if (nums < binding.value) {
        nums += speed
        el.innerHTML = num(nums)
      } else {
        nums = binding.value
        el.innerHTML = num(nums)
        clearInterval(timer)
      }
    }, 1)
  }
}
