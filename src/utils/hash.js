export default value => {
  const str = JSON.stringify(value);
  let i = 0;
  let h = 0xdeadbeef;
  for(i, h; i < str.length; i++)
    h = Math.imul(h ^ str.charCodeAt(i), 2654435761);
  return (h ^ (h >>> 16)) >>> 0;
};

