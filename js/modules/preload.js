const createPreload = () => {
  const preload = document.createElement('div');
  preload.className = 'preload';

  const preloadOverlay = document.createElement('div');
  preloadOverlay.className = 'preload__overlay';

  const preloadImage = new Image();
  preloadImage.src = 'images/spinner.gif';
  preloadImage.className = 'preload__image';

  preloadOverlay.append(preloadImage);
  preload.append(preloadOverlay);

  return preload;
};

export const showPreload = () => {
  const preload = createPreload();

  document.body.append(preload);
};

export const removePreload = () => {
  document.querySelector('.preload').remove();
};
