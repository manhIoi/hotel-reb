export const validators = {
  email: (v) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(v) || "Please enter a valid email address";
  },
  required: (v) => !!v || "This field is required",
  length: (length) => (v) =>
    v?.length >= length || `Length must be at least ${length}`,
  matchPassword: (compareValue) => (v) =>
    v === compareValue || "Password don't match",
};
