export const calculateScale = (height: number, scale: number): number =>
  Math.round(height * (scale / 100));

export default calculateScale;
