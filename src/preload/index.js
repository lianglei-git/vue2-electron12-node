window.addEventListener('DOMContentLoaded', () => {
    console.log('阿萨德拉卡拉开始大家拉数据了打卡记录的框架离开家lk')
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }
  })