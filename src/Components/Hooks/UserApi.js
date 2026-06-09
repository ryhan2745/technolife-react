/**export const UserFetch = async () => {
  try {
    const res = await fetch(`http://localhost:3004/users`);
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
};

export let CreateUser = async (FormData) => {
  try {
    let res = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`${res.status}`);
    }
  } catch (err) {
    console.log(err.message);
  }
};*/
/*export const CreateUser = (formData) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let isExist = users.find((user) => user.email === formData.email);
  if (isExist) {
    throw new Error("این ایمیل قبلاً ثبت شده");
  }
  users.push(formData);
  localStorage.setItem("users", JSON.stringify(users));
  return formData;
};*/
