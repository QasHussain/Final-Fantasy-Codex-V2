export const truncateMethod = (input, charCount) => {
    if (input.length > charCount) {
        return input.substring(0, charCount) + "...";
      }
      return input;
}

export default truncateMethod;