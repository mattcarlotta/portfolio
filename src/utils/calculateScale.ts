export default function calculateScale(height: number, scale: number) {
  return Math.round(height * (scale / 100))
}
