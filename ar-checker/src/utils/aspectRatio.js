/** @typedef {'video' | 'photo' | 'social'} AspectRatioGroupId */

/**
 * @typedef {Object} AspectRatio
 * @property {string} label
 * @property {number} w
 * @property {number} h
 * @property {AspectRatioGroupId} group
 * @property {string} hint
 */

/** @type {Record<AspectRatioGroupId, string>} */
export const RATIO_GROUP_TITLES = {
  video: 'Видео и экраны',
  photo: 'Фото и классика',
  social: 'Соцсети и вертикаль',
}

/** @type {AspectRatio[]} */
export const COMMON_RATIOS = [
  { label: '21:9', w: 21, h: 9, group: 'video', hint: 'Ультраширокие мониторы, кинематографический широкий кадр' },
  { label: '16:9', w: 16, h: 9, group: 'video', hint: 'Full HD, 4K, большинство видео и ТВ' },
  { label: '16:10', w: 16, h: 10, group: 'video', hint: 'Многие ноутбуки и мониторы, слайды' },
  { label: '2:1', w: 2, h: 1, group: 'video', hint: 'Широкие панорамы, баннеры' },
  { label: '3:2', w: 3, h: 2, group: 'photo', hint: 'Классический кадр 35 mm, зеркальные камеры' },
  { label: '4:3', w: 4, h: 3, group: 'photo', hint: 'Старое ТВ, многие компактные камеры' },
  { label: '1:1', w: 1, h: 1, group: 'photo', hint: 'Квадрат: аватары, посты, обложки' },
  { label: '4:5', w: 4, h: 5, group: 'social', hint: 'Вертикальный пост Instagram (1080×1350)' },
  { label: '3:4', w: 3, h: 4, group: 'social', hint: 'Портретное фото, печать 10×15 см' },
  { label: '2:3', w: 2, h: 3, group: 'social', hint: 'Вертикальные пины Pinterest' },
  { label: '9:16', w: 9, h: 16, group: 'social', hint: 'Stories, Reels, TikTok, Shorts' },
  { label: '1:2', w: 1, h: 2, group: 'social', hint: 'Очень высокий вертикальный формат' },
]

/** @type {AspectRatioGroupId[]} */
const GROUP_ORDER = ['video', 'photo', 'social']

/**
 * @returns {{ id: AspectRatioGroupId, title: string, items: AspectRatio[] }[]}
 */
export function getRatioReferenceGroups() {
  return GROUP_ORDER.map((id) => ({
    id,
    title: RATIO_GROUP_TITLES[id],
    items: COMMON_RATIOS.filter((r) => r.group === id),
  }))
}

/**
 * @param {number} width
 * @param {number} height
 * @returns {AspectRatio | null}
 */
export function findClosestRatio(width, height) {
  if (!width || !height || width <= 0 || height <= 0) {
    return null
  }

  const targetLog = Math.log(width / height)
  let best = COMMON_RATIOS[0]
  let minDiff = Infinity

  for (const ratio of COMMON_RATIOS) {
    const diff = Math.abs(targetLog - Math.log(ratio.w / ratio.h))
    if (diff < minDiff) {
      minDiff = diff
      best = ratio
    }
  }

  return best
}

/**
 * @param {number} width
 * @param {number} height
 * @param {number} maxSize
 */
export function scaleToFit(width, height, maxSize) {
  const scale = Math.min(maxSize / width, maxSize / height)
  return {
    width: Math.round(width * scale),
    height: Math.round(height * scale),
    scale,
  }
}
