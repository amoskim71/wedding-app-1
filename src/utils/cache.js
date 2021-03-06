import { Asset, Font } from 'expo';


export const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
}
