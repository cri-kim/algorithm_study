module.exports.ListNode = (array = []) => {
  return array.reduceRight((next, val) => ({ val, next }), null);
};
