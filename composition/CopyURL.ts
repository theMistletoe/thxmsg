const CopyURL = () => {
  const onCopy = () => {
    navigator.clipboard
      .writeText(location.href)
      .then(() => {
        console.log("テキストコピー完了");
      })
      .catch(e => {
        console.error(e);
      });
  };

  return onCopy;
};

export { CopyURL };
