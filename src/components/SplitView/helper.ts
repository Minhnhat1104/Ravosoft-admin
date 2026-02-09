const SPLIT_DEFAULT_SIZE_PERCENT = 20;

export const getValidSizes = (splitWidth: any) => {
  let sizes = [SPLIT_DEFAULT_SIZE_PERCENT, 100 - SPLIT_DEFAULT_SIZE_PERCENT];
  try {
    sizes = Array.isArray(splitWidth)
      ? splitWidth
      : typeof splitWidth === 'string'
        ? JSON.parse(splitWidth)
        : splitWidth;
  } catch (error) {
    console.error(error);
  }

  return sizes;
};
