// import { WatermarkOptions } from '../types'

class WatermarkCanvas {
  // constructor (args: Partial<WatermarkOptions> = {}) {
  // }

  /**
   * Create an HD canvas.
   * @param width - width of canvas
   * @param height - height of canvas
   */
  static createCanvas (width: number, height: number): HTMLCanvasElement {
    const ratio = window.devicePixelRatio || 1
    const canvas = document.createElement('canvas')
    canvas.width = width * ratio // actual rendered pixel
    canvas.height = height * ratio // actual rendered pixel
    canvas.style.width = `${width}px` // control display size
    canvas.style.height = `${height}px` // control display size
    canvas.getContext('2d')?.setTransform(ratio, 0, 0, ratio, 0, 0)
    return canvas
  }

  /**
   * Clean the canvas
   * @param canvas
   */
  static clearCanvas (canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')
    if (ctx === null) {
      throw new Error('get context error')
    }
    ctx.restore()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

export {
  WatermarkCanvas
}