export const productFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/products");
    if (!res.ok) throw new Error(res.status);
    return res.json();
    } catch (err) {
    console.log(err.message);
  }
};
export const categoryFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/category");
    if (!res.ok) throw new Error(res.status);
    return res.json();
    } catch (err) {
    console.log(err.message);
  }
};
export const BannerFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/banners");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
};
export const brandsFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/brands");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
};
export const FurnitureFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/furniturecategory");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
};
export const vblogFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/vblogs");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
};
export const categoryElemFetch = async () => {
  try {
    const res = await fetch("http://localhost:3004/categoryElem");
    if (!res.ok) throw new Error(res.status);
    return res.json();
  } catch (err) {
    console.log(err.message);
  }
};
