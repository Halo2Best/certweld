import {TweenMax, TimelineMax} from 'gsap'

const SplitText = (e) => {
  let del = 0.09
  let wordCount
  let string
  let chars = []
  let words = []
  let typeAnimation
  let tweenDel = 0.35
  let height = 10
  let useWords = true

  if (e.length !== undefined) {
    e = Array.from(e)
  } else {
    e = [e]
  }

  e.forEach((elm) => {
    elm = elm.lastChild
    string = elm.innerText
    wordCount = string.split(' ').length
    TweenMax.set(e, {text: '', opacity: 1, perspective: '400px'})
    elm.innerHTML = ''

    const random = (min, max) => {
      return Math.random() * (max - min) + min
    }

    for (let i = 0; i < wordCount + (useWords ? 0 : 1); i++) {
      let char
      let word = wordCount === i ? string : string.split(' ')[i]
      let wordElm = document.createElement('div')
      TweenMax.set(wordElm, {
        className: '+=' + word,
        opacity: useWords ? 0 : 1,
        y: useWords ? '-' + height : 0,
        position: 'relative',
        display: word === '* ' ? 'none' : 'inline-block'
      })
      if (word.length > 0 && !useWords) {
        for (let j = 0; j < word.length; j++) {
          let charElm = document.createElement('div')
          if (word.substring(j, j + 1) === ' ') {
            charElm.innerHTML = '&ensp;'
            TweenMax.set(charElm, {display: 'inline-block'})
          } else {
            char = word.substring(j, j + 1)
            charElm.innerHTML = char
            TweenMax.set(charElm, {
              y: -height,
              opacity: 0,
              position: 'relative',
              display: char === '*' ? 'none' : 'inline-block'
            })
            chars.push(charElm)
          }
          wordElm.appendChild(charElm)
        }
        string = string.substring(word.length, string.length)
      } else {
        wordElm.innerHTML = word + '&ensp;'
      }
      elm.appendChild(wordElm)
      words.push(wordElm)
    }
    typeAnimation = new TimelineMax({
      delay: tweenDel
    })

    for (let l = 0; l < (useWords ? words.length : chars.length); l++) {
      let elms = useWords ? words : chars
      if (elms[l].innerHTML === '*') {
        typeAnimation.add(TweenMax.to(elms[l], random(0.75, 1.75), {
          opacity: 1,
          y: 0
        }))
      } else {
        let dur = elms.innerHTML === '.' &&
        ((elms[l - 1] && elms[l - 1].innerHTML === '.') ||
          (elms[l + 1] && elms[l + 1].innerHTML === '.'))
          ? del * 1.5
          : del
        typeAnimation.add(TweenMax.to(elms[l], dur, {
          opacity: 1,
          y: 0
        }))
      }
    }
  })
}

export default SplitText
