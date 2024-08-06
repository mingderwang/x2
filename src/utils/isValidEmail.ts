export async function isValidEmail() {
  return new Promise((resolve, reject) => {
    try {
      const data = { user: "ming" };
      resolve(data);
    } catch (error) {
      reject("error");
    }
  });
}
